# MAMB Kids - Mi Obra Maestra 🎨

Prototipo funcional en laboratorio para el Museo de Arte Moderno (MAMB). Permite digitalizar arte infantil, usar IA para detectar estilos y publicarlo en un feed vertical.

🔗 **[Ver Aplicación en Vivo (Dominio Oficial)](https://www.tecnologiaweb.store)**

## Tecnologías Utilizadas
* **Frontend:** HTML5, Tailwind CSS, JavaScript, TensorFlow.js (Teachable Machine).
* **Backend:** Node.js, Express, Prisma ORM.
* **Infraestructura:** Docker, Azure Web App, Azure PostgreSQL, Azure Blob Storage, Azure Static Web Apps.

## Estructura (Monorepo)
* **Raíz:** Frontend (`index.html`) y Docusaurus (`/docs`).
* **/backend:** API Express y Dockerfile.

## Ejecución Local
1. Configurar `.env` en `/backend`.
2. Ejecutar: 
   ```bash
   docker compose up --build -d
   ```
3. Backend disponible en http://localhost:3001
