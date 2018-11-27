<!-- left文章 -->
<template lang='pug'>
  ul#LeftBar
    .item(v-for="art in articles" :key="art.type_id" @click="goDetail(art.type_id)") {{art.title}}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class LeftBar extends Vue {
  @State
  articles: StoreState.articles[]

  get articles(): StoreState.articles[] {
    const articles = this.articles
    return articles
  }

  goDetail(id: any): void {
    // id 的类型为number为什么不行？
    this.$router.push({ path: '/articlesdetail', query: { id: id } })
  }
}
</script>
<style scoped lang='scss'>
#LeftBar {
  width: 50%;
  flex-shrink: 0;
  .item {
    height: 40px;
    text-align: right;
    margin-right: 30px;
    font-size: 20px;
    line-height: 40px;
    font-weight: 700;
    flex-shrink: 0;
    flex-grow: 0;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
