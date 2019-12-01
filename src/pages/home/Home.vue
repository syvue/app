<template>
     <div>
         <home-header></home-header>
         <home-icons></home-icons>
         <home-swiper></home-swiper>
         <home-hot></home-hot>
         <home-liked></home-liked>
     </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeHot from './components/Hot'
import HomeLiked from './components/Liked'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeHot,
    HomeLiked,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
