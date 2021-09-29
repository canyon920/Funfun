<template>
  <div class = "event">
    <div class="event-main-title">
      <h2>이벤트 상품</h2>
    </div>
    <div class="event-content-list">
      <div class="event-second-div">

        <div class="event-img-div" v-for="(event, ekey) in bringmainEvent" :key="ekey" >
          <router-link :to="{name:'mainEvent', params:{eventId:event.eventId}}" style="text-decoration: none;">
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

        <!--        <div v-for="(event, ekey) in bringmainEvent" :key="ekey">-->
        <!--          <div class="event-main">-->
        <!--            <div class = "event-img event-1">-->
        <!--              <router-link :to="{name:'mainEvent', params:{eventId:event.eventId}}">-->
        <!--                <img class="sub-img" v-bind:src="event.presimgUrl" >-->
        <!--              </router-link>-->
        <!--            </div>-->
        <!--            <div class = "event-sub-title">-->
        <!--              {{event.eventTitle}}-->
        <!--            </div>-->
        <!--            <div class = "event-sub">-->
        <!--              {{event.subTitle}}-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
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

/*.event .event-content-list .event-second-div .event-main{*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  justify-content: center;*/
/*  align-items: center;*/

/*}*/
/*.event .event-content-list .event-second-div .event-main .event-img{*/
/*  width : 300px;*/
/*  height : 200px;*/
/*  left:0; right:0; margin-left:auto; margin-right:auto;*/

/*}*/
/*.event .event-content-list .event-second-div .event-main .event-1{*/

/*  background-size: 300px 200px;*/
/*}*/
/*.event .event-content-list .event-second-div .event-main .event-2{*/

/*  background-size: 300px 200px;*/
/*}*/
/*.event .event-content-list .event-second-div .event-main .event-sub-title{*/
/*  font-weight: bold;*/
/*  left:0; right:0; margin-left:auto; margin-right:auto;*/
/*  text-align: center;*/
/*}*/
/*.event .event-content-list .event-second-div .event-main .event-sub{*/

/*}*/
/*.sub-img{*/
/*  width: 300px;*/
/*  height: 200px;*/
/*}*/
</style>