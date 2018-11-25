<!-- left文章 -->
<template lang='pug'>
  ul#LeftBar
    li(v-for="art in articles" :key="art")
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
@Component
export default class LeftBar extends Vue {
  private articles: object = {
    title: 'hi',
    time: '123123',
    type_id: 1,
    type_name: 'test',
  };
}
</script>
<style scoped lang='scss'>
</style>
