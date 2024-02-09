import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '',
  build: {
    publicDir: 'public', 
    assetsDir: 'assets'
  },
  server: {
    port: 3000, 
    host: '0.0.0.0'
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
        src: 'files',
        dest: 'assets'
      }
    ]
    })
  ]
})
