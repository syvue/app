<template>
     <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe622;</div>
        </div>
        <div class="header-input">
              <span class="iconfont">&#xe647;</span>
                 输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            {{this.city}}
            <!-- 传入城市的名称 -->
             <span class="iconfont arrow-icon">&#xe6aa;</span>
        </div>
     </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
    // 通过props指定接受数据的类型，city必须是String字符串类型
  }
}
</script>

<style lang='stylus' scoped>
  .header
    display: flex
    line-height: .88rem
    background: #00afc7
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>