<template>
  <b-container fluid class="mt-4">
    <b-row no-gutters align-h="center">
      <b-col cols="12">
        <b-img class="w-100" src="../assets/flat.title.png"></b-img>
      </b-col>
      <b-col cols="4">
        <b-button @click="tab=0" size="lg" :class="{active: tab===0}" variant="light">好書簡介</b-button>
      </b-col>
      <b-col cols="4">
        <b-button @click="tab=1" size="lg" :class="{active: tab===1}" variant="light">名人推薦</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-form-textarea
        v-if="tab===0"
        v-model="text0"
        rows="16"
        disabled
      ></b-form-textarea>
      <b-form-textarea
        v-else
        v-model="text1"
        rows="16"
        disabled
      ></b-form-textarea>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'introduce',
  data () {
    return {
      tab: 0,
      text0: `熱響靈部增心電、會演手資幾自與說通來類好，明利工太雲！時形展愛我，產眾界深女李客評知體也來聽風？光眼製足故有界蘭個不定有四提但子城。
        有走院內也樹其負體難寶，們就個濟曾、大包車治而人，歷阿門知應風活發著沒，星樂識，是年遠清前化做來大造定市些成：中面研如卻期一，空策應自腦不我土，一它停年口農身；過美備了能無比子？試示轉路我操話一大第裡決型巴多公方主：不情助常大難北的家必的喜家價家水如科智？一的輕空氣參白直的是孩見花性眾會百再現門變有飛事取地即參有我起提影原回中我醫我重，在龍能上物也生把具他到了資重家邊受華青間、是正原卻道好態落司先？演驗運過的化，縣作象登小展上，沒才學，是系推說運不送……力別們海子衣然因中拉亞……龍海重最這臺算頭樣都然勢。該產寫細著內，目明度盡火了設頭實目另得地就展這前還。
        天園示大我作然獲中喜是長身型性人維看象地月被！市自然有。這是日影只，久所地原期登母素、不提交打香專人友研部魚牛班孩布前像應領間許嚴能弟。`,
      text1: `上司長、心計局就在現可遊求其長著那光父議人中始嚴力少個賽整科不？金長全學體列相裡如我國？一運復。
        水民頭於這學取物車甚是己用上直時；考西快銷無熱人可改能雨遠起事直古。到由開子……不事母相是又功，根治王，善年機國電格痛全，如適共！得眼照教市和人長改生：地劇過原！十拉行何處收，研望解她展，場參命岸建次引門經象連火我的斷路！看先愛本標趣！
        民的學省最居錯民西成我定區我問問人過道盡會中去好已容：兒大買藝而也人對世的跟；三亮作金保為我一二，法都反年器藝也當因然理。
        於出生：庭下笑那廠。
        上是輪故率時臺供創；者時帶刻結之，文果以步灣空。我前年大那，人來中運飯陸先件民中組會製增生，雖將在聲第水……了話來資以雄紙當學，改生險見我家，了難名月便果，院際究時度子我就有開發場話，文人畫果呢無心我。我情見主車，個教是，春麼就利在假當通主。
        紅間登研也一格意的一他到去孩？這弟入運最苦頭！清我裡理之望地清果：圖心委她大麼華就回效半白邊大笑主面而代生灣：人晚。
        不此列！據十時，地等親見觀在。車受打！舞成的勢人，道說專民近府本用有國。`
    }
  },
  methods: {
    clickToNext () {
      this.index = this.index + 1
    },
    clickTojoin () {
      this.$bvToast.toast('【出發】已加入書單', {
        title: '系統訊息',
        variant: 'success',
      })
      this.$router.push('/bookUtils')
    }
  }
}
</script>