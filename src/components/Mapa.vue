<template>
  <div class="mapa" id="task5">
    <gmap-map class="map" :center="position" :zoom="14">
      <gmap-info-window :options="infoOptions" :position="position" :opened="true">
          {{infoContent}}
      </gmap-info-window>
      <gmap-marker :position="position"/>
    </gmap-map>
    <div class="task-5">
      <hr>
      <div class="inner-content" v-scroll-reveal="{ delay: 500 }">
        <h2>Task 5</h2>
        <p>Quas enim kakaw Graeci appellant, vitia malo quam malitias nominare. Idem adhuc; Idemque diviserunt naturam hominis in animum et corpus. Istam voluptatem, inquit, Epicurus ignorat? Duo enim genera quae erant, fecit tria.</p>
        <p><span>Ut proverbia non nulla veriora sint quam vestra dogmata</span><br>An haec ab eo non dicuntur? Idcirco enim non desideraret, quia, quod dolore caret, id in voluptate est. Quoniam, si dis placet, ab Epicuro loqui discimus. Quid sequatur, quid repugnet, vident.</p>
        <button v-scroll-reveal="{ delay: 750 }">Hover to have solid fill</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        infoContent: "Notus IT",
        position: {
            lat: 45.7816441,
            lng: 16.0259327
        },
        infoOptions: {
            pixelOffset: {
                width: 0,
                height: -35
            }
        },
    }
  },
  methods: {
  }
}
</script>

<style lang="sass">
.mapa
  width: 100vw
  background-color: #fff
  box-shadow: 0 25px 100px -12px rgba(0, 0, 0, 1)
  .map
    width: 100%
    height: 500px
  .task-5
    hr
      transform: rotateZ(90deg)
      width: 150px
      background-color: #081B2F
      border: 1px solid #081B2F
    .inner-content
      margin-top: 100px
      padding-bottom: 180px
      display: flex
      flex-direction: column
      justify-content: space-around
      align-items: center
      h2
        color: #081B2F
        text-align: center
        font-size: 50px
        @media (max-width: 1250px)
            margin-top: 40px
            font-size: 40px
        @media (max-width: 700px)
            font-size: 25px
      p
        text-align: center
        width: 60%
        @media (max-width: 700px)
          width: 80%
          font-size: 14px
        color: #5C5C5C
        span
          color: #42BEB2
      button
        margin-top: 50px
        background: transparent
        border: 3px solid orange
        padding: 30px 15px
        color: #081B2F
        transition: all .5s ease
        &:hover
          background: orange
          color: #fff
          cursor: pointer
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3)

.gm-ui-hover-effect 
    display: none !important
</style>