# Guía de Implementación: MAMB Kids (React + Tailwind CSS)

Para programar esta aplicación con React, utilizaremos un enfoque basado en componentes. Los diseños ya están optimizados con **Tailwind CSS**, lo que facilita enormemente la transición al código.

## 1. Configuración de Estilos (Tailwind Config)
Asegúrate de incluir nuestra paleta de colores en tu `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'caribbean-blue': '#00A3E0',
        'energetic-orange': '#FF6B00',
        'mamb-white': '#F9F9F9',
      },
      borderRadius: {
        'mamb': '48px', // Para ese look de bordes muy redondeados
      }
    },
  },
}
```

## 2. Componentes Base

### Layout Principal (App Shell)
Utiliza la estructura de `{{DATA:SCREEN:SCREEN_6}}` como base para el contenedor principal, incluyendo el `TopAppBar` y el `BottomNavBar`.

### Laboratorio de IA (`Lab.js`)
Copia el HTML de `{{DATA:SCREEN:SCREEN_6}}`. En React, convierte el selector de "Estilos Mágicos" en un componente que maneje un estado (`useState`) para aplicar el filtro visual a la imagen.

### Galería (`Gallery.js`)
Usa el grid de `{{DATA:SCREEN:SCREEN_5}}`. Implementa un mapeo de datos:
```jsx
{artworks.map(art => (
  <ArtCard key={art.id} {...art} />
))}
```

### Vista Museo (`MuseumView.js`)
Para la pantalla `{{DATA:SCREEN:SCREEN_7}}`, utiliza flexbox para centrar los marcos y añade una librería como `react-medium-image-zoom` para recrear la lupa interactiva que definimos en `{{DATA:SCREEN:SCREEN_2}}`.

## 3. Código Fuente
Puedes acceder al código HTML/CSS completo de cada pantalla directamente desde este proyecto para copiar y pegar las clases de Tailwind en tus componentes de React.

¿Te gustaría que profundice en el código de algún componente específico (ej. el Laboratorio de IA o el Visor de Zoom)?