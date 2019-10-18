<template>
  <b-container class="main bg">
    <b-row>
      <b-col cols="12" class="mt-5"></b-col>
      <b-col></b-col>
      <b-col>
        <rotater :imgs="imgList"></rotater>
        <h1 class="text-white text-center mt-1">選書師</h1>
        <div class="text-center"><date-picker v-model="time" :lang="lang" @change="clickChangeDate"/></div>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-modal id="chooser-modal" hide-footer @hidden="resetTime">
      <template v-slot:modal-title>
        讓 <code>書</code> 選擇你
      </template>
      <div class="d-block text-center">
        <h3>{{ choosed }}</h3>
      </div>
    </b-modal>
  </b-container>
</template>

<script>
import Rotater from './components/rotater.vue'
import DatePicker from 'vue2-datepicker'
import img0 from './assets/天平.svg'
import img1 from './assets/風車.svg'

const Constellations = [
  {name: 'aquarius', dRange: ['1-20', '2-18']},
  {name: 'pisces', dRange: ['2-19', '3-20']},
  {name: 'aries', dRange: ['3-21', '4-20']},
  {name: 'taurus', dRange: ['4-21', '5-20']},
  {name: 'gemini', dRange: ['5-21', '6-21']},
  {name: 'cancer', dRange: ['6-22', '7-22']},
  {name: 'leo', dRange: ['7-23', '8-22']},
  {name: 'virgo', dRange: ['8-23', '9-22']},
  {name: 'libra', dRange: ['9-23', '10-23']},
  {name: 'scorpio', dRange: ['10-24', '11-22']},
  {name: 'sagittarius', dRange: ['11-23', '12-21']},
  {name: 'capricorn', dRange: ['12-22', '1-18']}
]

const Books = [
  {name: '一張六十億人都坐得下的餐桌：守護社區40年，社企女先鋒的「關懷式經濟」實踐之旅', include: ['aries', 'leo', 'sagittarius']},
  {name: '聽說你在創業', include: ['aries', 'leo', 'sagittarius']},
  {name: '湯姆歷險記', include: ['aries', 'leo', 'sagittarius']},
  {name: '被討厭的勇氣：自我啟發之父「阿德勒」的教導', include: ['aries', 'leo', 'sagittarius']},
  {name: '練習不生氣：101則與情緒和平共處的幸福人生指南', include: ['gemini', 'aquarius', 'libra']},
  {name: '情緒勒索〔全球暢銷20年經典〕：遇到利用恐懼、責任與罪惡感控制你的人，該怎麼辦？', include: ['gemini', 'aquarius', 'libra']},
  {name: '我決定，生活裡只留下對的人：動手處理消耗你的人，擺脫煩雜忙的互動，過你想要的理想人生', include: ['gemini', 'aquarius', 'libra']},
  {name: '斜槓青年：全球職涯新趨勢，迎接更有價值的多職人生', include: ['gemini', 'aquarius', 'libra']},
  {name: '有種生活風格，叫小鎮：天空的院子：翻轉地方的夢想、信念、價值', include: ['pisces', 'cancer', 'scorpio']},
  {name: '我們都會好好的：不安沒關係，脆弱與寂寞也沒關係，今天的你會很好，明天也是', include: ['pisces', 'cancer', 'scorpio']},
  {name: '牧羊少年奇幻之旅', include: ['pisces', 'cancer', 'scorpio']},
  {name: '問題不在難度，而在態度：36個逆轉人生的行動法則', include: ['taurus', 'virgo', 'capricorn']},
  {name: '可以善良，但你要有底線不當好人：人際關係斷．捨．離，勉強自己和別人好，不如找人真心對你好', include: ['taurus', 'virgo', 'capricorn']},
  {name: '誰說一百分的妳，才是最好的自己', include: ['taurus', 'virgo', 'capricorn']},
  {name: '蔡康永的情商課：為你自己活一次', include: ['taurus', 'virgo', 'capricorn']},
  {name: '恆毅力：人生成功的究極能力', include: ['taurus', 'virgo', 'capricorn']},
  {name: '正是時候讀莊子：莊子的姿勢、意識與感情', include: ['taurus', 'virgo', 'capricorn']},
  {name: '原來我不是沒自信，只是太容易被踐踏！：48個習慣，建立壓不垮的自信', include: ['taurus', 'virgo', 'capricorn']},
  {name: '練習不快樂？！：不快樂是一種本能，快樂是一種選擇', include: ['pisces', 'cancer', 'scorpio']},
  {name: '溫柔的心，強大的力量：德國人的日常思考', include: ['pisces', 'cancer', 'scorpio']},
  {name: '為何我們總是如此不安？：莫名恐慌、容易焦躁、缺乏自信？一本缺乏安全感的人都在看的書！', include: ['gemini', 'aquarius', 'libra']},
  {name: '信任的勇氣：找回自信，避免人際傷害的情緒哲學', include: ['gemini', 'aquarius', 'libra']},
  {name: '詩魂', include: ['aries', 'leo', 'sagittarius']},
  {name: 'TED TALKS 說話的力量：你可以用言語來改變自己，也改變世界', include: ['aries', 'leo', 'sagittarius']}
]

function getRandom(max){
  return Math.floor(Math.random() * max);
}

export default {
  name: 'app',
  components: {
    Rotater,
    DatePicker
  },
  data () {
    return {
      time: '',
      imgList: [img0, img1],
      lang: {
        days: ['日', '一', '二', '三', '四', '五', '六'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        pickers: ['後 7 天', '後 30 天', '前 7 天', '前 30 天'],
        placeholder: {
          date: '選擇出生日期'
        }
      }
    }
  },
  computed: {
    choosed () {
      if(!this.time) return ''
      const today = `${this.time.getMonth()}-${this.time.getDate()}`
      const find = Constellations.find(c => {
        return c.dRange[0] < today && c.dRange[1] > today
      }) || Constellations[Constellations.length-1]
      const books = Books.filter(b => b.include.indexOf(find.name) !== -1)
      return books[getRandom(books.length)].name
    }
  },
  methods: {
    clickChangeDate () {
      if(!this.time) return
      return this.$bvModal.show('chooser-modal')
    },
    resetTime () {
      this.time = ''
    }
  }
}
</script>
<style>
body {
  background-color: #252525 !important;
}
</style>
<style scoped>
.main {
  font-family: "Helvetica", "Arial","LiHei Pro","黑體-繁","微軟正黑體", sans-serif;
}
</style>