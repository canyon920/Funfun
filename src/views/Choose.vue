<template>
<div class = "first">
  <div class = "second">
    <v-btn
        class="ma-2"
        outlined
        color="indigo"
    >
    계좌로받기
    </v-btn>
    <v-btn
        class="ma-2"
        outlined
        color="indigo"
    >
      상품으로 받기
    </v-btn>
  </div>
</div>
</template>
<script>

export default {
  name: 'Choose',
  data(){
    return{

    }
  }
}

</script>
<style>
.first{
  max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
  padding-top: 100px;
  padding-bottom: 100px;}
.first .second{
  align: center;
}
</style>