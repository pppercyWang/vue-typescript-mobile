module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  configureWebpack: config => {
  },
  devServer: {
    // 配置代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8848/',
        changeOrigin: true,
      }
    }
  },
}
