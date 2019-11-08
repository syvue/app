<template>
   <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide><img class="img-d" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/f9511d2b13e02be5aa3969a68d63a633.jpg_750x200_1c250e36.jpg" ></swiper-slide>
    <swiper-slide><img class="img-d" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/0a05e383c888d57d83751171b9c68fd3.jpg_750x200_c82bac08.jpg"></swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
      return {
          swiperOtion: {}
      }
  }
}
</script>

<style lang="stylus" scoped>
    .img-d
      width 100%
</style> 
