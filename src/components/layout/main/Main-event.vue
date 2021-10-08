<template>
  <div class = "event">
    <div class="event-main-title">
      <h2>이벤트 상품</h2>
    </div>
    <div class="event-content-list">
      <div class="event-second-div">

        <div class="event-img-div" v-for="(event, ekey) in bringmainEvent" :key="ekey" >
          <router-link :to="{name:'EventPage', params:{eventId:event.eventId}}" style="text-decoration: none;">
            <div class="event-img-content">
              <img :src="event.presimgUrl">

              <div class="event-img-text">
                {{event.eventTitle}}
                <v-divider
                ></v-divider>
              </div>



            </div>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>
<script>



export default {
  name: "MainEvent",
  props:{
    bringmainEvent:{
      type: Array
    }
  },
  emits:[
    'bringsimg01Click','bringsimg02Click'

  ],

  components: {

  },

}
</script>
<style>
.event{
  margin-top: 20px;
  margin-bottom: 20px;


}
.event-main-title{
  padding-bottom: 30px;
}

.event .event-content-list {
  margin: auto;
  max-width: 1100px;
}
.event .event-content-list .event-second-div{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

}

.event .event-content-list .event-second-div .event-img-div {
  margin: 12px 5px;
  height: 220px;
}

.event .event-content-list .event-second-div .event-img-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
}
.event .event-content-list .event-second-div .event-img-content img {
  width : 340px;
  height : 170px;
  border-radius: 20px;
}
.event .event-content-list .event-second-div .event-img-content .event-img-text{
  max-width: 300px;
  font-size: 15px;
}

@media screen and (max-width: 320px){
  .event .event-content-list .event-second-div .event-img-content img {
    width : 286px;
  }
  .event .event-content-list .event-second-div .event-img-content .event-img-text{
    max-width: 250px;
  }
}

</style>