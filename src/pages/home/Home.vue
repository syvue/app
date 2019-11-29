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
import HomeSwiper from './components/Swiper'
import HomeHot from './components/Hot'
import HomeLiked from './components/Liked'
import HomeWeekend from './components/Weekend'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeHot,
    HomeLiked,
    HomeWeekend,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
