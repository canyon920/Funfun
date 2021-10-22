<template>
  <div class="user-container">
    <div class="search-div">
      <v-text-field class="search-bar"
          dense
          outlined
          rounded
          label="사용자명 검색"
          v-model="search" >
        <template v-slot:prepend-inner>
          <v-icon>mdi-magnify</v-icon>
        </template>
      </v-text-field>

    </div>
    <Table :bring-data="userData" />
    <div class="paginataion-div">

    </div>
  </div>
</template>

<script>
import Table from "@/components/admin/component/Table";
import axios from "axios";
export default {
  name: "User",
  components: {Table},
  data() {
    return {
      page: 1,
      perPage: 3,
      search:'',
      visualTotalNum: 10,
      userData: {
        total: 0,
        title: 'User',
        column: [
          {
            col1: '사용자ID',
            col2: '사용자',
            col3: '이메일',
            col4: '역할',
            col5: '펀딩수',
            // col8:'삭제',
          }
        ],


        list: [
          {
            data1: '',
            data2: '',
            data3: '',
            data4: '',
            data5: '',
            // data8:'delete'
          },
        ],
      }
    }
  },
  methods: {
    async bringUser() {
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        }
      }
      console.log("config: " + config)

      await axios.get("http://localhost:9090/user/admin", config)
          .then(res => {
            console.log(res.data);
            this.userData.list = res.data;
            this.userData.total = res.data.length;
            res.data.map((res) => {
              if (res.data5 == 0) {
                res.data5 = 0 + ""
              }
            })

          }).catch(e => {
            console.log(e.response)
          })
    },


  },
  computed: {
    /*FilterList(){
      return this.userData.list.filter((list )=> {
        return list.data3.toLowerCase().includes(this.keyword.toLowerCase());
      });
    }*/

  },
  watch: {
    search() {
      let access_token = window.sessionStorage.getItem('access_token')
      let config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        }
      }
      console.log("config: " + config)
      this.search =this.search.trim();
      if(this.search.length>0) {
        axios.get("http://localhost:9090/user/admin/search/" + this.search, config)
            .then(res => {
              this.userData.list=[];
              for(let i in res.data){
                if (res.data[i].data5 == 0){
                  res.data[i].data5 = 0 + ""
                }

                this.userData.list.push({
                  data1: res.data[i].data1,
                  data2: res.data[i].data2,
                  data3: res.data[i].data3,
                  data4: res.data[i].data4,
                  data5: res.data[i].data5,
                })
              }

              console.log(res.data)
              this.friend = res.data
              this.userData.total = this.userData.list.length;
            }).catch(e => {
          console.log(e.response)
        })
      }
    },


  },
  mounted() {
    this.bringUser()
  }

}

</script>
<style>
.search-div{
  padding-top:50px;
  padding-bottom: 20px;
}
.search-bar{
  max-width: 400px;
}
</style>
