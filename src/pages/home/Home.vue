<template>
     <div>
         <home-header></home-header>
         <home-icons></home-icons>
         <home-swiper></home-swiper>
         <home-hot></home-hot>
         <home-liked></home-liked>
         <home-weekend></home-weekend>
     </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeSwiper from './components/Swiper'
import HomeHot from './components/Hot'
import HomeLiked from './components/Liked'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
// 引入axions
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeHot,
    HomeLiked,
    HomeWeekend,
    HomeIcons
  },
  // 在methods中定义函数getHomeInfo()
  methods: {
    getHomeInfo () {
      // getHomeInfo中使用axios请求index.json的数据，然后执行getHomeInfoSucc函数
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
      //static目录下的文件可以在地址栏上直接访问，src目录下文件不能直接访问，
      //但是从上线和安全角度考虑我们需要使用代理转发机制将真实的访问目录隐藏替换成api
      //我们可以在config目录下的index.js文件里proxyTable里实现这个功能
    },
      // getHomeInfoSucc会将获取成功的数据打印
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  // 生命周期函数mounted
  mounted () {
    //在生命周期中执行getHomeInfo函数
    this.getHomeInfo()
    HomeWeekend,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
