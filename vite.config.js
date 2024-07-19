import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [react()],
    server: {
      host: true,
      watch: {
        usePolling: true
      },
      proxy: {
        '/api': {
          target: 'https://www.fffa.org',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/wp-admin/admin-ajax.php')
        }
      }
    }
  }
})
