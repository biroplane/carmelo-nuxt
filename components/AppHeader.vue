<template>
  <header
    class="w-full fixed h-16 z-50 transition-all"
    :class="{ 'bg-black': visible }"
  >
    <div class="container h-full flex items-center justify-between">
      <logo></logo>
      <Drawer></Drawer>
    </div>
  </header>
</template>

<script>
import Drawer from './Drawer.vue'
export default {
  components: { Drawer },
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
