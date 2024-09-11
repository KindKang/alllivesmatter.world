import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // sourcemap: true, // This enables source map generation
    minify: process.env.NODE_ENV === 'production', // Only minify in production
  },
  plugins: [react(),
  visualizer({
    open: true,
    filename: 'dist/stats.html',
    exclude: [{ file: 'ptools/**' }],
    gzipSize: true,
    brotliSize: true,
  }),
  ],
})
