import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false

import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDtdNPDV-vi8sFy2Zf4BhCqKtk_ujbqua8',
    libraries: 'places',
  },
})

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1500,
  scale: 1,
  distance: '0',
  mobile: false
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
