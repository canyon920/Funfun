<template>
  <v-app>
    <Header/>
    <v-container id="container">
    <transition name="page-fade">
    <router-view></router-view>
    </transition>
    </v-container>
    <Footer style="width: 100vw"/>
  </v-app>
</template>

<script>
// json 변경전

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";



export default {
  name: 'App',
  components: {Footer, Header},
  data: () => ({
    //
  }),
  destroyed() {
    window.localStorage.clear()
    window.sessionStorage.clear()
  }
};
</script>
<style scoped>
#container {
  max-width: 1100px;
}
#app {
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
}

.page-fade-enter {
  opacity: 0;
}

.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.8s ease;
}

.page-fade-leave-to {
  opacity: 0;
}
</style>
