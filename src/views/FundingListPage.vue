<template>
  <!--검색바-->
  <v-container class="container_list">

    <v-text-field
        dense
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

    <FundingListComponent :bringmainDeadline="products"/>

  </v-container>
</template>

<script>
import FundingListComponent from "@/components/FundingListComponent";
export default {
  name: 'FundingListPage',
  components: {FundingListComponent},
  data: () => {
    return {
      loading:false,


      // people: [],
      products: [
      {
        preFundingImgUrl: require("@/assets/example-img/chunsicsub2.png"),
        fundingTitle:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당 그러므로 가보자하하',
        progressBarPercent: 20, fundingname: 'ㅇㅇdsadasd asd as dsa dasdas das',fundingMoney: 1000,
        expireDate: '2021-11-30',
        fundingId:1
      },
      {
        preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
        fundingTitle:'월급 탄 거 안다 도와주라', progressBarPercent: 20,
        fundingname: '코코',fundingMoney: 25000, expireDate: '2021-12-30',
        fundingId:2
      },
      {
        preFundingImgUrl:require("@/assets/example-img/chunsicsub1.png"),
        fundingTitle:'"우리 아이"가 정말 갖고 싶어 해요',
        progressBarPercent: 50, fundingname: '곽두팔',fundingMoney: 3000,
        expireDate: '2021-12-03',
        fundingId:3
      },
      {
        preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
        fundingTitle:'일단 고마워',
        progressBarPercent: 80, fundingname: '두팔',fundingMoney: 30000,
        expireDate: '2022-01-30',
        fundingId:4
      },
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub2.png"),
          fundingTitle:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당 그러므로 가보자하하',
          progressBarPercent: 20, fundingname: 'ㅇㅇdsadasd asd as dsa dasdas das',fundingMoney: 1000,
          expireDate: '2021-11-30',
          fundingId:1
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'월급 탄 거 안다 도와주라', progressBarPercent: 20,
          fundingname: '코코',fundingMoney: 25000, expireDate: '2021-12-30',
          fundingId:2
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub1.png"),
          fundingTitle:'"우리 아이"가 정말 갖고 싶어 해요',
          progressBarPercent: 50, fundingname: '곽두팔',fundingMoney: 3000,
          expireDate: '2021-12-03',
          fundingId:3
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'일단 고마워',
          progressBarPercent: 80, fundingname: '두팔',fundingMoney: 30000,
          expireDate: '2022-01-30',
          fundingId:4
        },
        {
          preFundingImgUrl: require("@/assets/example-img/chunsicsub2.png"),
          fundingTitle:'"언텍트시대" 춘식이와 라식이의 사랑이야기 아직 끝나지 않았당 그러므로 가보자하하',
          progressBarPercent: 20, fundingname: 'ㅇㅇdsadasd asd as dsa dasdas das',fundingMoney: 1000,
          expireDate: '2021-11-30',
          fundingId:1
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'월급 탄 거 안다 도와주라', progressBarPercent: 20,
          fundingname: '코코',fundingMoney: 25000, expireDate: '2021-12-30',
          fundingId:2
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub1.png"),
          fundingTitle:'"우리 아이"가 정말 갖고 싶어 해요',
          progressBarPercent: 50, fundingname: '곽두팔',fundingMoney: 3000,
          expireDate: '2021-12-03',
          fundingId:3
        },
        {
          preFundingImgUrl:require("@/assets/example-img/chunsicsub3.png"),
          fundingTitle:'일단 고마워',
          progressBarPercent: 80, fundingname: '두팔',fundingMoney: 30000,
          expireDate: '2022-01-30',
          fundingId:4
        },


      ],


    };
  },
  methods: {

  },
  mounted(){
  }
}
</script>




<style scoped>

.container_list {
  max-width: 1100px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 50px;

}


</style>




