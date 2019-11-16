<template>
  <b-container fluid class="mt-4">
    <b-row no-gutters>
      <b-col cols="4">
        <b-img class="w-100" src="../assets/straight-title.png"></b-img>
      </b-col>
      <b-col cols="8">
        <b-img class="w-100 mt-5" src="../assets/login-pic1.png"></b-img>
        <b-input-group class="mt-5">
          <template v-slot:prepend>
            <b-img class="w-100" src="../assets/login-name.png"></b-img>
          </template>
          <b-form-input class="ml-2 mt-3" v-model="name"></b-form-input>
        </b-input-group>
        <b-input-group class="mt-2">
          <template v-slot:prepend>
            <b-img class="w-100" src="../assets/login-birthday.png"></b-img>
          </template>
          <b-form-input class="ml-2 mt-3" v-model="birthday"></b-form-input>
        </b-input-group>
        <b-input-group class="mt-2">
          <template v-slot:prepend>
            <b-img class="w-100" src="../assets/login-blood.png"></b-img>
          </template>
          <b-form-input class="ml-2 mt-3" v-model="blood"></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row class="justify-content-center mt-5">
      <b-col cols="6">
        <b-button variant="outline-dark" class="w-100" size="lg" @click="clickToLogin">登入</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: '',
      birthday: '',
      blood: ''
    }
  },
  methods: {
    clickToLogin () {
      const data = {
        name: this.name,
        birthday: this.birthday,
        blood: this.blood
      }
      window.localStorage.setItem('user', JSON.stringify(data))
      this.$router.push('/chooser')
    }
  }
}
</script>