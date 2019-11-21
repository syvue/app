<template>
  <div>
      <div class="title">
        <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
        <span class='title-left'>本周热门榜单</span>
        <span class="title-right">全部榜单 ></span>
        </div>
      <div class="wrapper">
          <swiper :options='swiperOption'>
              <swiper-slide>
                  <div class="hot-img">
                    <img class="hot-img-content" src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" />
                  </div>  
                    <p class="desc">上海迪士尼乐园</p>
                    <p class="price">¥352起</p>
              </swiper-slide>
              <swiper-slide>
                   <div class="hot-img">
                    <img class="hot-img-content" src="http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg" />
                   </div>
                    <p class="desc">上海迪士尼乐园</p>
                    <p class="price">¥352起</p>
                    
              </swiper-slide>
              <swiper-slide>
                  <div class="hot-img">
                    <img class="hot-img-content" src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" />
                  </div>  
                    <p class="desc">上海迪士尼乐园</p>
                    <p class="price">¥352起</p>
              </swiper-slide>
              <swiper-slide>
                   <div class="hot-img">
                    <img class="hot-img-content" src="http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg" />
                   </div>
                    <p class="desc">上海迪士尼乐园</p>
                    <p class="price">¥352起</p>
                    
              </swiper-slide>
              <swiper-slide>
                  <div class="hot-img">
                    <img class="hot-img-content" src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" />
                  </div>  
                    <p class="desc">上海迪士尼乐园</p>
                    <p class="price">¥352起</p>
              </swiper-slide>
              <swiper-slide>
                   <div class="hot-img">
                    <img class="hot-img-content" src="http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg" />
                   </div>
                    <p class="desc">上海迪士尼乐园</p>
                    <p class="price">¥352起</p>
                    
              </swiper-slide>
              <swiper-slide>
                  <div class="hot-img">
                    <img class="hot-img-content" src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg" />
                  </div>  
                    <p class="desc">上海迪士尼乐园</p>
                    <p class="price">¥352起</p>
              </swiper-slide>
              <swiper-slide>
                   <div class="hot-img">
                    <img class="hot-img-content" src="http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg" />
                   </div>
                    <p class="desc">上海迪士尼乐园</p>
                    <p class="price">¥352起</p>
                    
              </swiper-slide>
              
          </swiper>
      </div>
  </div>
</template>

<script>
export default {
  name:'HomeHot',
  data () {
    return {
      swiperOption: {
        slidesPerView : 3.4,
        centeredSlides : false,
        offsetPxBefore : 100
      }
    }

    }
  }

</script>

<style lang="stylus" scoped>
  .title
    position relative
    padding .22rem .22rem
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
      height 2.2rem
      .hot-img-content
        margin .2rem
        width: 100%
    .desc
      text-align center
      font-size .24rem
      margin-top .12rem
      line-height: .32rem
      color #212121
    .price
      text-align center
      color #ff8300
</style>