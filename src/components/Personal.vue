<template>
  <b-container fluid class="mt-4">
    <b-row no-gutters>
      <b-col cols="4">
        <b-img class="w-100" src="../assets/straight-title.png"></b-img>
      </b-col>
      <b-col cols="8">
        <b-input-group class="mt-5">
          <template v-slot:prepend>
            <b-img class="w-100" src="../assets/login-name.png"></b-img>
          </template>
          <b-form-input class="ml-2 mt-3" disabled v-model="name"></b-form-input>
        </b-input-group>
        <b-input-group class="mt-2">
          <template v-slot:prepend>
            <b-img class="w-100" src="../assets/login-birthday.png"></b-img>
          </template>
          <b-form-input class="ml-2 mt-3" disabled v-model="birthday"></b-form-input>
        </b-input-group>
        <b-input-group class="mt-2">
          <template v-slot:prepend>
            <b-img class="w-100" src="../assets/login-blood.png"></b-img>
          </template>
          <b-form-input class="ml-2 mt-3" disabled v-model="blood"></b-form-input>
        </b-input-group>
        <b-row no-gutters class="mt-3">
          <b-col cols="4">
            <b-img src="../assets/gd-pic1.png"></b-img>
          </b-col>
        </b-row>
        <b-row no-gutters class="mt-3">
          <b-col cols="2" v-for="n in 12" :key="n">
            <b-img class="w-100" src="../assets/empty-card.png"></b-img>
          </b-col>
        </b-row>
        <b-row no-gutters class="mt-3">
          <b-col cols="4">
            <b-img src="../assets/book-friend.png"></b-img>
          </b-col>
        </b-row>
        <b-row no-gutters class="mt-3">
          <b-col cols="2" v-for="n in 6" :key="n">
            <b-img class="w-100" src="../assets/empty-card.png"></b-img>
          </b-col>
        </b-row>
        <b-row no-gutters class="mt-3">
          <b-col cols="4">
            <b-img src="../assets/book-meet.png"></b-img>
          </b-col>
        </b-row>
        <b-row no-gutters class="mt-3">
          <b-col cols="2" v-for="n in 4" :key="n">
            <b-img class="w-100" src="../assets/empty-card.png"></b-img>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      name: '',
      birthday: '',
      blood: ''
    }
  },
  created () {
    const unknown = '未設定'
    let user = {}
    try {
      const str = window.localStorage.getItem('user')
      user = JSON.parse(str)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
    this.name = user.name || unknown
    this.birthday = user.birthday || unknown
    this.blood = user.blood || unknown
  }
}
</script>