---
sidebar_position: 2
---

# Arquitectura de Software e Infraestructura en la Nube

El sistema adopta una **Arquitectura Desacoplada (Monorepo)**, optimizando los recursos de cómputo y almacenamiento mediante servicios gestionados en **Microsoft Azure**.

```mermaid
graph TD
    A[Frontend: GitHub Pages] -->|Fetch API / HTTPS| B[Backend API: Azure Web App]
    B -->|Prisma ORM| C[Base de Datos: Azure PostgreSQL]
    B -->|Azure SDK| D[Almacenamiento: Azure Blob Storage]
```
