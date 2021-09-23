<template>
<div class = "search">


<div class = wishlist>{{ bringmainsearch.username}}님의 위시리스트</div>
  <div class="moreandmore" ><router-link to="/wishlist">더보기</router-link> </div>
<div class = no-merchandise>{{ bringmainsearch.fundinglist}}
</div>


<div class="text-center">
  <v-btn  depressed elevation="2"><router-link to="/showfriend">♡친구에게 보여주기</router-link></v-btn>
</div>
</div>
</template>
<script>



export default {
  name: 'Main-search',


      components: {},
      props: {
        bringmainsearch: {
          type: Object
        },
      }

}
</script>
<style>
.search{
  max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
  margin-top: 60px;

}
.search .no-merchandise{
  height: 200px;



}


.search .text-center{
  text-align: center;
}
.search .wishlist{
  text-align: left;
  font-size: 25px;
}
.search .no-merchandise{
  position: relative;
  padding-top: 60px;
  text-align: center;
  color: #e57200;

}
.moreandmore{

  text-align: right;
  margin-top: 10px;

}
</style>