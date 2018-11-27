<!-- 右侧 -->
<template lang='pug'>
  #RightBar
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
  flex: 1;
}
</style>
