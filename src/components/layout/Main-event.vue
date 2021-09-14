<template>
  <div class = "event">
      <div class="event-second-div">
      <div class="event-main">
        <div class = "event-img event-1">
          <img class="sub-img" v-bind:src="bringmainEvent.presimgUrl01" @click="$emit('bringsimg01Click')" alt="#">
        </div>
        <div class = "event-sub-title">
          8월에태어난 어쩌구
        </div>
        <div class = "event-sub">
          내용ㅇㅇㅇㅇ
        </div>
      </div>
      <div class="event-main">
        <div class = "event-img event-2">
          <img class="sub-img" v-bind:src="bringmainEvent.presimgUrl02" @click="$emit('bringsimg02Click')" alt="#">
        </div>
        <div class = "event-sub-title">
          10월에태어난 어쩌구
        </div>
        <div class = "event-sub">
          내용 ㅇㅇㅇㅇ
        </div>
      </div>
      </div>
  </div>
</template>
<script>



export default {
  name: 'Main-event',
  props:{
    bringmainEvent:{
      type: Object
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


}
.event .event-second-div{

}
.event .event-second-div .event-main{
  float: left;
  width: 50%;
  text-align: center;

}
.event .event-second-div .event-main .event-img{
  width : 200px;
  height : 200px;
  left:0; right:0; margin-left:auto; margin-right:auto;

}
.event .event-second-div .event-main .event-1{


}
.event .event-second-div .event-main .event-2{

  background-size: 200px 200px;
}
.event .event-second-div .event-main .event-sub-title{
  font-weight: bold;
}
.event .event-second-div .event-main .event-sub{

}
.sub-img{
  width: 200px;
  height: 200px;
}
</style>