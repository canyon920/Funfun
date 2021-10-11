<template>

  <!--      날짜 선택기        -->
  <v-container>
    <v-row>
      <v-col
          cols="12"
          lg="6"
      >
        <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date1"
                label="Start-Date"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                @blur="date1 = parseDate(dateFormatted)"
                v-on="on"
                style="font-size: 20px"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="date1"
              no-title
              @input="menu1 = false"
              style="font-size: 20px"
          ></v-date-picker>
        </v-menu>
        <p style="font-size: 20px">펀딩 시작일: <strong>{{ date1 }}</strong></p>
      </v-col>

      <v-col
          cols="12"
          lg="6"
      >
        <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date2"
                label="Expire-Date"
                persistent-hint
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                style="font-size: 20px"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="date2"
              no-title
              @input="menu2 = false"
              style="font-size: 20px"
          ></v-date-picker>
        </v-menu>
        <p style="font-size: 20px">펀딩 종료일: <strong>{{ date2 }}</strong></p>
      </v-col>
    </v-row>
  </v-container>
  <!--      날짜 선택 여기까지      -->

</template>

<script>
export default {
  name: "DatePicker",
  props:{
    bringDateData:{
      type:Object
    }
  },
  emits:[
      'bringCheckNot' , 'bringCheckOk' , 'bringCheckStartDate' , 'bringRegistWork'
  ],

  data: vm => ({
    date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    dateAllOb : {
      startD : '',
      expireD : ''
    }
  }),

  computed: {
    finalFundingCount(){
      let [month1, day1, year1] = this.date1.split('-')
      let [month2, day2, year2] = this.date2.split('-')
      let computedDate = (`${year2}${month2}${day2}` - `${year1}${month1}${day1}`)
      console.log(`${year2}${month2}${day2}` - `${year1}${month1}${day1}`)
      return computedDate
    }
  },

  watch: {
    date () {
      this.dateFormatted = this.formatDate(this.date)
    },
    finalFundingCount(){
      let [month1, day1, year1] = this.date1.split('-')
      let [month2, day2, year2] = this.date2.split('-')
      let watchDate = (`${year2}${month2}${day2}` - `${year1}${month1}${day1}`)
      if (watchDate < 0) {
        this.$emit('bringCheckNot')
      }
      if (watchDate == 0) {
        this.$emit('bringCheckEqual')
      }
      if (watchDate > 0) {
        this.$emit('bringCheckOk');
      }
    },
    date1() {
      // console.log("date1 감시중")
      let date = new Date()
      let nowMonth = date.getMonth()+1;
      let nowday = date.getDate();
      if (nowMonth.toString().length === 1) {
        nowMonth = `0${nowMonth}`
      }
      if (nowday.toString().lenth === 1) {
        nowday = `0${nowday}`
      }
      let nowDate = `${date.getFullYear()}${nowMonth}${nowday}`
      let transTargetDate1 = this.date1.replaceAll("-", "")
      // console.log("이게 변환된 오늘 : ",nowDate);
      // console.log("이게 변화된 선택날 : ",transTargetDate1)
      if ((transTargetDate1 - nowDate) > 0) {
        // console.log("선택된 시작날이 오늘보다 이전이면 안됩니다.");
        this.$emit('bringCheckStartDate');
      } else {
        this.dateAllOb.startD = this.date1;
        this.dateAllOb.expireD = this.date2
        // console.log("넘기기전 선택된 시작날 : ",this.dateAllOb.startD)
        // console.log("넘기기전 선택된 종료날 : ",this.dateAllOb.expireD)
        this.$emit('bringRegistWork', this.dateAllOb)
      }

    },
    date2(){
      // console.log("date2 감시중")
      this.dateAllOb.startD = this.date1
      this.dateAllOb.expireD = this.date2
      // console.log("넘기기전 선택된 시작날 : ",this.dateAllOb.startD)
      // console.log("넘기기전 선택된 종료날 : ",this.dateAllOb.expireD)
      this.$emit('bringRegistWork', this.dateAllOb)
    }

  },

  methods: {
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>

<style scoped>

</style>