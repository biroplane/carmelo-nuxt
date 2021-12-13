<template>
  <div class="w-screen overflow-x-hidden">
    <app-header></app-header>
    <fab></fab>
    <!-- <div class="h-16"></div> -->
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: { AppHeader },
}
</script>

<style></style>
