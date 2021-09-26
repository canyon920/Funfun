<template>
<div class ="menu">
  <h2>메뉴 문구</h2>
<div class="container">
  <div class="inner-container">
    <div class= "item-box">
      <div class = "item-box-item item-box-inner1">
        <router-link :to="{name: 'Shop', params:{categoryId:1}}"> <div class= "item img1" ></div></router-link>
        <div class="img-text">생일</div>
      </div>
      <div class = "item-box-item item-box-inner2">
        <router-link :to="{name: 'Shop', params:{categoryId:2}}"> <div class= "item img2"></div></router-link>
        <div class="img-text">명절선물</div>

      </div>
      <div class = "item-box-item item-box-inner3">
        <router-link :to="{name: 'Shop', params:{categoryId:3}}">  <div class= "item img3"></div></router-link>
        <div class="img-text">상품권선물</div>

      </div>
      <div class = "item-box-item item-box-inner4">
        <router-link :to="{name: 'Shop', params:{categoryId:4}}">  <div class= "item img4"></div></router-link>
        <div class="img-text">건강/회복</div>

      </div>
      <div class = "item-box-item item-box-inner5">
        <router-link :to="{name: 'Shop', params:{categoryId:5}}"><div class= "item img5"></div></router-link>
        <div class="img-text">가벼운선물</div>

      </div>
      <div class = "item-box-item item-box-inner6">
        <router-link :to="{name: 'Shop', params:{categoryId:6}}"> <div class= "item img6"></div></router-link>
        <div class="img-text">톡백화점</div>

      </div>
      <div class = "item-box-item item-box-inner7">
        <router-link :to="{name: 'Shop', params:{categoryId:7}}"><div class= "item img7"></div></router-link>
        <div class="img-text">스몰럭셔리</div>

      </div>
      <div class = "item-box-item item-box-inner8">
        <router-link :to="{name: 'Shop', params:{categoryId:8}}"><div class= "item img8"></div></router-link>
        <div class="img-text">명품선물</div>

      </div>
      <div class = "item-box-item item-box-inner9">
        <router-link :to="{name: 'Shop', params:{categoryId:9}}"> <div class= "item img9"></div></router-link>
        <div class="img-text">어른선물</div>

      </div>
      <div class = "item-box-item item-box-inner10">
        <router-link :to="{name: 'Shop', params:{categoryId:10}}">  <div class= "item img10"></div></router-link>
        <div class="img-text">출산/백일돌</div>

      </div>
      <div class = "item-box-item item-box-inner11">
        <router-link :to="{name: 'Shop', params:{categoryId:11}}">  <div class= "item img11"></div></router-link>
        <div class="img-text">쓸모없는선물</div>

      </div>
      <div class = "item-box-item item-box-inner12">
        <router-link :to="{name: 'Shop', params:{categoryId:12}}">  <div class= "item img12"></div></router-link>
        <div class="img-text">배달선물</div>

      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>



export default {
  name: 'Main-menu',

  components: {

  },
  props:{
    mainmenuInfo:{
      type:Object
    }
  },
}
</script>
<style>

.menu{
  max-width:1100px; left:0; right:0; margin-left:auto; margin-right:auto;
  margin-top: 60px;
}
.menu .container .inner-container .item-box .item {
  flex: 1;
  width: 90px;
  height: 90px;
  border-radius: 50%;

}
.menu .container{}
.menu .container .inner-container{
  display: flex;


}
.menu .container .inner-container .item-box{
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 30px;
  margin-bottom: 50px;
}
.menu .container .inner-container .item-box .item-box-item {
  flex: 1 1 15%;
  padding:30px;

}
.menu .container .inner-container .item-box .item-box-item .img-text {
  display: flex;
  justify-content: center;
  padding-right:20px;
  margin-top: 10px;

}

.menu .container .inner-container .item-box .item {
  padding:20px;

}
.menu .container .inner-container .item-box .img1{
  background-image: url(https://img.allurekorea.com/allure/2019/08/style_5d43859e4640d.jpg);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img2{
  background-image: url(http://danmee.chosun.com/site/data/img_dir/2011/08/26/2011082601289_0.jpg);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img3{
  background-image: url(https://t1.daumcdn.net/cfile/tistory/2646F748577B671B2B);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img4{
  background-image: url(https://image.oliveyoung.co.kr/uploads/images/display/90000020509/263/2042267161961091037.jpg);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img5{
  background-image: url(http://m.kinders.co.kr/web/product/medium/202109/3ac9ee0df4d4056310436fee45caa7d4.jpg);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img6{
  background-image: url(https://previews.123rf.com/images/monticello/monticello1502/monticello150200116/36917612-%EC%A0%95%EC%9B%90%EC%97%90%EC%84%9C-%EC%8B%A0%EC%84%A0%ED%95%9C-%EC%9C%A0%EA%B8%B0%EB%86%8D-%EA%B3%BC%EC%9D%BC-%EB%B0%94%EA%B5%AC%EB%8B%88.jpg);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img7{
  background-image: url(https://mblogthumb-phinf.pstatic.net/MjAxOTAzMjNfMTU5/MDAxNTUzMjgyODk0NDE4.fJZuuW1ZvJcVLDA0Kb0rbRht0Z_ct1Rr_9LlFOU6Yi4g.UEAhaKuaEzoOYbSxZrEUIKEAbV4brAeopiulDdv7gcEg.JPEG.royal_story/Aesop-In-Two-Minds-gear-patrol-full-lead.jpg?type=w800);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img8{
  background-image: url(https://img.hankyung.com/photo/202006/01.22995564.1.jpg);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img9{
  background-image: url(http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/10/04/20191004000576_0.jpg);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img10{
  background-image: url(https://www.costco.co.kr/medias/sys_master/images/h4c/hde/47864825151518.jpg);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img11{
  background-image: url(https://blog.kakaocdn.net/dn/bNlhrS/btqUo9XRMBa/SYEBhunsthPcXnz9QTg3hk/img.jpg);
  background-size:90px 90px;
  cursor:pointer;
}
.menu .container .inner-container .item-box .img12{
  background-image: url(https://rereco.co/wp-content/uploads/2018/02/best_menu09.jpg);
  background-size:90px 90px;
  cursor:pointer;
}


</style>