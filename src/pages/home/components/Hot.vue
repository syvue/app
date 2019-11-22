<template>
  <div>
      <div class="title">
        <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
        <span class='title-left'>本周热门榜单</span>
        <span class="title-right">全部榜单 ></span>
        </div>
      <div class="wrapper">
          <swiper :options='swiperOption'>
              <swiper-slide v-for='item of hotList' :key='item.id'>
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
  data () {
    return {
      swiperOption: {
        slidesPerView : 3.5,
        centeredSlides : false
      },
      hotList:[{
        id:'001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg',
        desc: '上海迪士尼乐园',
        price: '¥352'
      }, {
        id:'002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg',
        desc: '上海欢乐谷',
        price: '¥159'
      }, {
        id:'003',
        imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg',
        desc: '东方明珠',
        price: '¥80'
      }, {
        id:'004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_250x250_170cb921.jpg',
        desc: '上海海昌海洋公园',
        price: '¥139'
      }, {
        id:'005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/26/2645c1b2ee526285a3.water.jpg_250x250_c9ab8185.jpg',
        desc: '黄浦江游览（十六铺码头）',
        price: '¥80'
      }, {
        id:'006',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg',
        desc: '上海迪士尼乐园',
        price: '¥352'
      }, {
        id:'007',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_250x250_57ac4faa.jpg',
        desc: '上海迪士尼乐园',
        price: '¥352'
      }, {
        id:'008',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_250x250_963fe222.jpg',
        desc: '上海欢乐谷',
        price: '¥159'
      }, {
        id:'009',
        imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_250x250_87692c41.jpg',
        desc: '东方明珠',
        price: '¥80'
      }, {
        id:'010',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_250x250_170cb921.jpg',
        desc: '上海海昌海洋公园',
        price: '¥139'
      }, {
        id:'011',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/26/2645c1b2ee526285a3.water.jpg_250x250_c9ab8185.jpg',
        desc: '黄浦江游览（十六铺码头）',
        price: '¥80'
      }]
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