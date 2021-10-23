<template>
  <!--검색바-->
  <v-container class="container_list">

    <v-text-field @keyup.enter="getSearchName"
                  dense
                  outlined
                  rounded
                  label="상품 검색"
                  v-model="SearchName"
                  ref="blur">
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

    <carousel :autoplay="true" :nav="false" :items="8" :dots="false" :responsive="{
      1600:{
        items:10
      },
      1000:{
        items:8
      },
      758:{
        items:6,
      },
      450:{
        items:4,
      },
      200:{
        items:3,
      }

    }">
      <!--    <template slot="prev"><span class="prev" >prev</span></template>-->
      <a v-for="(img,pkey) in category" :key="pkey">
        <router-link :to="{name: 'Shop' ,params:{categoryId: img.id}}" style="text-decoration: none"
                     @click.native="setProductList">
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

    </carousel>


    <div class="option-div" >
      <div class="options">
        <div class="option01">
          <v-col
              class="d-flex"
              cols="12"
              sm="6"
          >
            <v-select @change="getProductList"
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
            <v-select @change="getProductList"
                      v-model="selected2"
                      :items="items2"
                      :label="selected2"
                      solo
                      error
            ></v-select>
          </v-col>
        </div>
      </div>

    </div>

    <NormalListComponent  :bringProductList="products" :bringscript="producttitle"/>

  </v-container>
</template>

<script>
import axios from "axios";
import carousel from 'vue-owl-carousel'
import NormalListComponent from "@/components/NormalListComponent";

export default {
  name: 'Shop',
  components: {NormalListComponent, carousel},
  data: () => {
    return {
      // pagenation:{
      //   page:1,
      //   perPage:8
      // },

      loading:false,

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
          categorySrc: require("@/assets/category/5.jpg"),
          title: '가벼운선물'
        },
        {
          id:3,
          categorySrc: require("@/assets/category/3.png"),
          title: '상품권선물'
        },
        {
          id:4,
          categorySrc: require("@/assets/category/6.jpg"),
          title: '툭!백화점'
        },
        {
          id:5,
          categorySrc: require("@/assets/category/4.jpg"),
          title: '건강회복'
        },
        {
          id:6,
          categorySrc: require("@/assets/category/7.jpg"),
          title: '스몰럭셔리'
        },
        {
          id:7,
          categorySrc: require("@/assets/category/8.jpg"),
          title: '명품선물'
        },
        {
          id:8,
          categorySrc: require("@/assets/category/9.jpg"),
          title: '어른선물'
        },
        {
          id:9,
          categorySrc: require("@/assets/category/10.jpg"),
          title: '출산/백일돌'
        },
        {
          id:10,
          categorySrc: require("@/assets/category/11.jpg"),
          title: '쓸모없는선물'
        },
        {
          id:11,
          categorySrc: require("@/assets/category/12.jpg"),
          title: '배달선물'
        },{
          id:12,
          categorySrc: require("@/assets/category/13.jpg"),
          title: '따뜻한선물'
        },
      ],
      // people: [],
      products: [],
      producttitle:"놓치고 싶지않은 아이템",

    };
  },
  methods: {
    async setProductList(){
      this.SearchName=''
      this.selected1='인기순'
      this.selected2='가격대'
      var CategoryId = this.$route.params.categoryId
      axios.post("http://127.0.0.1:9090/ProductListPage/"+ CategoryId)
          .then(res => {
            this.settingTitle()
            this.products = []
            let jdata = JSON.stringify(res.data)
            this.products = JSON.parse(jdata)
          }).catch(error => {
        console.log(error.messages)
      })
    },
    async getProductList(){
      var CategoryId = this.$route.params.categoryId
      if(this.SearchName.length>0){return this.setSearchProduct()}
      if(this.selected1 == '인기순' && this.selected2 == '가격대') {
        axios.post("http://127.0.0.1:9090/ProductListPage/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '인기순' && this.selected2 == '1만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/1/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '인기순' && this.selected2 == '2만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/2/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 =='인기순' && this.selected2 == '5만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/3/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '인기순' && this.selected2 == '10만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/4/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }
      if (this.selected1 == '추천순' && this.selected2 == '가격대'){
        axios.post("http://127.0.0.1:9090/ProductListPage/A/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '추천순' && this.selected2 == '1만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/A/1/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '추천순' && this.selected2 == '2만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/A/2/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '추천순' && this.selected2 == '5만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/A/3/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '추천순' && this.selected2 == '10만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/A/4/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }
      if (this.selected1 == '높은가격순' && this.selected2 == '가격대'){
        axios.post("http://127.0.0.1:9090/ProductListPage/B/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '높은가격순' && this.selected2 == '1만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/B/1/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '높은가격순' && this.selected2 == '2만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/B/2/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '높은가격순' && this.selected2 == '5만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/B/3/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '높은가격순' && this.selected2 == '10만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/B/4/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }
      if (this.selected1 == '낮은가격순' && this.selected2 == '가격대'){
        axios.post("http://127.0.0.1:9090/ProductListPage/C/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '낮은가격순' && this.selected2 == '1만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/C/1/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '낮은가겨순' && this.selected2 == '2만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/C/2/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '낮은가격순' && this.selected2 == '5만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/C/3/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '낮은가격순' && this.selected2 == '10만원대 이상'){
        axios.post("http://127.0.0.1:9090/ProductListPage/C/4/"+ CategoryId, null)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }
    },
    async getSearchName(){
      this.selected1='인기순'
      this.selected2='가격대'
      this.$refs.blur.blur()
      this.SearchName = this.SearchName.trim()
      this.SearchName = this.SearchName.replace(/\s/gi, "")
      if(this.SearchName.length>0){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/${this.SearchName}` )
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }
    },
    async setSearchProduct(){
      if(this.selected1 == '인기순' && this.selected2 == '가격대'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '인기순' && this.selected2 == '1만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/1/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '인기순' && this.selected2 == '2만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/2/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 =='인기순' && this.selected2 == '5만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/3/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '인기순' && this.selected2 == '10만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/4/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }
      if (this.selected1 == '추천순' && this.selected2 == '가격대'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/A/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '추천순' && this.selected2 == '1만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/A/1/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '추천순' && this.selected2 == '2만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/A/2/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '추천순' && this.selected2 == '5만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/A/3/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '추천순' && this.selected2 == '10만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/A/4/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }
      if (this.selected1 == '높은가격순' && this.selected2 == '가격대'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/B/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '높은가격순' && this.selected2 == '1만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/B/1/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '높은가격순' && this.selected2 == '2만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/B/2/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '높은가격순' && this.selected2 == '5만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/B/3/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '높은가격순' && this.selected2 == '10만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/B/4/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }
      if (this.selected1 == '낮은가격순' && this.selected2 == '가격대'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/C/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '낮은가격순' && this.selected2 == '1만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/C/1/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '낮은가겨순' && this.selected2 == '2만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/C/2/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '낮은가격순' && this.selected2 == '5만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/C/3/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }else if(this.selected1 == '낮은가격순' && this.selected2 == '10만원대 이상'){
        axios.get(`http://127.0.0.1:9090/ProductListPage/search/C/4/${this.SearchName}`)
            .then(res => {
              this.products = []
              let jdata = JSON.stringify(res.data)
              this.products = JSON.parse(jdata)
            }).catch(error => {
          console.log(error.messages)
        })
      }
    },
    settingTitle() {
      let categoryIdNum = this.$route.params.categoryId
      if (categoryIdNum == 1) {
        this.producttitle = "생일날 이건 꼭 받아야해!"
      } else if (categoryIdNum == 2) {
        this.producttitle = "이정도는 간단하지!"
      } else if (categoryIdNum == 3) {
        this.producttitle = "받고싶은게 애매할땐 상품권!"
      } else if (categoryIdNum == 4) {
        this.producttitle = "놓치고 싶지않은 백화점!"
      } else if (categoryIdNum == 5) {
        this.producttitle = "역시 건강이 최고더라!"
      } else if (categoryIdNum == 6) {
        this.producttitle = "작지만 강한 상품!"
      } else if (categoryIdNum == 7) {
        this.producttitle = "야! 명품, 내꺼하자!"
      } else if (categoryIdNum == 8) {
        this.producttitle = "난 실용적인게 좋드라!"
      } else if (categoryIdNum == 9) {
        this.producttitle = "우리아이를 위해서!"
      } else if (categoryIdNum == 10) {
        this.producttitle = "쓸모없다하지말자..슬프잖아..내가 Get해줄게!"
      } else if (categoryIdNum == 11) {
        this.producttitle = "요즘은 선물도 배달이다!"
      } else if (categoryIdNum == 12) {
        this.producttitle = "받는사람도 따뜻, 주는사람도 따뜻해지는 상품!"
      }

    }
  },
  beforeMount(){
    this.setProductList()
  },
  mounted() {
    this.getSearchName()
    this.settingTitle()
  }
}
</script>




<style scoped>

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

.container_list {
  max-width: 1100px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 50px;

}
.v-application .d-flex {
  display: inline !important;

}

</style>




