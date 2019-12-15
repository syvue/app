<template>
  <ul class="list">
      <!-- 通过v-for循环 遍历传递进来的cities里的数据 -->
      <!-- v-for="(item,key) of cities"  -->
      <!-- :key="key" -->
      <li class="item" 
      v-for="item of letters"
      :key="item"
      :ref='item'
      @click="handleLetterClick"
      @touchstart='handleTouchStart'
      @touchmove='handleTouchMove'
      @touchend='handleTouchEnd'
      >
      <!-- {{key}}</li> -->
      {{item}}</li>
      <!--通过click事件绑定handleLetterClick方法-->
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  // props指定传递的数据的类型
  props:{
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods:{
    handleLetterClick (e) {
      this.$emit('change',e.target.innerText)
      // 
      // console.log(e)
      // console.log(e.target.innerText)
      // 输出通过点击获取到的参数e
    },
    handleTouchStart () {
      this.touchStatus = true
     },
    handleTouchMove (e) {
      const startY = this.$refs['A'][0].offsetTop
      // console.log(startY)
      const touchY = e.touches[0].clientY - 79
      // console.log(touchY)
      const index = Math.floor((touchY - startY) / 20)
      if (index >=0 &&  index < this.letters.length){
        this.$emit('change',this.letters[index])
      }
      console.log(index)
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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