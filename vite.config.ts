import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

const pathResolve = (dir: string): string => {
  return resolve(__dirname, dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  resolve: {
    extensions: ['.js','.ts','.vue'],
    alias: {
      '@': pathResolve('src'),
      'api': pathResolve('src/api'),
      'assets': pathResolve('src/assets'),
      'components': pathResolve('src/components'),
      'store': pathResolve('src/store'),
      'utils': pathResolve('src/utils'),
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
