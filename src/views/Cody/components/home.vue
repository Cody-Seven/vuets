<!-- 首页 -->
<template lang='pug'>
  #Codyhome
    LeftBar
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import LeftBar from './leftBar.vue';
@Component({
  components: {
    LeftBar,
  },
})
export default class Codyhome extends Vue {
}
</script>
<style scoped lang='scss'>
#Codyhome{
  background-color: rgb(188, 210, 222);
  height: 100%;
  width: 100%;
}
</style>
