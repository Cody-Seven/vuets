<!-- nav -->
<template lang='pug'>
  #Nav
    router-link(to="/") 海绵宝宝 |
    router-link(to="/gunnar") 派大星
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Nav extends Vue {
}
</script>
<style scoped lang='scss'>
#Nav {
  padding: 30px;
  width: 100%;
  position: fixed;
  top: 0;
  margin-left: 0px;
  left: 0;
  z-index: 10;
  background-color: #b4d9ea;
  a {
    font-weight: bold;
    font-size: 24px;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
