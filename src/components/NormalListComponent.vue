<template>
<div class="normal-list">
  <v-layout row wrap style=" display:flex; text-align: center; justify-content: center;">

    <div id="v-for-div" v-for="product in bringProductList" :key="product.productId">
      <router-link :to="{name: 'detail_page' ,params: {productId: product.productId}}" style="text-decoration: none">

        <v-card
            id="v-card-custom"
            class="mx-auto"
            max-width="200px" >
          <img
              id="card-img"
              class="white--text align-end"
              :src="product.src">

          <v-card-title id="v-card-title-custom">{{ product.title}}</v-card-title>

          <div id="mid-like-div">
            <div class="like-text">
              좋아요: {{product.likeRate}}
            </div>
            <div class="funding-count">
              펀딩수: {{product.fundingCount}}
            </div>
          </div>

          <v-card-subtitle class="pb-0" id="v-card-subtitle-custom">
            <div id="card-brand">
              {{product.brand}}
            </div>
            <div id="card-price" style="color: rgb(229, 114, 0)">
              {{ product.price}} 원
            </div>
          </v-card-subtitle>

          <v-card-text></v-card-text>


        </v-card>

      </router-link>
    </div>
  </v-layout>
</div>
</template>

<script>
export default {
  name: "NormalListComponent",
  props:{
    bringProductList: {
      type: Array
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
#v-for-div {
  margin: 10px 10px;

}
#v-card-custom {
}
#v-card-custom #v-card-title-custom {
  padding: 5px !important;
}
#card-img {
  height: 200px;
  width: 200px;
}
#card-img:hover {

}
#mid-like-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px 10px;
}
#mid-like-div .like-text {
  font-size: 15px;
  color: rgba(0,0,0,.5);
}
#mid-like-div .funding-count {
  font-size: 15px;
  color: rgba(0,0,0,.5);

}


#v-card-subtitle-custom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px 10px 0px;
  padding: 0px;
}
#card-brand {
  font-size: 15px;
}
#card-price {
  font-size: 25px;

}


</style>