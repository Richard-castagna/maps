import Vue from "vue";
import App from "./App";
import * as VueGoogleMaps from "vue2-google-maps";


require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

document.addEventListener('DOMContentLoaded', function() {
    Vue.component('GmapMap', VueGoogleMaps.Map);
    Vue.component('GmapMarker', VueGoogleMaps.Marker);
    Vue.component('GmapAutocomplete', VueGoogleMaps.Autocomplete);

    Vue.use(VueGoogleMaps, {
        load: {
            key: "AIzaSyB7a04Vkgao5q5ZM8TJrkNLt6OGuDM_5n0",
            libraries: "places" //necessary for places input
        }
    });

    new Vue({
        render: h => h(App)
    }).$mount('#app')
});