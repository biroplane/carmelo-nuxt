<template>
  <main>
    Under maintenance. please
    <a href="https://carmelosk.glideapp.io/">click here </a>
  </main>
  <!-- <div class="w-full h-full">
    <hero>
      <div class="flex flex-col pt-12">
        <nuxt-content :document="orari" />
      </div>
    </hero>
   
    <aside class="container">
      <ClientOnly>
        <h2 class="mb-8 font-bold text-center">Di Cosa hai voglia oggi?</h2>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <button
              class="flex flex-col items-center space-y-4"
              @click="filterTag('')"
            >
              <div
                class="grid w-16 h-16 p-2 rounded-full place-items-center"
                :class="{ 'bg-gray-200': selectedTag === '' }"
              >
                <i class="text-2xl text-red-700 mdi mdi-food"></i>
              </div>
              <p class="text-xs text-center taglist">Tutto</p>
            </button>
          </swiper-slide>
          <swiper-slide v-for="(tag, t) in tags" :key="t">
            <div class="flex justify-center w-full">
              <button
                class="flex flex-col items-center space-y-4"
                @click="filterTag(tag.slug)"
              >
                <div
                  class="grid w-16 h-16 p-2 rounded-full place-items-center"
                  :class="{
                    'bg-gray-200': $store.state.selectedTag == tag.slug,
                  }"
                >
                  <img
                    :src="tag.images"
                    :alt="tag.title"
                    class="object-contain w-full h-12"
                  />
                </div>
                <p class="text-xs text-center taglist">{{ tag.title }}</p>
              </button>
            </div>
          </swiper-slide>
        </swiper>
      </ClientOnly>
    </aside>
    <section class="container z-20 w-full">
      <div class="relative h-20">
        <input
          v-model="search"
          type="search"
          class="sticky block w-full p-4 my-12 transition-all duration-300 bg-transparent border-b border-gray-300 rounded-md top-12 focus:rounded-full focus:bg-primary-500 focus:text-black"
          placeholder="Cerca"
        />
      </div>
      <div>
        <div
          v-for="(cat, c) in food"
          :key="c"
          class="mb-8"
          data-aos="flip-left"
        >
          <h1 class="category">{{ cat.title }}</h1>
          <ul class="ml-4 text-lg font-light">
            <li
              v-for="(item, i) in cat.items"
              :key="i"
              class="flex mt-4"
              data-aos="flip-down"
            >
              <div class="flex-grow">
                <h3 class="font-serif text-xl">
                  {{ item.title }}
                  <b v-if="item.isNew" class="text-xs text-yellow">★</b>
                </h3>
                
                <nuxt-content
                  :document="item"
                  class="prose-sm prose text-gray-300 font-body"
                />
              </div>
              <div class="flex justify-end w-auto">
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
            </li>
          </ul>
          <div
            v-if="cat.custom"
            class="px-4 py-8 my-12 text-black bg-gradient-to-tr from-primary-800 to-primary-600"
            data-aos="fade-up"
          >
            <h1
              class="my-8 text-3xl font-bold text-center text-white uppercase border-t-4 border-b-4 border-purple-100 "
            >
              Crea la tua Poke
            </h1>
            <nuxt-content :document="poke" class="custom"></nuxt-content>
          </div>
        </div>
      </div>
    </section>
    <wave />
    <section class="container">
      <div v-for="(drink, d) in drinks" :key="d" class="mb-12">
        <div class="mb-4 rounded-md block-shadow bg-primary-500">
          <h2 class="px-4 py-2 font-bold text-center text-black">
            {{ drink.title }}
          </h2>
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div
            v-for="(item, i) in drink.items"
            :key="i"
            data-aos="zoom-in-down"
            class="relative text-black rounded-md block-shadow"
          >
            <img
              :src="item.images || '/pattern.png'"
              class="object-cover w-full square"
            />
            <h3 class="w-full text-center">{{ item.title }}</h3>
            <span
              v-if="!item.variations"
              class="absolute flex items-center justify-center w-12 h-12 text-white bg-purple-500 rounded-full shadow-md top-2 right-2"
              >{{ item.price | price }}</span
            >
          </div>
        </div>
      </div>
    </section>
  </div> -->
</template>

<script>
export default {
  async asyncData({ $content }) {
    // const orari = await $content('pages/orari').fetch()
    // const poke = await $content('custom/pokè').fetch()
    // const tags = await $content('tags').sortBy('slug').fetch()
    // return { orari, poke, tags }
  },
  data: () => ({
    observable: null,
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      },
      grabCursor: true,

      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
    },
  }),
  computed: {
    food() {
      return this.$store.getters.food
    },
    drinks() {
      return this.$store.getters.drinks
    },
    search: {
      get() {
        return this.$store.state.search
      },
      set(value) {
        this.$store.commit('SET_SEARCH', value)
      },
    },
    selectedTag: {
      get() {
        return this.$store.state.selectedTag
      },
      set(value) {
        this.$store.commit('SET_TAG', value)
      },
    },
  },
  mounted: () => {
    window.location.href = 'https://carmelosk.glideapp.io/'
  },

  methods: {
    filterTag(tag) {
      // TOGGLE

      if (this.selectedTag === tag) {
        this.selectedTag = ''
      } else {
        this.selectedTag = tag
      }
    },
  },
}
</script>
<style lang="postcss">
.scroll-item {
  @apply opacity-0 transition-all duration-500;
  transform: translateX(150px);
}
.scroll-item.animate {
  @apply opacity-100;
  transform: translateX(0);
}
.nuxt-content strong,
.nuxt-content b {
  color: inherit !important;
}
.nuxt-content h3 {
  @apply font-bold mt-4;
}
h1.category {
  @apply font-black text-4xl md:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-600;
}
.taglist {
  @apply bg-clip-text text-transparent bg-gradient-to-t from-yellow to-purple-300;
}

.nuxt-content.custom {
  @apply text-white;
  h2 {
    @apply font-serif text-2xl mt-4;
  }
  h3 {
    @apply font-serif text-xl mt-4;
  }
}
</style>
