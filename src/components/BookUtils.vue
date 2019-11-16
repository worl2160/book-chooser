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
        <b-button class="w-100" variant="outline-dark" to="/howToGet">取得方式</b-button>
      </b-col>
      <b-col cols="6" class="p-2">
        <b-button class="w-100" variant="outline-dark" to="/introduce">好書簡介</b-button>
      </b-col>
      <b-col cols="6" class="p-2">
        <b-button class="w-100" variant="outline-dark" to="/bookCards">好書牌卡</b-button>
      </b-col>
      <b-col cols="6" class="p-2">
        <b-button class="w-100" variant="outline-dark" to="/recommend">自己介紹</b-button>
      </b-col>
      <b-col cols="6" class="p-2">
        <b-button class="w-100" variant="outline-dark" to="/classics">精典排行</b-button>
      </b-col>
      <b-col cols="6" class="p-2">
        <b-button class="w-100" variant="outline-dark" to="/personal">個人資料</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'book-utils'
}
</script>