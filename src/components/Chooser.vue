<template>
  <b-container fluid class="mt-4">
    <b-row no-gutters align-h="center">
      <b-col cols="12">
        <b-img class="w-100" src="../assets/flat.title.png"></b-img>
      </b-col>
      <b-col cols="4">
        <b-img src="../assets/sugest-text.png" class="w-100"></b-img>
      </b-col>
    </b-row>
    <b-row no-gutters align-h="center">
      <b-col cols="8" class="mt-3">
        <b-img v-if="!index" class="w-100" src="https://placekitten.com/280/300"></b-img>
        <b-img v-else class="w-100" src="../assets/example-book.png"></b-img>
      </b-col>
    </b-row>
    <b-row no-gutters align-h="around" class="mt-4">
      <b-col cols="4">
        <b-button :disabled="index > 0" class="w-100" variant="outline-dark" @click="clickToNext">不喜歡</b-button>
      </b-col>
      <b-col cols="4">
        <b-button :disabled="index == 0" class="w-100" variant="outline-dark" @click="clickTojoin">喜歡</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'chooser',
  data () {
    return {
      index: 0
    }
  },
  methods: {
    clickToNext () {
      this.index = this.index + 1
    },
    clickTojoin () {
      this.$emit('show-join')
      this.$router.push('/bookUtils')
    }
  },
}
</script>