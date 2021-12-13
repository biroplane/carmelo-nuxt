<template>
  <div
    class="
      fixed
      bottom-6
      h-12
      flex
      justify-center
      items-center
      z-max
      transition-all
      duration-300
      cursor-pointer
    "
    :class="[isOpen ? 'w-full right-0' : 'w-12 right-6']"
    @click="isOpen = !isOpen"
  >
    <div
      class="
        block-shadow
        w-full
        h-full
        flex
        justify-center
        items-center
        space-x-2
        rounded-full
        focus:outline-none
      "
    >
      <button class="flex" @click="open" @blur="isOpen = !isOpen">
        <img src="/phone.png" alt="phone" />
        <h5 v-if="isOpen" class="text-black font-semibold">WhatsApp</h5>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
  methods: {
    open() {
      if (this.isOpen) {
        window.open('https://wa.me/393477979762', '_blank')
      }
    },
  },
}
</script>

<style></style>
