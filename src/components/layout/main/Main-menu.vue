<template>
<div class ="menu">
  <h1>카테고리 상품보기</h1>
<div class="container">
  <div class="inner-container">
    <div class= "item-box">


      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:1}}">
      <div class = "item-box-item item-box-inner1">
        <img class="item img" :src="categoryImg1">
        <div class="img-text">생일</div>
      </div>
      </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:2}}">
        <div class = "item-box-item item-box-inner1">
          <img class="item img" :src="categoryImg2">
          <div class="img-text">명절선물</div>
        </div>
      </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:3}}">
      <div class = "item-box-item item-box-inner1">
        <img class="item img" :src="categoryImg3">
        <div class="img-text">상품권선물</div>
      </div>
    </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:4}}">
        <div class = "item-box-item item-box-inner1">
          <img class="item img" :src="categoryImg4">
          <div class="img-text">건강/회복</div>
        </div>
      </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:5}}">
        <div class = "item-box-item item-box-inner1">
          <img class="item img" :src="categoryImg5">
          <div class="img-text">가벼운선물</div>
        </div>
      </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:6}}">
        <div class = "item-box-item item-box-inner1">
          <img class="item img" :src="categoryImg6">
          <div class="img-text">툭!백화점</div>
        </div>
      </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:7}}">
        <div class = "item-box-item item-box-inner1">
          <img class="item img" :src="categoryImg7">
          <div class="img-text">스몰럭셔리</div>
        </div>
      </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:8}}">
        <div class = "item-box-item item-box-inner1">
          <img class="item img" :src="categoryImg8">
          <div class="img-text">명품선물</div>
        </div>
      </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:9}}">
        <div class = "item-box-item item-box-inner1">
          <img class="item img" :src="categoryImg9">
          <div class="img-text">어른선물</div>
        </div>
      </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:10}}">
        <div class = "item-box-item item-box-inner1">
          <img class="item img" :src="categoryImg10">
          <div class="img-text">출산/백일돌</div>
        </div>
      </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:11}}">
        <div class = "item-box-item item-box-inner1">
          <img class="item img" :src="categoryImg11">
          <div class="img-text">쓸모없는선물</div>
        </div>
      </router-link>
      <router-link class="category-link" :to="{name: 'Shop', params:{categoryId:12}}">
        <div class = "item-box-item item-box-inner1">
          <img class="item img" :src="categoryImg12">
          <div class="img-text">배달선물</div>
        </div>
      </router-link>




    </div>
  </div>
</div>
</div>
</template>
<script>



export default {
  name: 'Main-menu',
  data(){
    return{
      categoryImg1 : require("@/assets/category/1.jpg"),
      categoryImg2 : require("@/assets/category/2.jpg"),
      categoryImg3 : require("@/assets/category/3.png"),
      categoryImg4 : require("@/assets/category/4.jpg"),
      categoryImg5 : require("@/assets/category/5.jpg"),
      categoryImg6 : require("@/assets/category/6.jpg"),
      categoryImg7 : require("@/assets/category/7.jpg"),
      categoryImg8 : require("@/assets/category/8.jpg"),
      categoryImg9 : require("@/assets/category/9.jpg"),
      categoryImg10 : require("@/assets/category/10.jpg"),
      categoryImg11 : require("@/assets/category/11.jpg"),
      categoryImg12 : require("@/assets/category/12.jpg"),
    }
  },

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
.category-link {
  text-decoration: none;
  margin: 10px;
}
.menu{
  max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
  margin-top: 60px;
  margin-bottom: 60px;
}

.menu .container .inner-container .item-box{
  box-shadow: 0.5px 0.5px 5px rgba(229, 114, 0, 0.4);
  border: 1px solid rgb(229, 114, 0);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;

}
.menu .container .inner-container .item-box .item-box-item.item-box-inner1 {
  cursor: pointer;
  margin: 10px;

}
.menu .container .inner-container .item-box .item-box-item .img-text {
  text-align: center;
  color: black;
  font-weight: 700;


}

.menu .container .inner-container .item-box .img{
  border-radius: 50%;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  width: 120px;
  height: 120px;
}


@media screen and (max-width: 415px){
  .menu .container .inner-container .item-box .img{
    width: 75px !important;
    height: 75px !important;
  }
  .menu .container .inner-container .item-box .item-box-item .img-text {
    font-size: 12px !important;
  }
}


</style>