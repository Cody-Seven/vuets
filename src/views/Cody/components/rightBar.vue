<!-- 右侧 -->
<template lang='pug'>
  #RightBar
    .swiper-wrap
      Swiper
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import Swiper from './swiper.vue'

@Component({
  components: {
    Swiper
  }
})
export default class RightBar extends Vue {}
</script>
<style scoped lang='scss'>
#RightBar {
  width: 50%;
  flex-shrink: 0;
  flex-grow: 0;
  .swiper-wrap{
    margin: 0 20%;
  }
}
</style>
