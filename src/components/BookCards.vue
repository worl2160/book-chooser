<template>
  <b-container fluid class="mt-2">
    <b-row no-gutters align-h="center">
      <b-col cols="12">
        <b-img class="w-100" src="../assets/flat.title.png"></b-img>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-tabs content-class="mt-3" justified>
          <b-tab title="好書牌卡">
            <b-row no-gutters>
              <b-col cols="3" v-for="n in 12" :key="n" class="mt-2">
                <b-img src="../assets/empty-card.png" class="w-100"></b-img>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="書友共賞">
            <b-row no-gutters>
              <b-col cols="3" v-for="n in 12" :key="n" class="mt-2">
                <b-img src="../assets/empty-card.png" class="w-100"></b-img>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="共組讀書會">
            <b-row no-gutters>
              <b-col cols="3" v-for="n in 3" :key="n" class="mt-2">
                <b-img src="../assets/empty-card.png" class="w-100"></b-img>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
export default {
  name: 'introduce',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>