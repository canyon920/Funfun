<template>
  <div class = "event">
    <h2>이벤트 상품</h2>
      <div class="event-second-div">
        <div v-for="(event, ekey) in bringmainEvent" :key="ekey">
      <div class="event-main">
        <div class = "event-img event-1">
          <router-link :to="{name:'mainEvent', params:{eventTitle:event.subTitle}}">
          <img class="sub-img" v-bind:src="event.presimgUrl" >
          </router-link>
        </div>
        <div class = "event-sub-title">
          {{event.eventTitle}}
        </div>
        <div class = "event-sub">
        {{event.subTitle}}
        </div>
      </div>
<!--      <div class="event-main">
        <div class = "event-img event-2">
          <img class="sub-img" v-bind:src="bringmainEvent.presimgUrl02" @click="$emit('bringsimg02Click')" alt="#">
        </div>
        <div class = "event-sub-title">
          10월에태어난 어쩌구
        </div>
        <div class = "event-sub">
          내용 ㅇㅇㅇㅇ
        </div>
      </div>-->
        </div>
      </div>
  </div>
</template>
<script>



export default {
  name: 'Main-event',
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
  margin-bottom: 300px;


}
.event .event-second-div{
  padding-top: 30px;

}
.event .event-second-div .event-main{
  float: left;
  width: 50%;
  text-align: center;

}
.event .event-second-div .event-main .event-img{
  width : 300px;
  height : 200px;
  left:0; right:0; margin-left:auto; margin-right:auto;

}
.event .event-second-div .event-main .event-1{

  background-size: 300px 200px;
}
.event .event-second-div .event-main .event-2{

  background-size: 300px 200px;
}
.event .event-second-div .event-main .event-sub-title{
  font-weight: bold;
  left:0; right:0; margin-left:auto; margin-right:auto;
  text-align: center;
}
.event .event-second-div .event-main .event-sub{

}
.sub-img{
  width: 300px;
  height: 200px;
}
</style>