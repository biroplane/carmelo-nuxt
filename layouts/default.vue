<template>
  <div class="w-screen overflow-x-hidden">
    <app-header></app-header>
    <fab></fab>
    <!-- <div class="h-16"></div> -->
    <div>
      <Nuxt />
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: { AppHeader, AppFooter },
}
</script>

<style>
html,
body {
  width: 100vw;
  overflow-x: hidden;
}
</style>
