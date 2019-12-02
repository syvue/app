<template>
  <div>
    <div class="title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
      <span class="title-content">猜你喜欢</span>
    </div>
    <ul>
        <!-- 将likelist修改为list -->
      <li class="item" v-for='item of list' :key='item.id'>
        <img class="item-img" :src="item.imgUrl" >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p>
            <span class="iconfont" v-html='item.star'>{{item.star}}</span >
            <span class="item-comment">{{item.comment}}</span>
          </p>
          <p class="item-price"><em>¥</em>{{item.price}}<span>起</span></p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>  
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeLiked',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     likeList: [{
  //       id: '001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
  //       title: '上海迪士尼乐园',
  //       star:'&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;',
  //       comment:'277442条评论',
  //       price: '394',
  //       desc: '全球最大的迪士尼城堡'
  //     }, {
  //       id: '002',
  //       imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',
  //       title: '东方明珠',
  //       star:'&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;',
  //       comment:'87877条评论',
  //       price: '80',
  //       desc: '259米透明悬空观光廊了解一下~'
  //     }, {
  //       id: '003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_200x200_6879c7f7.jpg',
  //       title: '上海海昌海洋公园',
  //       star:'&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;',
  //       comment:'25826条评论',
  //       price: '139',
  //       desc: '全球最大的迪士尼城堡'
  //     }, {
  //       id: '004',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
  //       title: '上海迪士尼乐园',
  //       star:'&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;',
  //       comment:'277442条评论',
  //       price: '394',
  //       desc: '全球最大的迪士尼城堡'
  //     },  {
  //       id: '005',
  //       imgUrl: 'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',
  //       title: '东方明珠',
  //       star:'&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;',
  //       comment:'87877条评论',
  //       price: '80',
  //       desc: '259米透明悬空观光廊了解一下~'
  //     }, {
  //       id: '006',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_200x200_6879c7f7.jpg',
  //       title: '上海海昌海洋公园',
  //       star:'&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;&#xe6b0;',
  //       comment:'25826条评论',
  //       price: '139',
  //       desc: '全球最大的迪士尼城堡'
  //     }
  //     ]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  .title
    margin-top .2rem
    background #eee
    padding .2rem
    .title-img
      width .3rem
      height .3rem
      margin-top -.09rem
    .title-content
      margin-left: .08rem
      height: .44rem
      color: red
      font-size: .32rem
      line-height: .44rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    padding-bottom 1rem
    border-bottom 1px solid #ccc
    .item-img
      width: 2rem
      height: 2rem
      padding: .2rem
    .item-info
      flex 1
      padding: .1rem
      margin-top .3rem
      min-width: 0
      .item-title
        height: .44rem
        color: #212121
        font-size: .32rem
        line-height: .44rem
        margin-bottom .1rem
      .iconfont
          color #ffb436
          font-size .25rem
      .item-comment
            color #212121
            margin-left .2rem
      .item-price
        font-size: .4rem
        color #ffb436
        margin-top .2rem
        em
          font-size: .25rem
        span
          color #616161
          font-size: .25rem
      .item-desc
        margin-top .6rem
        color #f55
        font-size .24rem
</style>
