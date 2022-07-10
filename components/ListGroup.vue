<template>
  <div class="mb-8">
    <h1 class="category">{{ list.title }}</h1>
    <div class="ml-4 font-light text-lg">
      <list-item v-for="(item, i) in list.items" :key="i" :item="item">
      </list-item>
    </div>
    <div
      v-if="list.custom"
      class="
        my-12
        bg-gradient-to-tr
        from-primary-800
        to-primary-600
        text-black
        px-4
        py-8
      "
    >
      <h1
        class="
          font-bold
          text-3xl text-center
          border-t-4 border-b-4 border-purple-100
          my-8
          text-white
          uppercase
        "
      >
        Crea la tua Poke
      </h1>
      <nuxt-content :document="poke" class="custom"></nuxt-content>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
    poke: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style></style>
