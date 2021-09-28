<!--<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform" xmlns:v-bind="http://www.w3.org/1999/xhtml">-->
<template>
  <!--검색바-->
  <v-container class="container_list">

    <!--    <div class="top_list">-->
    <!--      <div class="search_bar" >-->
    <!--        <v-autocomplete v-model="question"-->
    <!--            dense-->
    <!--            filled-->
    <!--            rounded-->
    <!--            solo-->
    <!--            solo-inverted-->
    <!--            class="searchbar_style"></v-autocomplete>-->
    <!--      </div>-->
<!--    <v-text-field-->
<!--        outlined-->
<!--        rounded-->
<!--        label="상품 검색"-->
<!--        v-model="SearchName"-->
<!--        style="margin-top:250px;">-->

<!--    </v-text-field>-->
<!--    <ul style="list-style: none">-->
<!--      &lt;!&ndash; eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if &ndash;&gt;-->
<!--      <li v-for="ProductSearch in ProductSearchs" :key="ProductSearch" v-if="ProductSearch.name.includes(SearchName)">-->
<!--        {{ProductSearch.name}}-->
<!--      </li>-->
<!--    </ul>-->

    <v-text-field
        outlined
        rounded
        label="상품 검색"
        v-model="SearchName" >
      <template v-slot:prepend-inner>
        <v-icon>mdi-magnify</v-icon>
      </template>
      <template v-slot:append>
        <v-progress-circular
            v-if="loading"
            size="24"
            color="rgb(229, 114, 0)"
            indeterminate />
      </template>
    </v-text-field>

    <carousel :autoplay="true" :nav="false" :items="8" :dots="false">
      <!--    <template slot="prev"><span class="prev" >prev</span></template>-->
      <a v-for="(img,pkey) in category" :key="pkey">
        <router-link :to="{name: 'Shop' ,params:{categoryId: img.id}}" style="text-decoration: none">
          <div style="display: flex; flex-direction: column; align-items: center">
          <div class="img-div" style="">
            <img :src="img.categorySrc" style="border-radius: 20px; height: 100px; width: 100px">
          </div>
          <div class="category-title" style="color: black">
            {{img.title}}
          </div>
          </div>
        </router-link>
      </a>

      <!--    <template slot="next"><span class="next">next</span></template>-->
    </carousel>



<!--    &lt;!&ndash; 카테고리 만들기 &ndash;&gt;-->
<!--    <div class="category_big">-->
<!--      <span class="category_name">-->
<!--          &lt;!&ndash; person이라는 각 객체의 profileUrl 키에 접근, 그에 해당하는 value를 동적 바인딩 해준다. &ndash;&gt;-->
<!--          <div v-for="person in people" :key="person.id">-->
<!--            <span><img :src="person.profileUrl" /></span>-->
<!--        </div>-->
<!--      </span>-->

<!--      &lt;!&ndash;          <ul>&ndash;&gt;-->
<!--      &lt;!&ndash;            <span><img :src="cate.png"></a></span>&ndash;&gt;-->
<!--      &lt;!&ndash;            <span><img :src="cate.png"></a></span>&ndash;&gt;-->
<!--      &lt;!&ndash;            <span><img :src="cate.png"></a></span>&ndash;&gt;-->
<!--      &lt;!&ndash;            <span><img :src="cate.png"></a></span>&ndash;&gt;-->
<!--      &lt;!&ndash;            <span><img :src="cate.png"></a></span>&ndash;&gt;-->
<!--      &lt;!&ndash;            <span><img :src="cate.png"></a></span>&ndash;&gt;-->
<!--      &lt;!&ndash;            <span><img :src="cate.png"></a></span>&ndash;&gt;-->
<!--      &lt;!&ndash;            <span><img :src="cate.png"></a></span>&ndash;&gt;-->

<!--      <a v-bind:href="'./views/Home'"> <span style="cursor: pointer; height: 60px; width: 60px; border-radius: 20px"> {{cate1}}</span></a>-->
<!--      <router-link :to="'home'">  <span style="cursor: pointer; height: 60px; width: 60px; border-radius: 20px"> {{cate2}} </span></router-link>-->
<!--      <router-link :to="'home'"> <span style="cursor: pointer; height: 60px; width: 60px; border-radius: 20px">{{cate3}}</span></router-link>-->
<!--      <router-link :to="'home'"> <span style="cursor: pointer; height: 60px; width: 60px; border-radius: 20px">{{cate4}}</span></router-link>-->
<!--      <router-link :to="'home'"> <span style="cursor: pointer; height: 60px; width: 60px; border-radius: 20px">{{cate5}}</span></router-link>-->
<!--      <router-link :to="'home'"> <span style="cursor: pointer; height: 60px; width: 60px; border-radius: 20px">{{cate6}}</span></router-link>-->

<!--      <router-link :to="'home'"> <span style="cursor: pointer; height: 60px; width: 60px; border-radius: 20px"> {{cate7}}</span></router-link>-->
<!--      <router-link :to="'home'"> <span style="cursor: pointer; height: 60px; width: 60px; border-radius: 20px">{{cate8}}</span></router-link>-->

<!--      &lt;!&ndash;          </ul>&ndash;&gt;-->
<!--    </div>-->


    <!-- 드롭바 -->
<!--    style="float:right; padding-top:100px; padding-bottom:100px;"-->
    <div class="option-div" >
<!--      <v-menu offset-y>-->
<!--        <template v-slot:activator="{ on, attrs }">-->
<!--          <v-btn-->
<!--              color="#e57200"-->
<!--              dark-->
<!--              v-bind="attrs"-->
<!--              v-on="on"-->
<!--              style="margin-right:50px"-->
<!--          > 인기순-->
<!--          </v-btn>-->
<!--        </template>-->

<!--        <v-list>-->
<!--          <v-list-item-->
<!--              v-for="(item, index) in items"-->
<!--              :key="index" >-->
<!--            <v-list-item-product_name>{{ item.product_name }}</v-list-item-product_name>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--      </v-menu>-->
      <div class="options">
      <div class="option01">
      <v-col
          class="d-flex"
          cols="12"
          sm="6"
      >
        <v-select
            v-model="selected1"
            :items="items1"
            :label="selected1"
            solo
            error
        ></v-select>
      </v-col>
      </div>

      <div class="option02">
      <v-col
          class="d-flex"
          cols="12"
          sm="6"
      >
        <v-select
            v-model="selected2"
            :items="items2"
            :label="selected2"
            solo
            error
        ></v-select>
      </v-col>
      </div>
      </div>



<!--      <v-menu offset-y class="offset_setting_right">-->
<!--        <template v-slot:activator="{ on, attrs }">-->
<!--          <v-btn-->
<!--              color="#e57200"-->
<!--              dark-->
<!--              v-bind="attrs"-->
<!--              v-on="on"-->
<!--              style="margin-right:60px;"-->
<!--          >-->
<!--            가격-->
<!--          </v-btn>-->
<!--        </template>-->
<!--        <v-list>-->
<!--          <v-list-item-->
<!--              v-for="(item2, index) in items2"-->
<!--              :key="index"-->
<!--          >-->
<!--            <v-list-item-product_name>{{ item2.product_name2 }}</v-list-item-product_name>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--      </v-menu>-->


    </div>
    <!--    <h2 class="display-2 mb-4" style="padding-bottom:150px;">상품 리스트</h2>-->
    <v-layout row wrap style=" display:flex; text-align: center; justify-content: center;">
      <template v-for="(product, index) in products">
        <v-flex xs2 pa-1 :key="index">
          <v-hover>
            <v-card slot-scope="{hover}" class="mx-auto" color="gray lighten-4"  width="1600">
              <!--     <v-img src="https://cdn.vuetifyjs.com/images/cards/kitchen.png" :aspect-ratio="16/ㅁㄴㅁㄴㅇㄴㅇㅁㄴㅇㅁㄴㅇㄹㄹㄹ9">-->
              <!--     <v-img slot-scope="{hover}" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png" :aspect-ratio="16/9">-->
              <v-img :src="product.src" :aspect-ratio="16/9">
                <div>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out black darken-2 display-1 v-card--reveal display-3 black--text" >
                    가격{{product.ttle}}
                  </div>
                </div>
              </v-img>
              <v-card-text class="pt-4" style="position:relative;" >
                <!--                <v-btn absolute color="orange" class="white&#45;&#45;text"   fab medium right top  >-->
                <!--                  <v-icon>shopping_cart</v-icon>-->
                <!--                </v-btn>-->
                <div class="font-weight-light grey--text product_name mb-2">{{product.title}}</div>
                <h3  class="display-1 font-weight-light orang--text mb-2">{{product.title}}</h3>
                <div class="font-weight-light mb-2">{{product.title}}</div>
                <!--<div class="font-weight-light mb2"> Our vintage kitchen 샬라샬라 </div>-->
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </template>
    </v-layout>

    <!--       <v-btn @click="test">test</v-btn>-->
  </v-container>
</template>

<script>
import axios from "axios";
import carousel from 'vue-owl-carousel'

export default {
  name: 'Shop',
  components: { carousel },
  data: () => {
    return {
      loading:false,
      //
      // cate1: '카테고리1',
      // cate2: '카테고리2',
      // cate3: '카테고리3',
      // cate4: '카테고리4',
      // cate5: '카테고리5',
      // cate6: '카테고리6',
      // cate7: '카테고리7',
      // cate8: '카테고리8',

      items1: ['인기순', '추천순', '높은가격순', '낮은가격순'],
      selected1 : '인기순',
      items2: ['1만원대 이상', '2만원대 이상', '5만원대 이상', '10만원대 이상'],
      selected2 : '가격대',

      SearchName:'',

      category: [
        {
          id:1,
          categorySrc: require("@/assets/category/1.jpg"),
          title: '생일'
        },
        {
          id:2,
          categorySrc: require("@/assets/category/2.jpg"),
          title: '명절선물'
        },
        {
          id:3,
          categorySrc: require("@/assets/category/3.png"),
          title: '상품권선물'
        },
        {
          id:4,
          categorySrc: require("@/assets/category/4.jpg"),
          title: '건강/회복'
        },
        {
          id:5,
          categorySrc: require("@/assets/category/5.jpg"),
          title: '가벼운선물'
        },
        {
          id:6,
          categorySrc: require("@/assets/category/6.jpg"),
          title: '툭!백화점'
        },
        {
          id:7,
          categorySrc: require("@/assets/category/7.jpg"),
          title: '스몰럭셔리'
        },
        {
          id:8,
          categorySrc: require("@/assets/category/8.jpg"),
          title: '명품선물'
        },
        {
          id:9,
          categorySrc: require("@/assets/category/9.jpg"),
          title: '어른선물'
        },
        {
          id:10,
          categorySrc: require("@/assets/category/10.jpg"),
          title: '출산/백일돌'
        },
        {
          id:11,
          categorySrc: require("@/assets/category/11.jpg"),
          title: '쓸모없는선물'
        },{
          id:12,
          categorySrc: require("@/assets/category/12.jpg"),
          title: '배달선물'
        },
      ],
      // people: [],
      products: [],


      // items: [
      //   {product_name: '인기순'},
      //   {product_name: '추천순'},
      //   {product_name: '가격낮은순 '},
      //   {product_name: '가격높은순'},
      //   {product_name: '인기순'},
      // ],
    //   items2:
    // [
    //   {product_name2: '1만원 대'},
    //   {product_name2: '2만원 대'},
    //   {product_name2: '5만원 대 '},
    //   {product_name2: '10만원 이상'},
    // ]
  };
  },
  methods: {
    async testBringObjt(){
      await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=160f05c35f34aef167fabe796efb2a8e`)
          .then(res => {
            this.products = res.data.results
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
    }
  },
  mounted(){
    this.testBringObjt()
  }
}
</script>




<style scoped>
.v-application .d-flex {
  display: inline !important;

}
.option-div {
  display: flex ;
  flex-direction: row;
  justify-content: end;
}
.option-div .options {
  margin-left: 100px;
  display: flex;
  flex-direction: row;
}
.option-div .options .option01 {
  width: 150px;
}
.option-div .options .option02 {
  margin-left: 20px;
  width: 200px;
}
/* 전체적인 레이아웃 */
/*.layout {max-width:1100px; justify-content: center; position: relative;}*/
.v-application--wrap {}
.container_list {
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 50px;

  /*text-align: center;*/
  /*display: flex;*/
  /*!*flex-direction:column;*!*/
  /*flex-wrap: wrap;*/
  /*align-items: center;*/
}

/* 가격 드롭바 */
.offset_setting_right {position:absolute; margin-right:20px; position: relative;}


/* 검색창 - 검색창 전체사이즈 */
.top_list> { width:100%; position: relative; margint-top:200px;   }
.search_bar { width:100%; padding-top:200px; position: relative; }


/* 카테고리 사이즈 */
.category_big {width:100%;  position: relative; display:flex; text-align:center; justify-content: center; }
/*.category_name {width:1100px; text-align:center; position: relative; margin-top:100px;}*/

/*.category_name span { margin-left:20px; position: relative; }*/
.category_name span  img {width:80px; float:left; display:flex; margin-left:50px;}



.v-application .primary {background-color:#e57200 !important;}
.primary {background-color:#e57200 !important;}

/* 상품 리스트 */
.display-2 .mb-4 {text-align:center; width:400px; float:left;}
/*.flex { display:flex; float:left; width:1100px;}*/
.xs2 { min-width:275px; float:left;  }

/* 카드 라벨 ㄴ*/
.v-card--reveal{
  /*max-width:1100px; */
  text-align:center;  flex-direction: row;  /*display:flex;*/flex-wrap: wrap;align-items: center;bottom: 0;justify-content: center;opacity: 0.5 ;position: relative ;
  width: 100%
}

/*.v-card h3.display-1 {*/
/*  font-size: 12px !important;*/
/*}*/


</style>




