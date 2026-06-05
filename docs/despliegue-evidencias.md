---
sidebar_position: 4
---

# Guía de Despliegue en Azure

### 1. Dockerización
El backend está contenerizado en Node 22-alpine.
Comando local: 
```bash
docker build -t mamb-kids-backend ./backend
```

### 2. Pasos en Azure Portal
*(Evidencias fotográficas requeridas al sustentar)*
1. Creación del Grupo de Recursos.
2. Configuración de Azure Database for PostgreSQL (Flexible Server).
3. Despliegue en Azure Web App for Containers conectado a GitHub.
4. Variables de Entorno (App Settings): `DATABASE_URL`, `JWT_SECRET`, `AZURE_STORAGE_CONNECTION_STRING`.
