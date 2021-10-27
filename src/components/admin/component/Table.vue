<template>
  <div class="user-container">

    <div class="title">
      {{bringData.title}}
    </div>
    <div class="total-count">
      총 : {{bringData.total}}
    </div>


    <div class="table"  id="my-table">
      <div class="column" v-for="(col,ckey) in bringData.column" :key="ckey">
        <div v-show="col.col1" class="text col1">
          {{ col.col1 }}
        </div>
        <div v-show="col.col2" class="text col2" >
          {{ col.col2 }}
        </div>
        <div v-show="col.col3" class="text col3" >
          {{ col.col3 }}
        </div>
        <div v-show="col.col4" class="text col4" >
          {{ col.col4 }}
        </div>
        <div v-show="col.col5" class="text col5" >
          {{ col.col5 }}
        </div>
        <div v-show="col.col6" class="text col5" >
          {{ col.col6 }}
        </div>
        <div  v-show="col.col7" class="text status-col">
          {{col.col7}}
        </div>
<!--        <div v-show="col.col8" class="text delete-col">-->
<!--          삭제-->
<!--        </div>-->
        <div v-show="col.col9" class="text">
          {{ col.col9 }}
        </div>
      </div>


      <div class="column" v-for="data in paging" :key="data.data1">
        <div v-if="bringData.list.length==0">
          데이터가 없습니다.
        </div>
        <div v-show="data.data1" class="text col1" >
          {{ data.data1 }}
        </div>
        <div v-show="data.data2" class="text col2" >
          {{ data.data2 }}
        </div>
        <div class="text col3" >
          {{ data.data3 }}
        </div>
        <div class="text col4" >
          {{ data.data4 }}
        </div>
        <div v-show="data.data5" class="text col5" >
          {{ data.data5 }}
        </div>
        <div v-show="data.data6" class="text col6" >
          {{ data.data6 }}
        </div>

        <div v-show="data.data7" class="text status" >
          <v-select class="select"
                    @change="getUpdate(data.data1, data.data7)"
                    v-model=data.data7
                    :items="items1"
                    solo
                    error
          ></v-select>

          <template>
            <v-row justify="center">
              <v-dialog
                  v-model="dialog"
                  persistent
                  max-width="300px"
              >

                <v-card>
                  <v-card-title>
                    <span class="text-h5">택배등록</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-text-field
                            label="운송장번호를 등록해주세요."
                            required
                            v-model="deliveryNum"
                        ></v-text-field>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="insertDelivery(data.data1)"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </template>

        </div>
        <div v-show="data.data8" class="text delete" @click="check(data.data1)">
          {{data.data8}}
        </div>
        <div v-show="data.data9" class="text" >
          <img class="item img" :src="data.data9" >
        </div>

      </div>

    </div>
    <div class = "page-div">
      <v-pagination
          v-model="page"
          :length="Math.ceil( bringData.list.length/perPage)"
      ></v-pagination>
    </div>

  </div>



</template>

<script>
import axios from "axios";
import {getHeaders} from "@/service/header";
import {reServerSend} from "@/service/refreshForAccessToken";

export default {
  name: "Table",
  props:{
    bringData:{
      type: Object
    }
  },
  data(){
    return{
      dialog : false,
      deliveryNum:'',
      countTry:0,

      page: 1,
      perPage: 3,
      search:'',
      userId:0,
      userName:'',
      userRole:'',
      userFundingCount:0,

      items1: ['CHECKING', 'WAITING', 'PROCESSING', 'DEPOSIT_COMPLETED_SHIPPING', 'SHIPPING','COMPLETED'],
      selected1 : 'CHECKING',

      SearchName:''
    }
  },
  methods: {
    check(id) {
      // id 값을 이용한 삭제
      console.log(id)
    },
    insertDelivery(id) {
      let form = new FormData()
      form.append("funding_id", id)
      form.append("delivery_num",this.deliveryNum)
      axios.post("http://192.168.0.165:9090/admin/update/shipping",form,getHeaders())
      .then(()=>{
        this.dialog = false
      })
      .catch(()=>{
        this.dialog = false
        alert("서버와의 연결상태를 확인해주세요.")
      })
    },
    getUpdate(id, status) {
      console.log(id, status)
      axios.post("http://192.168.0.165:9090/admin/update/"+id+"/"+status, getHeaders())
          .then(()=>{
            if (status === "SHIPPING") {
              this.dialog = true
            }
              }
          ).catch(error => {
        console.log(error.messages)
        if (error.response.status===403) {
          this.countTry++
          if (this.countTry == 1) {
            reServerSend()
          }
          console.log("다시 오류인것 확인 로그")
        }
      })
    }
  },
  mounted() {


  },
  computed:{
    paging(){
      return this. bringData.list.slice((this.page - 1)*this.perPage,
          this.page*this.perPage)
    },
  },
  watch: {
    page() {
      console.log(this.page)
    }
  },
}
</script>

<style scoped>

.user-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
}
.table {
  display: flex;
  flex-direction: column;
  border: 0.5px solid rgb(229,114,0);
  border-radius: 20px;
}
.table .column {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(229,114,0);
}

.text {
  word-break: break-all;
  text-align: center;
  width: 100%;
  border-left: .5px solid rgb(229,114,0);
}
.text:nth-child(1) {
  border-left: none;
}
.table .column:last-child {
  border-bottom: none;
}
.table .column:nth-child(1) {
  background-color: rgba(229,114,0,.1);
  border-radius: 20px 20px 0px 0px;
  font-weight: 700;
}
.text.delete {
  cursor: pointer;
}
.text.status .select{
  height: 30px;
  width: 133px;
}
.text.delete:hover {
  background-color: rgba(229, 114, 0, .1);
  border-radius: 0px 0px 20px 0px;
  transition: .5s;
}
.text.status {
  cursor: pointer;
}
.text .item.img {
  width: 50px;
  height: 50px;
}
.text.status:hover {
  background-color: rgba(229, 114, 0, .1);
  transition: .5s;
}
.page-div{
  padding-top: 30px;
}

</style>