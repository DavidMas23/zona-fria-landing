# 🍦 Zona Fría - Landing Page

Una landing page optimizada para la heladería **Zona Fría**, construida con Astro y diseñada para despliegue en Vercel gratuito.

## ✨ Características

- **🚀 Astro** - Framework moderno y rápido
- **📱 Diseño Responsive** - Perfecto en móviles y desktop
- **🖼️ Imágenes Optimizadas** - WebP + JPEG con lazy loading
- **🎨 Carrusel Atractivo** - Splide.js liviano y elegante
- **� SEO Optimizado** - Meta tags completos y estructura semántica
- **⚡ Rendimiento** - Optimizado para Vercel gratuito
- **🎨 Colores Neon** - Verde, Rosa y Celeste sobre fondo blanco

## 🚀 Instalación y Desarrollo

### 1. Clonar e instalar dependencias
```bash
npm install
```

### 2. Optimizar imágenes (opcional)
```bash
npm run optimize
```

### 3. Ejecutar en desarrollo
```bash
npm run dev
```

### 4. Construir para producción
```bash
npm run build
```

## 🌐 Despliegue en Vercel

### Opción 1: Deploy Automático (Recomendado)

1. **Subir a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/zona-fria.git
   git push -u origin main
   ```

2. **Conectar a Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Astro
   - ¡Deploy automático! 🎉

### Opción 2: Deploy Manual

1. **Instalar Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Seguir las instrucciones** del CLI

## 📂 Estructura del Proyecto

```
zona-fria-landing/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Hero.astro      # Sección principal
│   │   ├── ImageCarousel.astro  # Carrusel de imágenes
│   │   ├── Productos.astro # Sección de productos
│   │   ├── Ubicaciones.astro   # Sección de ubicaciones
│   │   └── Footer.astro    # Pie de página
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal con SEO
│   ├── pages/
│   │   └── index.astro     # Página principal
│   └── images/             # Imágenes originales
├── public/
│   ├── images/             # Imágenes optimizadas
│   ├── robots.txt          # Configuración SEO
│   ├── sitemap.xml         # Mapa del sitio
│   └── favicon.svg         # Favicon personalizado
├── optimize-images.mjs     # Script de optimización
└── vercel.json            # Configuración de Vercel
```

## 🎨 Personalización

### Colores
Los colores están definidos en `src/layouts/Layout.astro`:
```css
:root {
  --neon-green: #39ff14;
  --neon-pink: #ff073a;
  --neon-blue: #00f5ff;
  --white: #ffffff;
  --dark: #1a1a1a;
}
```

### Contenido
- **Ubicaciones**: Edita `src/components/Ubicaciones.astro`
- **Productos**: Edita `src/components/Productos.astro`
- **Información de contacto**: Edita `src/components/Footer.astro`

### Imágenes
1. Coloca las imágenes originales en `src/images/`
2. Ejecuta `npm run optimize` para generar versiones optimizadas
3. Las imágenes optimizadas se guardan en `public/images/`

## 📊 Optimizaciones Implementadas

### SEO
- ✅ Meta tags completos (title, description, og:*, twitter:*)
- ✅ Texto alternativo en imágenes
- ✅ Estructura semántica HTML5
- ✅ URLs amigables
- ✅ robots.txt y sitemap.xml

### Rendimiento
- ✅ Imágenes WebP + JPEG fallback
- ✅ Lazy loading de imágenes
- ✅ CSS crítico inline
- ✅ Minificación automática
- ✅ Caching optimizado

### Vercel Gratuito
- ✅ Tamaño optimizado < 100MB
- ✅ Build time < 10 minutos
- ✅ Headers de cache configurados
- ✅ Compresión automática

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción (incluye optimización de imágenes)
- `npm run preview` - Vista previa del build
- `npm run optimize` - Solo optimizar imágenes

## � Soporte

Si necesitas ayuda con el despliegue o personalización, no dudes en preguntar.

## 📝 Notas Técnicas

- **Astro v5** - Framework estático moderno
- **Splide v4** - Carrusel liviano (< 50KB)
- **Sharp** - Optimización de imágenes
- **WebP + JPEG** - Máxima compatibilidad
- **Mobile First** - Diseño responsive

---

🍦 **¡Disfruta tu nueva landing page de Zona Fría!** 🍦
