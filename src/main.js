
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 导入fastclick解决手机或浏览器可能的300毫秒延迟的问题
import store from './store/main'
// 导入store目录下的Vuex
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 导入VueAwesomeSwiper 组件
import './assets/styles/reset.css'
// 重置所有样式
import './assets/styles/border.css'
import 'styles/iconfont.css'

// 解决移动端1像素边框问题
import 'swiper/dist/css/swiper.css'
// 导入swiper样式表

Vue.config.productionTip = false
fastClick.attach(document.body)
// 调用fastClick绑定到document.body上
Vue.use(VueAwesomeSwiper)
// 调用VueAwesomeSwiper
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // 在vue中使用store，而
  components: { App },
  template: '<App/>'
})

