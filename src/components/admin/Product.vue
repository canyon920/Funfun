<template>
  <div class="product-container">
  <Table :bring-data="productData"/>

    <div class="paginataion-div">
      <v-pagination
          v-model="page"
          class="my-4"
          :length="totalLength"
          :total-visible="visualTotalNum"
      ></v-pagination>
    </div>

  </div>
</template>

<script>
import Table from "@/components/admin/component/Table";
import axios from "axios";


export default {
  name: "Product",
  components: {Table},
  data(){
    return{
      page:1,
      totalLength:5,
      visualTotalNum:10,

      productData:{
        total:0,
        title:'Product',
        column:[
          {
            col1:'상품ID',
            col2:'상품명',
            col3:'좋아요수',
            col4:'펀딩수',
            col8:'삭제',
          }
        ],
        list:[
          {
            data1:1,
            data2:'춘식이와 라이언의 사랑이야기',
            data3: 10,
            data4:10,
            data8:'delete',
          },
        ]
      }
    }
  },
  methods:{
    async setProductList(){
      axios.post("http://127.0.0.1:9090/AdminProductList/test")
          .then(res => {
            this.productData.list = []
            let jdata = JSON.stringify(res.data)
            this.productData.list = JSON.parse(jdata)
            this.productData.total = this.productData.list.length
            console.log(this.productData.list)
          }).catch(error => {
        console.log(error.messages)
      })
    }
  },
  beforeMount() {
     this.setProductList()
  }
}
</script>

<style scoped>

</style>