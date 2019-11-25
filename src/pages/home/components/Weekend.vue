<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item">
          <img class="item-img" src="http://img1.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg" >
          <div class="item-info">
            <p class="item-title">上海泡汤圣地</p>
            <p class="item-desc">上海的朋友总会问，哪里可以泡温泉，哪里的温泉好呢？这里有最好最全的上海温泉</p>
          </div>
        </li>
        <li class="item">
          <img class="item-img" src="http://img1.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg" >
          <div class="item-info">
            <p class="item-title">上海泡汤圣地</p>
            <p class="item-desc">上海的朋友总会问，哪里可以泡温泉，哪里的温泉好呢？这里有最好最全的上海温泉</p>
          </div>
        </li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'Weekend'
}
</script>

<style lang="stylus" scoped>
  .title
    height: .8rem
    padding-left: .26rem
    line-height: .8rem
    color: #212121
  .item
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
    .item-info
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #ccc
</style>