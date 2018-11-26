<!-- left文章 -->
<template lang='pug'>
  ul#LeftBar
    li(v-for="art in articles" :key="art.type_id") {{art.title}}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';

@Component
export default class LeftBar extends Vue {
  @State articles: StoreState.articles[];
  get articles(): StoreState.articles[] {
    const articles = this.articles;
    return StoreState.articles;
  }
}
</script>
<style scoped lang='scss'>
#LeftBar{
  flex: 1;
  background-color: aqua;
}
</style>
