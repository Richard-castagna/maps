
<template>
    <div class="container">
        <h1 class="header-padding">Google Maps Coding Test</h1>
      <div class="row">
          <div class="col col-5">
              <label>
                  Add Marker
                  <span class="form-inline">
                      <GmapAutocomplete @place_changed="setPlace" class="form-control form-control-md">
                      </GmapAutocomplete>
                      <button @click="usePlace" class="btn btn-primary btn-padding">Add</button>
                  </span>
              </label>
              <br style="clear:both;" />
              <label class="input-padding">
                  Remove Marker
                  <span class="form-inline">
                      <GmapAutocomplete @place_changed="setPlace" class="form-control form-control-md">
                      </GmapAutocomplete>
                      <button @click="removePlace" class="btn btn-secondary btn-padding">Remove</button>
                  </span>
              </label>
          </div>
          <div class="col col-7">

            <GmapMap style="width: 100%; height: 500px;" :zoom=this.zoom :center=this.center >
              <GmapMarker v-for="(marker, index) in markers"
                          :key="index"
                          :position="marker.position"
              />
              <GmapMarker
                      v-if="this.place"
                      label="★"
                      :position="{
                  lat: this.place.geometry.location.lat(),
                  lng: this.place.geometry.location.lng(),
                }"
              />
            </GmapMap>
          </div>
      </div>
  </div>
</template>

<script>

    export default {
        name: 'maps',
        data() {
            return {
                markers: [],
                place: null,
                center: {lat:41.2565,lng:-95.9345},
                zoom: 3
            }
        },
        methods: {
            setPlace(place) {
                this.place = place
            },
            usePlace() {
                if (this.place) {
                    this.markers.push({
                        position: {
                            lat: this.place.geometry.location.lat(),
                            lng: this.place.geometry.location.lng(),
                        }
                    })
                    this.center = {
                        lat: this.place.geometry.location.lat(),
                        lng: this.place.geometry.location.lng(),
                    }
                    this.zoom = 10

                    this.place = null;
                }
            },
            removePlace(){
                if(this.place){
                    for(let iterator = 0; iterator <= this.markers.length; iterator ++){
                        if (this.markers[iterator].position.lat == this.place.geometry.location.lat() && this.markers[iterator].position.lng == this.place.geometry.location.lng()){
                            this.markers.splice(iterator, 1)
                            this.place = null;
                            break;
                        }

                    }
                }
            }
        }
    }
</script>
<style>
    .header-padding{
        padding-bottom:40px;
    }
    .input-padding{
        padding-top:25px;
    }
    .btn-padding{
        margin-left:10px;
    }
</style>