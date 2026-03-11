import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: [camelCase|dashes], // 修改css modules的类名规则 可以改成驼峰命名 或者 xxx-xxx命名等
      generateScopedName: '[name]__[local]___[hash:base64:5]', // 修改css modules的类名规则

      // generateScopedName: '[local]_[hash:base64:5]' // 只保留类名和哈希值
      //   // 或者
      //   generateScopedName: '[hash:base64:8]' // 只使用哈希值
      //   // 或者
      //   generateScopedName: '[name]_[local]' // 只使用文件名和类名，没有哈希
      //   // 或者
      //   generateScopedName: '[local]--[hash:base64:4]' // 自定义分隔符
    },
  },
  plugins: [react()],
})
