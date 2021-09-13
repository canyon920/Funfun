<template>
  <v-app>
    <v-main>
      <section id="hero">
        <v-row no-gutters>
          <v-img
              :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
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
                      color="orange darken-2"
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
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">간략 설명 및 바로가기</h2>

          <v-responsive
              class="mx-auto mb-8"
              width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
              class="mx-auto title font-weight-light mb-8"
              max-width="720"
          >
            배경 이미지 삽입 또는 설명
          </v-responsive>



          <div></div>

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
        </v-container>

        <div class="py-12"></div>
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
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
          src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: '제목',
          text: '설명',
        },
        {
          src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: '제목',
          text: '설명',
        },
        {
          src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: '제목',
          text: '설명',
        },
      ],
      stats: [
        ['펀딩', '누구나 할 수 있습니다'],
        ['선물', '자신에게 선물해보세요'],
        ['공유', '친구에게 알리세요'],
        ['제품 ', '다양한 제품들이 준비되어 있습니다'],
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