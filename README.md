# MAMB Kids - Mi Obra Maestra 🎨

Este proyecto es un **prototipo funcional en laboratorio** desarrollado para el Museo de Arte Moderno (MAMB). Es una plataforma interactiva diseñada para que los niños puedan digitalizar sus obras de arte, pasarlas por un filtro de Inteligencia Artificial que detecta el estilo artístico, y publicarlas en una galería interactiva estilo feed vertical.

🔗 **[Ver Frontend en Vivo (GitHub Pages)](https://javier198191.github.io/maqueta_museo/code.html)** 🔗 **[Ver API Backend (Render)](https://tu-backend.onrender.com/api/artworks)**

## 🚀 Tecnologías Utilizadas

**Frontend:**
* HTML5, CSS3, JavaScript Vanilla
* Tailwind CSS (Mobile First)
* TensorFlow.js & Teachable Machine (Clasificación de IA)

**Backend & Datos:**
* Node.js & Express (API REST)
* Prisma ORM
* PostgreSQL (Hosteado en Neon.tech)
* Supabase (Storage para imágenes)

**Infraestructura:**
* Docker & Docker Compose
* Render (Despliegue Backend)
* GitHub Pages (Despliegue Frontend)

## 🛠️ Estructura del Proyecto (Monorepo)
* `/` (Raíz): Contiene el Frontend estático (`index.html`).
* `/backend`: Contiene la API en Express, el esquema de Prisma y la configuración de Docker.

## ⚙️ Cómo ejecutar localmente con Docker

1. Clona este repositorio.
2. Navega a la raíz del proyecto.
3. Asegúrate de tener tu archivo `.env` configurado con las credenciales de Neon y Supabase.
4. Ejecuta el contenedor:
   ```bash
   docker compose up --build -d
