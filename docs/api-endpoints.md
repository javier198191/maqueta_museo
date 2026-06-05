---
sidebar_position: 3
---

# Documentación de la API REST

Todos los endpoints gestionan JSON y manejan cargas multimedia con `multipart/form-data`.

### 1. Autenticación y Usuarios

#### Registrar Usuario
* **Endpoint:** `POST /api/auth/register`
* **Descripción:** Registra un perfil. Valida duplicados.
* **Cuerpo JSON requerido:** `email`, `password`, `artistName`.

#### Iniciar Sesión
* **Endpoint:** `POST /api/auth/login`
* **Descripción:** Autentica y retorna token JWT y rol.
* **Respuesta Exitosa JSON:** `token`, `user` (id, email, role).

### 2. Gestión de Obras (/api/artworks)

#### Obtener Obras
* **Endpoint:** `GET /api/artworks`
* **Descripción:** Lista completa de obras.

#### Crear Nueva Obra
* **Endpoint:** `POST /api/artworks`
* **Seguridad:** Token opcional.
* **Formato:** `multipart/form-data` (`image`, `title`, `author`, `category`, `aiStyle`, `description`).

#### Eliminar Obra
* **Endpoint:** `DELETE /api/artworks/:id`
* **Seguridad:** Obligatorio JWT. Solo el dueño de la obra o un rol ADMIN pueden borrarla.
