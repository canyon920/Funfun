<template>
  <v-card
      class="mx-auto mt-10 mb-16 pb-8"
      width="400"
      outlined
  >
    <div class="loginimg">
      <v-img max-height="60"
             max-width="140" src="@/assets/login/login.png"></v-img>
    </div>
    <div class="pl-5 pr-5 pt-3">
      <div class="pb-5">
          <div class="loginform">
            <div class="email">
              <v-text-field
                  label="Your email"
                  hint="xxx@example.com"
                  persistent-hint
              ></v-text-field>
            </div>
            <div class="password">
              <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
              ></v-text-field>
            </div>
          </div>
      </div>
      <div class="pb-5">
        <div class="loginbtn">
          <v-btn block large color ="rgba(229, 114, 0)"><strong style="color: white">Login</strong></v-btn>
        </div>
      </div>
      <div class="joinmember">
        <p style="padding-right: 5px">Not a member?</p>
        <router-link style="color: orange" class="router-link" to="/join">Signup Now</router-link>
      </div>

    </div>
  </v-card>
</template>
<script>
export default {
  data(){
    return{
      show1:false,
      password:'Password',
      rules:{
        required: value => !!value || 'Required.',
        min: v => v.length>=8 || 'Min 8 characters',
        emailMatch:() =>('The email and Password you entered do not match'),
      },
    }
  }
}
</script>
<style>
.loginimg{
  padding-left: 130px;
  padding-top: 20px;
}
.joinmember{
  display: flex;
  padding-left: 70px;
}
</style>