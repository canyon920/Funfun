<template>
<div class ="search">
<div class="container">
  <div class="inner-container">
    <div class= "item-box">
      <div class = "item-box-item item-box-inner1">
        <div class= "item img1"></div>
        가벼운선물
      </div>
      <div class = "item-box-item item-box-inner2">
        <div class= "item img2"></div>
        럭셔리선물
      </div>
      <div class = "item-box-item item-box-inner3">
        <div class= "item"></div>
        시원한선물
      </div>
      <div class = "item-box-item item-box-inner4">
        <div class= "item"></div>
        럭셔리선물
      </div>
      <div class = "item-box-item item-box-inner5">
        <div class= "item"></div>
        어른선물
      </div>
      <div class = "item-box-item item-box-inner6">
        <div class= "item"></div>
        출산선물
      </div>
      <div class = "item-box-item item-box-inner7">
        <div class= "item"></div>
        명품선물
      </div>
      <div class = "item-box-item item-box-inner8">
        <div class= "item"></div>
        결혼/집들이
      </div>
      <div class = "item-box-item item-box-inner9">
        <div class= "item"></div>
        럭셔리선물
      </div>
      <div class = "item-box-item item-box-inner10">
        <div class= "item"></div>
        쓸모없는선물
      </div>
      <div class = "item-box-item item-box-inner11">
        <div class= "item"></div>
        배달선물
      </div>
      <div class = "item-box-item item-box-inner12">
        <div class= "item"></div>
        남다른선물
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>



export default {
  name: 'Main-menu',

  components: {

  },
  props:{
    mainmenuInfo:{
      type:Object
    }
  },
}
</script>
<style>

.search{
  max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
}
.v-window v-item-group theme--dark v-carousel{
  height: 250px;
}
</style>