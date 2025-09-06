# 🚀 Guía de Despliegue en Vercel - Zona Fría

## 📋 Pasos para Subir a Vercel (Método Recomendado)

### 1. Preparar el Repositorio en GitHub

```bash
# 1. Inicializar git en el proyecto
cd zona-fria-landing
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "🍦 Landing page inicial de Zona Fría"

# 4. Crear repositorio en GitHub (ir a github.com/new)
# Nombre sugerido: zona-fria-landing

# 5. Conectar con GitHub (reemplaza con tu usuario)
git branch -M main
git remote add origin https://github.com/TU-USUARIO/zona-fria-landing.git
git push -u origin main
```

### 2. Conectar con Vercel

1. **Ir a [vercel.com](https://vercel.com)**
2. **Iniciar sesión** con tu cuenta de GitHub
3. **Hacer clic en "New Project"**
4. **Importar** tu repositorio `zona-fria-landing`
5. **Configuración automática**:
   - Framework Preset: **Astro** (se detecta automáticamente)
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
   - Install Command: `npm install` ✅

6. **Hacer clic en "Deploy"** 🚀

### 3. Configuraciones Adicionales (Opcional)

#### Variables de Entorno
Si necesitas configurar algo específico:
- `SITE_URL`: https://tu-dominio.vercel.app

#### Dominio Personalizado
1. En el dashboard de Vercel
2. Ir a tu proyecto → Settings → Domains
3. Agregar tu dominio personalizado

### 4. Updates Automáticos

¡Ya está! Cada vez que hagas un `git push` a la rama main, Vercel desplegará automáticamente.

```bash
# Para hacer cambios
git add .
git commit -m "Actualización: descripción del cambio"
git push
```

## 🔧 Método Alternativo: Vercel CLI

Si prefieres usar la línea de comandos:

```bash
# 1. Instalar Vercel CLI globalmente
npm install -g vercel

# 2. Loguearse
vercel login

# 3. Deploy desde la carpeta del proyecto
cd zona-fria-landing
vercel

# 4. Seguir las instrucciones:
# - Set up and deploy? Y
# - Which scope? (tu usuario)
# - Link to existing project? N
# - Project name: zona-fria-landing
# - Directory: ./
# - Override settings? N
```

## 📊 Verificaciones Post-Deploy

Después del deploy, verifica:

- ✅ **Rendimiento**: La página carga rápido
- ✅ **SEO**: Meta tags aparecen correctamente
- ✅ **Imágenes**: El carrusel funciona y las imágenes cargan
- ✅ **Responsive**: Se ve bien en móvil y desktop
- ✅ **Enlaces**: Todos los botones y enlaces funcionan

## 🐛 Solución de Problemas Comunes

### Error de Build
```bash
# Si el build falla, probar localmente:
npm run build

# Si funciona local pero falla en Vercel:
# - Verificar que node_modules/ esté en .gitignore
# - Verificar que las dependencias estén en package.json
```

### Imágenes no Cargan
```bash
# Las imágenes optimizadas deben estar en public/images/
# Ejecutar antes del deploy:
npm run optimize
```

### Carrusel no Funciona
- Verificar que el CSS de Splide se carga correctamente
- Revisar errores en la consola del navegador

## 🎯 URLs Finales

Después del deploy tendrás:
- **Sitio principal**: https://zona-fria-landing-xxx.vercel.app
- **Dashboard**: https://vercel.com/dashboard
- **Analytics**: Disponibles en Vercel (plan gratuito incluye métricas básicas)

## 💡 Tips para Optimización Continua

1. **Monitorear Core Web Vitals** en Vercel Analytics
2. **Comprimir imágenes** regularmente con `npm run optimize`
3. **Actualizar contenido** editando los componentes en `src/components/`
4. **SEO**: Actualizar meta descriptions según ubicaciones específicas

---

🍦 **¡Tu landing page de Zona Fría estará en línea en menos de 5 minutos!** 🍦
