FROM node:22-alpine

# Instalar dependencias del sistema necesarias para Prisma en Alpine
RUN apk add --no-cache openssl

# Crear directorio de la app
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Copiar carpeta prisma para generar el cliente
COPY prisma ./prisma/

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Generar el cliente de Prisma
RUN npx prisma generate

# Exponer puerto 3001
EXPOSE 3001

# Comando para ejecutar la app
CMD ["node", "server.js"]
