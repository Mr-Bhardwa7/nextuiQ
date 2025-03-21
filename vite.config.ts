import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import {visualizer} from 'rollup-plugin-visualizer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*'],
      exclude: ['src/examples/**/*', '**/examples/**/*', 'src/main.tsx', '**/*.stories.*']
    }),
    visualizer({ 
      filename: './bundle-analysis.html', 
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap' 
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'nextuiq',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: [
        'react', 
        'react-dom',
        'react-icons',
        'react-dropzone',
        'class-variance-authority',
        'clsx',
        'tailwind-merge'
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          const names = assetInfo.names || [];
          if (names.some(name => name.endsWith('.css'))) {
            if (names.some(name => name.includes('.stories.'))) {
              return '';
            }
            return 'style.css';
          }
          return names[0] || '';
        }
      }
    },
    cssCodeSplit: false,  
    sourcemap: false,
    cssMinify: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        ecma: 2020,
        pure_getters: true,
        keep_fargs: false,
        passes: 2,
        unsafe_arrows: true,
        unsafe_methods: true
      },
      mangle: {
        properties: false
      },
      format: {
        comments: false,
        ecma: 2020
      },
    },
    emptyOutDir: true,
    target: 'esnext',
    reportCompressedSize: true
  }
})