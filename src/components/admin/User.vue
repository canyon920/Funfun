<template>
  <div class="user-container">
    <div class="search-div">
        <input type="text" v-model="search" placeholder="사용사명 검색" @click="bringUserName()"/>

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
            col3: '역할',
            col4: '펀딩수',
            // col8:'삭제',
          }
        ],
        friend:{
        },

        list: [
          {
            data1: '',
            data2: '',
            data3: '',
            data4: '',
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
              if (res.data4 == 0) {
                res.data4 = 0 + ""
              }
            })

          }).catch(e => {
            console.log(e.response)
          })
    },

    bringUserName(){
      for(let key in this.friend){
        if(this.friend.data2.includes(this.search)){
          this.friend.data2=this.userData.list[key]
        }
      }

    },

  },
  computed: {
    FilterList(){
      return this.userData.list.filter((list )=> {
        return list.data3.toLowerCase().includes(this.keyword.toLowerCase());
      });
      }

  },
    watch: {
      page() {
        console.log(this.page)
      },
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
                this.friend = res.data
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

