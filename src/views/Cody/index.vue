<template lang="pug">
  #home cody
    Codyhome
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Codyhome from './components/home.vue';

@Component({
  components: {
    Codyhome,
  },
})
export default class Home extends Vue {}
</script>
<style>
#home{
  height: 100%;
}
</style>

