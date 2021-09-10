<template>

  <v-container>
    <h2 class="display-2 mb-4">상품 리스트</h2>

    <v-layout row wrap>
      <template v-for="(product, index) in products">
            <v-flex xs2 pa-1 :key="index" >
             <v-hover>
              <v-card slot-scope="{hover}" class="mx-auto" color="gray lighten-4" max-width="600" >

<!--     <v-img src="https://cdn.vuetifyjs.com/images/cards/kitchen.png" :aspect-ratio="16/9">-->
<!--     <v-img slot-scope="{hover}" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png" :aspect-ratio="16/9">-->
              <v-img :src="product.src" :aspect-ratio="16/9" >
                <v-expeand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out orange darken-2 display-3 v-card--reveal display3 black--text" style="height:100%;">
                  ${{product.price}}
                  </div>
                </v-expeand-transition>
              </v-img>

              <v-card-text class="pt-4" style="position:relative;">
                <v-btn absolute color="orange" class="white--text"   fab medium right top >
<!--                  <v-icon>shopping_cart</v-icon>-->
                </v-btn>

                <div class="font-weight-light grey--text title mb-2">{{product.category}}</div>
                <h3 class="display-1 font-weight-light orang--text mb-2">{{product.title}}</h3>
                <div class="font-weight-light mb-2">{{product.description}}</div>
              <!--<div class="font-weight-light mb2"> Our vintage kitchen 샬라샬라 </div>-->
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>



<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      products: [{
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'
      }, {
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'
      }, {
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'
      }, {
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'
      }, {
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'

      }, {
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'
      }, {
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'
      }, {
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'
      }, {
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'
      }, {
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'
      }, {
        price: 14.99,
        src: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        category: 'asdasd',
        title: 'asdasd',
        description: 'asdasdasdasd'
      }]
    })
  }

  //     ecosystem: [
  //       {
  //         text: 'vuetify-loader',
  //         href: 'https://github.com/vuetifyjs/vuetify-loader',
  //       },
  //       {
  //         text: 'github',
  //         href: 'https://github.com/vuetifyjs/vuetify',
  //       },
  //       {
  //         text: 'awesome-vuetify',
  //         href: 'https://github.com/vuetifyjs/awesome-vuetify',
  //       },
  //     ],
  //     importantLinks: [
  //       {
  //         text: 'Documentation',
  //         href: 'https://vuetifyjs.com',
  //       },
  //       {
  //         text: 'Chat',
  //         href: 'https://community.vuetifyjs.com',
  //       },
  //       {
  //         text: 'Made with Vuetify',
  //         href: 'https://madewithvuejs.com/vuetify',
  //       },
  //       {
  //         text: 'Twitter',
  //         href: 'https://twitter.com/vuetifyjs',
  //       },
  //       {
  //         text: 'Articles',
  //         href: 'https://medium.com/vuetify',
  //       },
  //     ],
  //     whatsNext: [
  //       {
  //         text: 'Explore components',
  //         href: 'https://vuetifyjs.com/components/api-explorer',
  //       },
  //       {
  //         text: 'Select a layout',
  //         href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
  //       },
  //       {
  //         text: 'Frequently Asked Questions',
  //         href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
  //       },
  //     ],
  //   }),
  // }
</script>

<style>
.v-card--raveal{
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;

}

.v-card h3.display-1 {
  font-size: 24px !important;
}

</style>
