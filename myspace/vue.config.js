const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
//  module.exports = {
//   devServer:{
//     port:8080,
//     proxy:{
//       '/api/':{
//         target:'https://app165.acapp.acwing.com.cn',
//         changeOrigin:true,
//         ws:true,
//         pathRewrite:{
//           '^/api':''
//         }
//       }
//     }
//   }
//  }