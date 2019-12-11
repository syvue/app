<template>
  <ul class="list">
      <!-- 通过v-for循环 遍历传递进来的cities里的数据 -->
      <li class="item" 
      v-for="(item,key) of cities" 
      :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  // props指定传递的数据的类型
  props:{
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    display flex
    flex-direction:column
    justify-content:center
    position:absolute
    top: 1.58rem
    right:0
    bottom:0
    width:.4rem
    .item
      text-align:center
      line-height: .4rem
      color $bgColor
</style>