import { defineConfig } from 'vite'
    
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/_app.scss";
          @import "./src/scss/_button.scss";
        `
      }
    }
  }
})