<!-- 右侧 -->
<template lang='pug'>
  <div id='RightBar'>
    div this is right bar
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class RightBar extends Vue {
}
</script>
<style scoped lang='scss'>
#RightBar{
  flex: 1;
}
</style>
