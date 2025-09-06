import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdir, stat } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, 'src/images');
const outputDir = join(__dirname, 'public/images');

async function optimizeImages() {
  try {
    // Crear directorio de salida si no existe
    await import('fs').then(fs => {
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
    });

    // Leer archivos de la carpeta de imágenes
    const files = await readdir(inputDir);
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.jpeg') || 
      file.toLowerCase().endsWith('.png')
    );

    console.log(`🖼️  Optimizando ${imageFiles.length} imágenes...`);

    for (const file of imageFiles) {
      const inputPath = join(inputDir, file);
      const fileName = file.replace(/\.[^/.]+$/, "");
      
      // Generar versiones optimizadas
      const promises = [
        // WebP versión original
        sharp(inputPath)
          .webp({ quality: 85 })
          .resize(800, 600, { fit: 'cover' })
          .toFile(join(outputDir, `${fileName}.webp`)),
        
        // WebP versión thumbnail
        sharp(inputPath)
          .webp({ quality: 80 })
          .resize(400, 300, { fit: 'cover' })
          .toFile(join(outputDir, `${fileName}-thumb.webp`)),
        
        // JPEG optimizado como fallback
        sharp(inputPath)
          .jpeg({ quality: 85, progressive: true })
          .resize(800, 600, { fit: 'cover' })
          .toFile(join(outputDir, `${fileName}.jpg`)),
      ];

      await Promise.all(promises);
      console.log(`✅ Optimizada: ${file}`);
    }

    console.log(`🎉 Optimización completada! Las imágenes están en /public/images/`);
    console.log(`📊 Tip: Las imágenes WebP son ~30% más pequeñas que JPEG`);
    
  } catch (error) {
    console.error('❌ Error optimizando imágenes:', error);
  }
}

optimizeImages();
