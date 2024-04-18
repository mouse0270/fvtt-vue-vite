import ModuleData from './module.json' with { type: 'json' };
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

const s_SOURCEMAPS = true;
const s_COMPRESS = false;

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/',                 // Source location / esbuild root.
  base: `/${ModuleData.id}/`,    // Base module path that 30001 / served dev directory.
  publicDir: false,             // No public resources to copy.
  cacheDir: '../.vite-cache',   // Relative from root directory.

  resolve: {
    conditions: ['import', 'browser'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    }
  },

  esbuild: {
    target: ['es2022']
  },

  css: {
    // Creates a standard configuration for PostCSS with autoprefixer & postcss-preset-env.
    // postcss: postcssConfig({ compress: s_COMPRESS, sourceMap: s_SOURCEMAPS })
  },

  define: {
    'process.env': {}
  },

  server: {
    port: 29999,
    open: '/game',
    proxy: {
      // Serves static files from main Foundry server.
      [`^(/${ModuleData.id}/(images|assets|lang|packs|style.css))`]: 'http://localhost:30000',

      // All other paths besides package ID path are served from main Foundry server.
      [`^(?!/${ModuleData.id}/)`]: 'http://localhost:30000',

      // Enable socket.io from main Foundry server.
      '/socket.io': { target: 'ws://localhost:30000', ws: true }
    }
  },
  build: {
    outDir: __dirname + '/dist',
    emptyOutDir: false,
    sourcemap: s_SOURCEMAPS,
    brotliSize: true,
    minify: s_COMPRESS ? 'terser' : false,
    target: ['es2022'],
    terserOptions: s_COMPRESS ? { ...terserConfig(), ecma: 2022 } : void 0,
    lib: {
      entry: './assets/scripts/init.mjs',
      formats: ['es'],
      fileName: 'main'
    }
  },
  // Necessary when using the dev server for top-level await usage inside of TRL.
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2022'
    }
  },
  plugins: [vue()],
})
