<template>
  <div>
      <div class="title">
        <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
        <span class='title-left'>本周热门榜单</span>
        <span class="title-right">全部榜单 ></span>
        </div>
      <div class="wrapper">
          <swiper :options='swiperOption'>
            <!-- hotList修改为list -->
              <swiper-slide v-for='item of list' :key='item.id'>
                  <div class="hot-img">
                    <img class="hot-img-content" :src="item.imgUrl" />
                  </div>  
                    <p class="desc">{{item.desc}}</p>
                    <p class="price">{{item.price}}<span>起</span></p>
              </swiper-slide>
          </swiper>
      </div>
  </div>
</template>

<script>
export default {
  name:'HomeHot',
  props: {
    list: Array
    // props接受list并指定类型为数组
  },
  data () {
    return {
      swiperOption: {
        slidesPerView : 3.5,
        centeredSlides : false
      }
    }
    }
  }

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .title
    position relative
    padding .2rem
    padding-bottom -.1rem
    .title-left
      font-size .32rem;
      line-height .44rem
    .title-img
      display: inline-block;
      overflow: hidden;
      width: .3rem;
      height: .3rem;
      vertical-align: top;
    .title-right
      float right
      color: #616161;
      font-size: .24rem;
      line-height: .28rem;
      position: absolute;
      top: .36rem;
      right: .32rem;
  .wrapper
    height 0
    padding-bottom 40%
    overflow hidden
    width: 100%
    .hot-img
      overflow hidden
      height 24%
      margin-top -.2rem
      .hot-img-content
        margin .15rem
        width: 100%
    .desc
      text-align center
      font-size .24rem
      margin-top .12rem
      line-height: .32rem
      color #212121
      ellipsis()
    .price
      text-align center
      color #ff8300
      span
        color #212121
        font-size .24rem
</style>