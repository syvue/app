<template>
  <div class="wrapper">
      <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for='item of swiperList' :key='item.id'>
          <img class="swiper-img" :src="item.imgUrl" >
        </swiper-slide>
       
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
      return {
          swiperOption: {
            pagination: '.swiper-pagination',
            loop:true
          },
          swiperList:[{
            id: '001',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/f9511d2b13e02be5aa3969a68d63a633.jpg_750x200_1c250e36.jpg'
          },{
            id: '002',
            imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/0a05e383c888d57d83751171b9c68fd3.jpg_750x200_c82bac08.jpg'
          },{
            id: '003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1706/b8/a8e8ff02b094c802.jpg_750x200_ddaec8e5.jpg'
          }]
      }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
    .wrapper
      overflow hidden
      width: 100%
      height: 0
      padding-bottom: 26.66%
      background: #ccc
      .swiper-img
        width 100%
      
</style> 
