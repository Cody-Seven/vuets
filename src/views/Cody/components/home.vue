<!-- 首页 -->
<template lang='pug'>
  #Codyhome
    LeftBar
    .center-bar
    RightBar
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import LeftBar from './leftBar.vue';
import RightBar from './rightBar.vue';
@Component({
  components: {
    LeftBar,
    RightBar
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
  padding-top: 100px;
  text-align: center;
  display: flex;
  .center-bar{
    width: 2px;
    height: 800px;
    background-color: #ccc;
  }
}
</style>
