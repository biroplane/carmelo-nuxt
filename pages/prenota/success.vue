<template>
  <div class="w-full container">
    <lottie :options="options" @animCreated="handleAnimation" />
    <h1 class="w-full text-center font-bold text-3xl category">
      Ci siamo quasi!
    </h1>
    <div class="my-6 text-center">
      <p>Abbiamo preso in carico la tua prenotazione.</p>
      <p>A breve riceverai una mail di conferma della tua prenotazione.</p>
      <p>
        In caso di problemi o modifiche non esitare a
        <nuxt-link to="/contatti" class="underline">contattarci</nuxt-link>
      </p>
    </div>
    <nuxt-link to="/" class="block w-full py-3 text-center bg-white text-black"
      >Torna al menu</nuxt-link
    >
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import * as animationData from '~/static/success.json'
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
