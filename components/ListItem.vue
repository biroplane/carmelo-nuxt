<template>
  <div class="">
    <div class="flex mt-4" @click="open = !open">
      <div class="flex-grow">
        <h3 class="text-xl font-serif">
          {{ item.title }}
          <b v-if="item.isNew" class="text-yellow text-xs">★</b>
        </h3>
        <nuxt-content
          :document="item"
          class="prose prose-sm font-body text-gray-300"
        />
      </div>
      <div class="w-auto flex justify-end">
        <ul
          v-if="item.variations"
          class="flex space-x-2 flex-nowrap pricelists"
        >
          <li
            v-for="(variant, v) in item.variations.variants"
            :key="v"
            class="whitespace-nowrap"
          >
            {{ variant.price | money }}
          </li>
        </ul>
        <span v-else>{{ item.price | money }}</span>
      </div>
    </div>
    <transition name="appear">
      <div v-if="open" class="flex space-x-4">
        <button class="square" @click="changeQty(-1)">
          <i class="mdi mdi-minus"></i>
        </button>
        <div class="square">
          {{ quantity }}
        </div>
        <button class="square" @click="changeQty(1)">
          <i class="mdi mdi-plus"></i>
        </button>
        <button class="square bg-primary-500 text-primary-800" @click="buy">
          <i class="mdi mdi-cart-outline"></i>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    open: false,
    quantity: 1,
  }),
  methods: {
    changeQty(qty) {
      if (this.quantity + qty < 1) {
        this.quantity = 1
      } else {
        this.quantity += qty
      }
      // this.quantity += qty;
    },
    buy() {
      this.open = false
    },
  },
}
</script>

<style lang="postcss">
.square {
  @apply w-8 h-8 grid place-items-center;
}
</style>
