<template>
  <div class="w-full h-full">
    <hero>
      <div class="flex flex-col">
        <logo />
        <nuxt-content :document="orari" />
      </div>
    </hero>
    <div class="z-20 w-full">
      <input type="search" />
      <!-- <pre>{{ $store.getters.byCategory }}</pre> -->
      <wave />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const orari = await $content('pages/orari').fetch()
    return {
      orari,
    }
  },
  mounted() {},
}
</script>
<style lang="postcss">
.nuxt-content {
  @apply text-sm;
}
.nuxt-content h3 {
  @apply font-bold mt-4;
}
</style>
