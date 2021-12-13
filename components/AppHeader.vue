<template>
  <header
    class="w-full fixed h-16 z-50 transition-all"
    :class="{ 'bg-black': visible }"
  >
    <div class="container h-full flex items-center justify-between">
      <logo></logo>
      <button
        class="
          w-10
          h-10
          flex
          justify-center
          items-center
          hover:bg-primary-400
          rounded-full
          text-primary-500
        "
      >
        <i class="mdi mdi-menu text-xl"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    visible: false,
  }),
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.visible = true
      } else {
        this.visible = false
      }
    },
  },
}
</script>

<style lang="postcss">
.bgVisible {
  @apply bg-black;
}
</style>
