<template lang="pug">
  #app
    Nav
    router-view
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Nav from '@/components/nav.vue';
import { Action, Getter } from 'vuex-class';

@Component({
  components: {
    Nav,
  },
})
export default class app extends Vue {
  @Action initAjax: () => void;

  mounted() {
    this.initAjax()
  }
}
</script>
<style lang="scss">
@import '@/style/common.scss'
</style>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
