import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath

 } from 'url';
const options = { pretty: true }
const locals = { name: 'Flavien' }
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
  base: './My Cherie', // Критически важно для работы без сервера
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Папка для ресурсов (css, images)
    emptyOutDir: true, // Очищать папку при каждой сборке
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Формат имен файлов
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Пример алиаса (если нужно)
    }
  },
  server: {
    cors: true
  },
  preview: {
    cors: true
  }
});
