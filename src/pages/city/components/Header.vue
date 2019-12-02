<template>
  <div class="header">
    城市选择
    <router-link to='/'>
       <div class="iconfont header-back">&#xe622;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    position relative
    overflow hidden
    height .86rem
    line-height center
    color：#fff
    background: $bgColor
    font-size: .32rem
    .header-back
		  position: absolute
      top: 0
      left: 0
</style>
