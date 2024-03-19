import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path"; // 第一部分!!!!!!!!!!!!
const resolve = (dir) => path.join(__dirname, dir); // 第二部分!!!!!!!!!!!!

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      defaultExportByFilename: true,
      dirs: ['./src/utils'],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3010",
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp("^/api"), ""),
      },
    },
  },
});
