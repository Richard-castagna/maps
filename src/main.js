import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyB7a04Vkgao5q5ZM8TJrkNLt6OGuDM_5n0',
        libraries: 'places', // This is required if you use the Autocomplete plugin
    }
})




