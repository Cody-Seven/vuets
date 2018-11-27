<!-- swiper -->
<template lang='pug'>
  #Swiper
    swiper(:options="swiperOption")
      swiper-slide(v-for="(item, index) in carousels" :key="index")
        .img-wrap
          img(:src="item.url")
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { State } from 'vuex-class'

@Component({
  name: 'carousels',
  components: { swiper, swiperSlide }
})
export default class Swiper extends Vue {
  @State
  carousels: StoreState.carousels[]

  get carousels(): StoreState.carousels[] {
    const articles = this.carousels
    return articles
  }

  private swiperOption: Object = {
    autoplay: true,
    loop: true
  }
}
</script>
<style scoped lang='scss'>
#Swiper {
  padding: 0 80px;
  width: 900px;
  height: 500px;
}
.img-wrap {
  width: 500px;
  height: 500px;
  img{
    width: 500px;
    height: 500px;
  }
}
</style>
