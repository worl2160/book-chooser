<template>
	<div>
    <img ref="img1" class="smooth" :src="imgSrc" />
  </div>
</template>

<script>
export default {
  props: {
    imgs: {type: Array, default(){ return [] }}
  },
  name: 'rotater',
  data () {
    return {
      counter: 0
    }
  },
  computed: {
    imgSrc () {
      let idx = parseInt(this.counter / 180) % this.imgs.length
      return this.imgs[idx]
    }
  },
  methods: {
    start () {
      setInterval(() => {
        this.counter += 1
        if(this.$refs.img1){
          this.$refs.img1.style.transform = `rotateY(${(this.counter - 90)}deg)`;
        }
      }, 10)
    }
  },
  mounted () {
    this.start()
  }
}
</script>
<style scoped>
.smooth {
  transition: transform 0.5s line;
}
</style>