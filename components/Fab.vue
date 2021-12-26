<template>
  <div
    class="fixed bottom-6 h-12 flex justify-center items-center z-max csk-fab"
    :class="[isOpen ? 'w-full right-0' : 'w-12 right-6', { isOpen }]"
    @blur="isOpen = !isOpen"
  >
    <div
      class="
        w-full
        h-full
        flex flex-col
        items-start
        justify-start
        space-x-2
        rounded-full
        focus:outline-none
      "
      :class="[isOpen ? 'block-shadow ' : 'justify-center']"
    >
      <button
        class="w-12 h-12 rounded-full"
        :class="[isOpen ? null : 'block-shadow']"
        @click="isOpen = !isOpen"
        @blur="onBlur"
      >
        <!-- <img src="/phone.png" alt="phone" /> -->
        <i
          class="mdi mdi-plus text-2xl text-primary-500"
          :class="{ 'mdi-rotate-45': isOpen }"
        ></i>
        <!-- <h5 class="text-black font-semibold">WhatsApp</h5> -->
      </button>
      <div v-if="isOpen" class="w-full h-full px-4">
        <ul class="flex flex-col space-y-4 mt-4">
          <li class="w-full">
            <nuxt-link
              to="/prenota"
              class="flex items-center space-x-4"
              @click.native="isOpen = false"
            >
              <img src="/prenota.png" alt="prenota" class="w-8 h-8" />
              <h6 class="font-medium text-xl">Prenota</h6>
            </nuxt-link>
          </li>
          <li class="w-full">
            <button class="flex items-center space-x-4" @click="open">
              <img src="/whatsapp.png" alt="whatsapp" class="w-8 h-8" />
              <h6 class="font-medium text-xl">WhatsApp</h6>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
  methods: {
    onBlur() {
      setTimeout(() => {
        this.isOpen = false
      }, 300)
    },
    open() {
      this.isOpen = false

      window.open('https://wa.me/393496934009', '_blank')
      // if (this.isOpen) {
      // }
    },
  },
}
</script>

<style lang="postcss">
.csk-fab {
  transition: border 0s ease, border-radius 0.2s ease-in-out 0.3s,
    width 0.2s ease-in-out 0.7s, background-color 0.2s ease-in-out 0.3s,
    height 0.2s ease-in-out 0.3s;

  &.isOpen {
    @apply text-black w-full h-40;
    border-radius: 2% / 2%;
    .block-shadow {
      @apply rounded-md;
    }
  }
}
</style>
