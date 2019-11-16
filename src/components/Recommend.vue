<template>
  <b-container fluid>
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
        <b-img class="w-100" src="../assets/example-book.png"></b-img>
      </b-col>
    </b-row>
    <b-row no-gutters align-h="around" class="mt-2">
      <b-col cols="6" class="p-2">
        <b-button class="w-100" variant="outline-dark">
          <b-img class="icon mr-2" src="../assets/microphone-solid.svg"></b-img>錄音
        </b-button>
      </b-col>
      <b-col cols="6" class="p-2">
        <b-button class="w-100" variant="outline-dark">
          <b-img class="icon mr-2" src="../assets/video-solid.svg"></b-img>錄影
        </b-button>
      </b-col>
      <b-col cols="6" class="p-2">
        <b-button class="w-100" variant="outline-dark">
          <b-img class="icon mr-2" src="../assets/keyboard-solid.svg"></b-img>打字
        </b-button>
      </b-col>
      <b-col cols="6" class="p-2">
        <b-button class="w-100" variant="outline-dark">
          <b-img class="icon mr-2" src="../assets/thumbs-up-solid.svg"></b-img>推薦
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'recommend'
}
</script>

<style scoped>
.icon {
  width: 1.3rem;
}
</style>