const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-mamb-kids-key';

// 1. CONFIGURACIÓN DE CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// 2. INICIALIZACIÓN LIMPIA DE SUPABASE
let supabaseUrl = process.env.SUPABASE_URL;
if (supabaseUrl && supabaseUrl.endsWith('/rest/v1/')) {
    supabaseUrl = supabaseUrl.replace('/rest/v1/', '');
}
const supabase = createClient(supabaseUrl, process.env.SUPABASE_KEY);

// Configuración de almacenamiento en memoria
const upload = multer({ storage: multer.memoryStorage() });

// POST /api/artworks - Endpoint Robusto
app.post('/api/artworks', upload.single('image'), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'Debes subir una imagen.' });

    try {
        // Generar nombre de archivo plano y limpio
        const cleanName = `obra-${Date.now()}.jpg`;

        // Subida a Supabase
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('mamb-artworks')
            .upload(cleanName, req.file.buffer, {
                contentType: 'image/jpeg',
                upsert: true
            });

        if (uploadError) throw uploadError;

        // Obtener URL pública
        const publicUrl = supabase.storage.from('mamb-artworks').getPublicUrl(cleanName).data.publicUrl;

        // Guardar en Neon.tech (PostgreSQL) con Prisma
        const newArtwork = await prisma.artwork.create({
            data: {
                title: req.body.title || 'Mi Obra Maestra',
                author: req.body.author || 'Anon',
                category: req.body.category || 'General',
                aiStyle: req.body.aiStyle || 'None',
                imageUrl: publicUrl
            }
        });

        res.status(201).json(newArtwork);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al procesar la subida', details: err.message });
    }
});

// =============================================================================
// RUTAS DE AUTENTICACIÓN (PADRES)
// =============================================================================

// POST /api/auth/register - Registrar un nuevo perfil de padres
app.post('/api/auth/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ error: 'Faltan campos requeridos: email, password, name.' });
        }

        // Verificar si el correo ya está registrado
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ error: 'El correo electrónico ya está registrado.' });
        }

        // Encriptar contraseña antes de persistir
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear usuario
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            }
        });

        return res.status(201).json({
            message: 'Registro exitoso.',
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
                createdAt: newUser.createdAt
            }
        });

    } catch (error) {
        console.error('Error en registro:', error);
        return res.status(500).json({ error: 'Error interno del servidor al registrar el perfil.' });
    }
});

// POST /api/auth/login - Iniciar sesión de padres
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Faltan campos requeridos: email, password.' });
        }

        // Buscar usuario en base de datos
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(400).json({ error: 'Credenciales incorrectas.' });
        }

        // Verificar contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Credenciales incorrectas.' });
        }

        // Generar Token JWT
        const token = jwt.sign(
            { id: user.id, email: user.email, name: user.name },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        return res.status(200).json({
            message: 'Inicio de sesión exitoso.',
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        });

    } catch (error) {
        console.error('Error en login:', error);
        return res.status(500).json({ error: 'Error interno del servidor al iniciar sesión.' });
    }
});

// GET /api/artworks - Obtener todas las obras para la galería
app.get('/api/artworks', async (req, res) => {
    try {
        const artworks = await prisma.artwork.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return res.status(200).json(artworks);
    } catch (dbError) {
        console.error('Error al consultar las obras:', dbError);
        return res.status(500).json({ error: 'Error interno al consultar las obras.' });
    }
});

// DELETE /api/artworks/:id - Eliminar una obra (Administrador)
app.delete('/api/artworks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.artwork.delete({
            where: { id }
        });
        res.status(200).json({ message: 'Obra eliminada con éxito.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al eliminar la obra.', details: err.message });
    }
});

// PUT /api/artworks/:id - Actualizar título o autor de una obra (Administrador)
app.put('/api/artworks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    try {
        const updatedArtwork = await prisma.artwork.update({
            where: { id },
            data: {
                title: title !== undefined ? title : undefined,
                author: author !== undefined ? author : undefined
            }
        });
        res.status(200).json(updatedArtwork);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al actualizar la obra.', details: err.message });
    }
});

// Levantar el servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor de MAMB Kids corriendo en http://0.0.0.0:${PORT}`);
});
