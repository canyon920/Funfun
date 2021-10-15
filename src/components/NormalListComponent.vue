<template>
<div class="normal-list">
  <div v-if="bringUserName" class = "wishlist1" style="font-weight: 700"><span style="color: rgb(229, 114, 0)">{{ bringUserName }}</span>님의 위시리스트</div>
  <div v-if="bringscript" class = "listscript">
    {{bringscript}}
  </div>


  <v-layout row wrap style=" display:flex; text-align: center; justify-content: center;">

    <div id="v-for-div" v-for="product in visibleCard" :key="product.productId">
      <router-link :to="{name: 'detail_page' ,params: {productId: product.productId}}" style="text-decoration: none">

        <v-card
            id="v-card-custom"
            class="mx-auto"
            max-width="275px" >
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


  <v-pagination
      v-model="page"
      :length="computedMaxPage"
      style="margin-top: 50px"
  ></v-pagination>
  </div>

</template>

<script>
export default {
  name: "NormalListComponent",

  data() {
    return {
      page: 1,
      perPage: 3,
    }
  },
  props: {
    bringPagenation:{
      type: Object
    },

    bringProductList: {
      type: Array,
      required: true
    },
    bringscript: {
      type: String,
    },
    bringUserName:{
      type:String,
    },
  },
  computed:{
    visibleCard(){
      return this.bringProductList.slice((this.page - 1)*this.perPage,
                                                this.page*this.perPage)
    },
    computedMaxPage() {
      return Math.ceil( this.bringProductList.length/this.perPage)
    }
  },
  watch:{
    page(){
      window.scrollTo({top:0, left:0, behavior:'smooth'})
    },
    computedMaxPage() {
      this.page = 1
    }
  }




}
</script>

<style scoped>
.normal-list {
  margin-top: 20px;
}
.layout.row.wrap {
  margin-top: 20px;
  margin-bottom: 50px;
}
#v-for-div {
  margin: 10px 10px;

}
#v-card-custom {
}
#v-card-custom #v-card-title-custom {
  padding: 5px !important;
}
#card-img {
  height: 275px;
  width: 275px;
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
  font-size: 17px;
  color: rgba(0,0,0,.5);
}
#mid-like-div .funding-count {
  font-size: 17px;
  color: rgba(0,0,0,.5);

}


#v-card-subtitle-custom {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px 10px 0px;
  padding: 0px;
}
#card-brand {
  font-size: 17px;
}
#card-price {
  font-size: 22px;
  margin-top: 2px;

}
.listscript{
  font-size:30px;
  font-weight: 700;
  max-width:1100px;
  left:0; right:0; margin-left:auto; margin-right:auto;
}


</style>