<template>
<div class="payment-container">
  테스트
  <h1>
    {{memberId}}
  </h1>
</div>
</template>

<script>
export default {
  name: "Payment",
  data(){
    return{
      memberId:'',
    }
  },
  methods:{
    test(){
      this.memberId=this.$route.params.memberId
    }
  },
  mounted() {
    this.test()
  }
}
</script>

<style scoped>

</style>