import { createStore } from 'vuex'
import ModulProducts from './products';
import ModuleUser from './user';


export default createStore({
  state: {
    // 存储数据
    
  },
  getters: {
    // 获取state中内容，只能读取
    
  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
    // 对state进行整理
    products: ModulProducts,
    user:ModuleUser,
  }
})
//  父组件——>子组件用props
//  子组件——>父组件用emit 
//  vuex可以维护全局变量不用一层一层传递，可以将变量存储到vuex 