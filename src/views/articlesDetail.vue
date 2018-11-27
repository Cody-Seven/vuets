<!-- 文章详情 -->
<template lang='pug'>
  #Articles this is article
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Articles extends Vue {
}
</script>
<style scoped lang='scss'>
#Articles{
  font-size: 18px;
  padding: 100px 0;
}
</style>
