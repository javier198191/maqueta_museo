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

### 3. Configuración de Dominio Personalizado y DNS (Namecheap)
Para mejorar la accesibilidad y el perfil profesional del proyecto, se adquirió y delegó un dominio personalizado.

* **Dominio Adquirido:** `www.tecnologiaweb.store`
* **Proveedor de Registro:** Namecheap

#### Configuración de Registros DNS (Mapeo a Azure):
Se implementó un registro de tipo CNAME en la zona DNS de Namecheap para apuntar el tráfico hacia el host de Azure Static Web Apps:

| Tipo | Host | Destino |
| :--- | :--- | :--- |
| CNAME | www | calm-tree-0b8607210.7.azurestaticapps.net |

![Panel de Control de Namecheap](/img/dns-namecheap.png)

* **URL Inicial de Azure:** https://calm-tree-0b8607210.7.azurestaticapps.net
* **URL Final de Producción:** https://www.tecnologiaweb.store
