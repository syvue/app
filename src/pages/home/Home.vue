<template>
     <div>
         <home-header></home-header>
         <home-swiper></home-swiper>
         <home-hot></home-hot>
     </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeHot from './components/Hot'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeHot
  }
}
</script>

<style scoped>

</style>
