import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import path from "path"
// https://vitejs.dev/config/
// 饿了么按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname,"src")  // 设置 “@” 指向 “src” 目录
    }
  },
  base: "./",   // 设置打包路径
  server: {
    port: 8888, // 设置服务启动打开的端口号
    open: true, // 设置服务打开是否自动打开浏览器
    cors: true, // 允许跨域
    // proxy: {    // 设置代理
    //   "/api" : {
    //     target: "https://huanghanhui.com",
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace("/api","/")
    //   }
    // }
  },
})
