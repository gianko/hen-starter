import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'dashes'
    },
    postcss: {
      plugins: [
        require('postcss-nested'),
        require('postcss-mixins'),
        require('postcss-utilities')
      ]
    }
  }
})
