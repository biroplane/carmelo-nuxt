<template>
  <div class="w-full">
    <lottie :options="options" @animCreated="handleAnimation" />
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/static/error.json'
export default {
  components: {
    Lottie,
  },
  data: () => ({
    anim: null,
    options: { animationData: animationData.default },
  }),
  methods: {
    handleAnimation(anim) {
      this.anim = anim
    },
  },
}
</script>

<style></style>
