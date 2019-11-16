<template>
  <b-container fluid>
    <b-row class="justify-content-md-center">
      <b-col cols="12" sm="4" class="border border-dark vh-100 border-width-5">
        <router-view @show-join="show"></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'app',
  methods: {
    show () {
      this.$bvToast.toast('【出發】已加入書單', {
        title: '系統訊息',
        variant: 'success',
      })
    }
  }
}
</script>

<style scoped>
.border-width-5 {
  border-width: 5px !important;
}
</style>
