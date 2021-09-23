<template>
  <div class = "first-container">
<fundingsearch/>
    <div class = "second-bottom">
<Fundingsecondlist/>
    </div>
  </div>
</template>
<script>

import Fundingsearch from "../components/layout/fundinglist/fundingsearch";
import Fundingsecondlist from "../components/layout/fundinglist/fundingsecondlist";

export default {
  name: 'FundingList',
  components: {Fundingsearch, Fundingsecondlist},
  data(){
    return{

    }
  }
}
</script>
<style>
.first-container{

}

</style>