<template>
  <b-container fluid>
    <b-row no-gutters align-h="center">
      <b-col cols="12">
        <b-img class="w-100" src="../assets/flat.title.png"></b-img>
      </b-col>
      <b-col cols="6">
        <b-button size="lg" class="active" variant="light">全國推薦排行</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-5" cols="4" v-for="n in 6" :key="n">
        <b-card :img-src="imgSrc(n)" img-alt="Card image" img-bottom body-class="p-1">
          <b-card-text>
            <b-img class="crown mr-2" src="../assets/crown-solid.svg"></b-img>{{ n }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row no-gutters align-h="end" class="mt-5">
      <b-col cols="4">
        <b-button size="sm" variant="primary">更多</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'classic',
  data () {
    return {}
  },
  methods: {
    imgSrc (n) {
      return require(`../assets/b${n}.png`)
    }
  }
}
</script>

<style scoped>
.crown {
  width: 1.25rem;
}
</style>