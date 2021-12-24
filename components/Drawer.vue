<template>
  <div class="">
    <slot name="activator">
      <button
        class="
          w-10
          h-10
          flex
          justify-center
          items-center
          rounded-full
          text-primary-500
        "
        @click="isOpen = !isOpen"
      >
        <i class="mdi mdi-menu text-xl"></i>
      </button>
      <transition name="appear">
        <div class="absolute drawer z-max text-black" :class="{ isOpen }">
          <header
            class="w-full flex justify-between items-center fixed px-6 py-4"
          >
            <h1 class="text-2xl font-bold">Carmelo</h1>
            <button
              class="
                block-shadow
                w-10
                h-10
                rounded-full
                grid
                place-items-center
              "
              @click="isOpen = false"
            >
              <i class="mdi mdi-close text-2xl text-primary-500"></i>
            </button>
          </header>
          <ul class="mt-16 overflow-y-auto h-full px-6 pb-12 text-xl">
            <li>
              <nuxt-link to="/" @click.native="isOpen = false">Menu</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/prenota" @click.native="isOpen = false"
                >Prenota</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/contatti" @click.native="isOpen = false"
                >Contatti</nuxt-link
              >
            </li>
            <!-- <li
              v-for="(cat, c) in $store.getters.food"
              :key="c"
              class="text-md text-semibold my-2"
            >
              <nuxt-link to="/">{{ cat.title }}</nuxt-link>
            </li>
            <li
              v-for="(cat, c) in $store.getters.drinks"
              :key="c"
              class="text-md text-semibold my-2"
            >
              <nuxt-link to="/">{{ cat.title }}</nuxt-link>
            </li> -->
          </ul>
        </div>
      </transition>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({ isOpen: false }),
  computed: {
    newVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style scoped>
.appear-enter-active,
.appear-leave-active {
  transition: all 0.3s;
}
.appear-enter, .appear-leave-to /* .appear-leave-active below version 2.1.8 */ {
  opacity: 1;
  transform: translateY(-10px);
}

.drawer {
  top: 0;
  left: 0;
  transform: translate(100vw, -100vh);
  width: 100%;
  height: 100vh;
  background: #00ffb3;
  border-radius: 100px;
  transition-property: transform, border-radius;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.75, -0.5, 0, 1.75);
  transition-delay: 0s, 0.2s;
}
.isOpen {
  transform: translate(0vw, 0vh);
  border-radius: 0px;
  transition-delay: 0s, 0.3s;
}
</style>
