<template>
  <v-app>
    <v-main>
      <section id="hero">
        <v-row no-gutters>
          <v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              src="@/assets/first/first2.jpg"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                    align="center"
                    class="white--text mx-auto"
                    justify="center"
                >
                  <v-col
                      class="white--text text-center"
                      cols="12"
                      tag="h1"
                  >
                    <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                        class="font-weight-light"
                    >
                      WELCOME TO
                    </span>

                    <br>

                    <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                        class="font-weight-black"
                    >
                      Funfun
                    </span>

                  </v-col>

                  <v-btn
                      class="align-self-end"
                      color="white"
                      fab
                      outlined
                      @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="about-me">
        <v-row no-gutters>
          <v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              src="@/assets/first/first3.jpg"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                    align="center"
                    class="white--text mx-auto"
                    justify="center"
                >
                  <v-col
                      class="white--text text-center"
                      cols="12"
                      tag="h1"
                  >
                    <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                        class="font-weight-light"
                    >
                      지금 바로 시작하세요
                    </span>

                    <br>

                  </v-col>

                    <v-btn
                        color="orange darken-2"
                        to = "/Login"
                        outlined
                        large
                    >
                      <span class="orange--text text--darken-2 font-weight-bold">
                        바로가기
                      </span>
                    </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="blog">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center ">펀딩 하세요</h2>

          <v-responsive
              class="mx-auto mb-12"
              width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
                v-for="({ src, text, title }, i) in articles"
                :key="i"
                cols="12"
                md="4"
            >
              <v-img
                  :src="src"
                  class="mb-4"
                  height="275"
                  max-width="100%"
              ></v-img>

              <h3
                  class="font-weight-black mb-4 text-uppercase orange--text text--darken-2"
                  v-text="title"
              ></h3>

              <div
                  class="title font-weight-light mb-5 "
                  v-text="text"
              ></div>

            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="stats">
        <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            src="@/assets/first/first5.jpg"
        >
          <v-container fill-height>
            <v-row class="mx-auto">
              <v-col
                  v-for="[value, title] of stats"
                  :key="title"
                  cols="12"
                  md="3"
              >
                <div class="text-center">
                  <div
                      class="display-3 font-weight-black mb-4"
                      v-text="value"
                  ></div>

                  <div
                      class="title font-weight-regular text-uppercase"
                      v-text="title"
                  ></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
    </v-main>

  </v-app>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script>


export default {
  name: 'First',
  components: {},
  data () {
    return {
      articles: [
        {
          src: 'https://images.unsplash.com/photo-1593510987760-2d895bc8109d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          title: '쉽고 간편하게 하세요',
          text: '어렵게 생각하지 마세요. 원하는 상품을 언제나 쉽고 간편하게 펀딩할 수 있습니다',
        },
        {
          src: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          title: '친구에게 알려보세요',
          text: '자신이 신청한 펀딩을 많은 친구들에게 간편하게 공유하세요.',
        },
        {
          src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          title: '다양한 상품이 준비되어 있습니다',
          text: '여러 카테고리의 다양한 상품 중 마음에 드는 것을 골라보세요.',
        },
      ],
      stats: [
        ['펀딩', '누구나 할 수 있습니다'],
        ['선물', '자신에게 선물해보세요'],
        ['공유', '친구에게 알리세요'],
        ['상품 ', '다양한 상품들이 준비되어 있습니다'],
      ],
    }
  }
}
</script>
<style>
#app {
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
}
</style>