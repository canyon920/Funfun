<template>
  <div class="admin-parent-div">
    <div class="container">
      <div class="user-container">
        <div class="content">
          <div class="top-text">
            <div class="text">
              사용자
            </div>
          </div>
          <div class="middle-text">
            <div class="count">
            </div>
          </div>
          <router-link to="/admin/user" style="text-decoration: none;">
            <div class="bottom-text">
              자세히
            </div>
          </router-link>
        </div>
      </div>
      <div class="product-container">
        <div class="content">
          <div class="top-text">
            <div class="text">
              상품
            </div>
          </div>
          <div class="middle-text">
            <div class="count">
            </div>
          </div>
          <router-link to="/admin/product" style="text-decoration: none;">
          <div class="bottom-text">
            자세히
          </div>
          </router-link>
        </div>
      </div>
      <div class="funding-container">
        <div class="content">
          <div class="top-text">
            <div class="text">
              펀딩
            </div>
          </div>
          <div class="middle-text">
            <div class="count">
            </div>
          </div>
          <router-link to="/admin/funding" style="text-decoration: none;">
          <div class="bottom-text">
            자세히
          </div>
          </router-link>
        </div>
      </div>
      <div class="completed-funding-container">
        <div class="content">
          <div class="top-text">
            <div class="text">
              완료된 펀딩
            </div>
          </div>
          <div class="middle-text">
            <div class="count">
            </div>
          </div>
          <router-link to="/admin/complete-funding" style="text-decoration: none;">
          <div class="bottom-text">
            자세히
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  data(){
    return{
      userCount:0,
      productCount:0,
      fundingCount:0,
      completeCount:0

    }
  },
  methods:{

  },
  beforeMount() {
    if (JSON.parse(window.localStorage.getItem('login_member')).memberRole !== "ROLE_ADMIN") {
      alert("관리자가 아닙니다.")
      this.$router.push("/")
    }
  },
}
</script>

<style scoped>
.admin-parent-div {
  max-width: 1100px;

}
.admin-parent-div .container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.admin-parent-div .container .user-container {
  margin: 50px;
  max-width: 500px;
  border: 1px solid rgb(229, 114, 0);
  box-shadow: 0.5px 0.5px 0.5px rgba(229,114,0,0.4);
  border-radius: 10px;
}
.admin-parent-div .container .product-container {
  margin: 50px;
  max-width: 500px;
  border: 1px solid rgb(229, 114, 0);
  box-shadow: 0.5px 0.5px 0.5px rgba(229,114,0,0.4);
  border-radius: 10px;
}
.admin-parent-div .container .funding-container {
  margin: 50px;
  max-width: 500px;
  border: 1px solid rgb(229, 114, 0);
  box-shadow: 0.5px 0.5px 0.5px rgba(229,114,0,0.4);
  border-radius: 10px;
}
.admin-parent-div .container .completed-funding-container {
  margin: 50px;
  max-width: 500px;
  border: 1px solid rgb(229, 114, 0);
  box-shadow: 0.5px 0.5px 0.5px rgba(229,114,0,0.4);
  border-radius: 10px;
}
.content {
  margin: 100px;
  width: 125px
}
.top-text {
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
.middle-text {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
.bottom-text {
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  padding: 5px 10px 5px 10px;
}
.bottom-text:hover{
  margin-top: 5px;
  font-size: 18px;
  color: rgb(229, 114, 0);
  transition: .5s;
}
</style>