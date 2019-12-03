import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
// 添加city页面组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // 添加city页面的路由
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
