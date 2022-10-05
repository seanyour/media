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
  resolve: {
    extensions: ['.js','.ts','.vue'],
    alias: {
      '@': pathResolve('src'),
      'assets': pathResolve('src/assets'),
      'components': pathResolve('src/components'),
      'store': pathResolve('src/store'),
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
