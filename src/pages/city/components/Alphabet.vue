<template>
  <ul class="list">
      <!-- 通过v-for循环 遍历传递进来的cities里的数据 -->
      <!-- v-for="(item,key) of cities"  -->
      <!-- :key="key" -->
      <!-- 用letters数组替换cities对象 -->
      <!-- 添加一个ref,并将ref和key的值都设为item -->
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
      <!--通过click事件绑定对应的点击事件和触屏事件方法-->
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  // props指定传递的cities数据为对象类型
  props:{
    cities: Object
  },
  // 通过letters函数遍历cities
  // 通过letters数组来存储cities的数据
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  // 初始化data数据，设定触屏状态为false
  data () {
    return {
      touchStatus: false
    }
  },
  // 处理点击事件和触屏事件的方法
  methods:{
    // 处理字母单击函数
    handleLetterClick (e) {
      // 通过$emit触发change事件并传入单击事件获取的参数
      this.$emit('change',e.target.innerText)
      // 
      // console.log(e)
      // console.log(e.target.innerText)
      // 输出通过点击获取到的参数e
    },
    // 设定触屏开始，将状态为true，然后就可以拖动
    handleTouchStart () {
      this.touchStatus = true
     },
    // 处理触屏移动事件，接受参数e
    // startY 为获取字母A的顶点位置参数
    // touchY 为当前触摸屏幕的位置
    // index 为字母列表对应屏幕位置的索引
    handleTouchMove (e) {
      // 通过offsetop获取到顶部的距离
      const startY = this.$refs['A'][0].offsetTop
      // console.log(startY)
      // 将触屏的到最顶部的位置减去头部的高度
      const touchY = e.touches[0].clientY - 79
      // console.log(touchY)
      // 通过A的顶点高度参数减去字母表触屏所在位置高度参数在除以字母像素来计算对应字母的序列
      const index = Math.floor((touchY - startY) / 20)
      if (index >=0 &&  index < this.letters.length){
        this.$emit('change',this.letters[index])
      }
      console.log(index)
    },
    // 触屏状态结束，将状态设为false
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