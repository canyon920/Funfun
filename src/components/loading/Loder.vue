<template>
<div class="loading-page"
     :style="{
        width:`${size}rem`,
        heigt: `${size}rem`,
        zIndex: zIndex
      }"
     :class="{absolute: absolute, fixed: fixed}">
  <v-progress-circular
      :size="70"
      :width="3"
      color="rgb(229, 114, 0)"
      indeterminate
  ></v-progress-circular>
</div>
</template>

<script>
export default {
  name: "Loder",
  props:{
    size:{
      type: Number,
      default: 2
    },
    absolute:{
      type:Boolean,
      default: false
    },
    fixed:{
      type:Boolean,
      default:false
    },
    zIndex:{
      type: Number,
      default: 6
    }
  }
}
</script>

<style scoped>
.loading-page {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.loading-page .absolute {
  position: absolute;
}
.loading-page .fixed {
  position: fixed;
}
</style>