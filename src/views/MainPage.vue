<template>
  <div>
    <Menu/>
    <main>
      <Loading/>
      <Slider/>
      <FiksnaGalerija/>
      <SliderGalerija/>
      <Mapa/>
    </main>
    <FooterComponent/>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Slider from '@/components/Slider.vue'
import FiksnaGalerija from '@/components/FiksnaGalerija.vue'
import SliderGalerija from '@/components/SliderGalerija.vue'
import Mapa from '@/components/Mapa.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import Menu from '@/components/Menu.vue'

export default {
  components: {
    Loading,
    Slider,
    FiksnaGalerija,
    SliderGalerija,
    Mapa,
    FooterComponent,
    Menu,
  }
}
</script>
