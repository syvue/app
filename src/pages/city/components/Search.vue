<template>
<div>
      <div class="search">
        <!-- 添加v-model 双向绑定keyword -->
        <input v-model="keyword" 
               type="text" 
               class="search-input"
               placeholder="输入城市名或拼音" 
        />
      </div>
      <!-- 添加search-content -->
      <!-- 添加 ref=search -->
      <!-- 通过v-show来控制搜索结果是否展示 -->
      <div class="search-content"
           ref="search"
           v-show="keyword"
      >
          <ul>
            <!-- 通过v-for将搜索结果list遍历展示出来 -->
            <li 
              v-for="item of list"
              :key='item.id'
              class="search-item border-bottom"
              >
              {{item.name}}
              </li>
              <!--优化用户体验，增加搜索反馈-->
              <!-- 通过v-show来控制反馈展示 -->
              <li
                class="search-item border-bottom"
                v-show="hasNoData"
              >
                没有找到匹配数据
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
// 导入better-scorll组件
import Bscroll from "better-scroll"
export default {
  name: 'CitySearch',
  // 指定接收传入cities数据类型
  props:{
    cities: Object
  },
  // 在data里初始化keyword,list,timer
  // keyword是我们搜索的关键字
  // list是搜索之后的结果数据
  // timer是一个提高搜索性能的计时器
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  // 通过取反判定是否有数据
  computed:{
    hasNoData () {
      console.log(!this.list.length)
      return !this.list.length
    }
  },
  // 添加watch监听keyword函数
  watch:{
    keyword () {
      // 监听timer并初始化timer
      if(this.timer){
        clearTimeout(this.timer)
      }
      // 监听keyword,并在搜索框为空时初始化搜索结果
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout( () => {
        // 初始化result为空数组，用来接收搜索结果
        const result = []
        // 先通过for循环遍历cities
        for (let i in this.cities) {
          // console.log(this.cities[i])
        // 在一次遍历cities[i]来获取具体的地名拼音和名字 
          this.cities[i].forEach((value) => {
            // 通过数组索引值来判定是否找到对应的拼音和地名
            if (value.spell.indexOf(this.keyword) > -1
              || value.name.indexOf(this.keyword) > -1
            ){
              // 将找到的value推送到result中
              result.push(value)
            }
          })
        }
          // 在将遍历完成后的result数组结果赋值给list
        this.list = result
      },100)
    }
  },
  // 添加生命周期函数mounted
  mounted () {
    this.scroll =new Bscroll(this.$refs.search)
  }

}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
    .search
      background $bgColor
      height .72rem
      padding 0 .1rem
      .search-input
        box-sizing border-box
        width 100%
        height .62rem
        line-height .62rem
        padding 0 .1rem
        text-align center
        border-radius .06rem
        color #666 
        // 给search-content添加样式与search平级
    .search-content
      overflow hidden
      position: absolute
      top:1.58rem
      left:0
      right: 0 
      bottom: 0
      background #eee
      z-index:1
      .search-item
        line-height: .62rem
        padding-left: .2rem
        background #fff
        color: #666
</style>