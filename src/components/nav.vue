<!-- nav -->
<template lang='pug'>
  #Nav
    router-link(to="/") Cody |
    router-link(to="/gunnar") Gunnar
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
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
