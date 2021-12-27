<template>
  <div class="w-full h-full">
    <hero>
      <div class="flex flex-col pt-12">
        <nuxt-content :document="orari" />
      </div>
    </hero>
    <!-- <pre>{{ $store.getters.byCategory }}</pre> -->
    <!-- <wave /> -->
    <aside class="container">
      <ClientOnly>
        <h2 class="mb-8 text-center font-bold">Di Cosa hai voglia oggi?</h2>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <button
              class="flex flex-col space-y-4 items-center"
              @click="filterTag('')"
            >
              <div
                class="w-16 h-16 rounded-full p-2 grid place-items-center"
                :class="{ 'bg-gray-200': selectedTag === '' }"
              >
                <i class="mdi mdi-food text-2xl text-red-700"></i>
              </div>
              <p class="text-xs text-center taglist">Tutto</p>
            </button>
          </swiper-slide>
          <swiper-slide v-for="(tag, t) in tags" :key="t">
            <div class="w-full flex justify-center">
              <button
                class="flex flex-col space-y-4 items-center"
                @click="filterTag(tag.slug)"
              >
                <div
                  class="w-16 h-16 rounded-full p-2 grid place-items-center"
                  :class="{
                    'bg-gray-200': $store.state.selectedTag == tag.slug,
                  }"
                >
                  <img
                    :src="tag.images"
                    :alt="tag.title"
                    class="w-full h-12 object-contain"
                  />
                </div>
                <p class="text-xs text-center taglist">{{ tag.title }}</p>
              </button>
            </div>
          </swiper-slide>
        </swiper>
      </ClientOnly>
    </aside>
    <section class="z-20 w-full container">
      <div class="relative h-20">
        <input
          v-model="search"
          type="search"
          class="
            block
            w-full
            p-4
            my-12
            bg-transparent
            border-b border-gray-300
            sticky
            top-12
            transition-all
            duration-300
            rounded-md
            focus:rounded-full focus:bg-primary-500 focus:text-black
          "
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
          <ul class="ml-4 font-light text-lg">
            <li
              v-for="(item, i) in cat.items"
              :key="i"
              class="flex mt-4"
              data-aos="flip-down"
            >
              <div class="flex-grow">
                <h3 class="text-xl font-serif">
                  {{ item.title }}
                  <b v-if="item.isNew" class="text-yellow text-xs">★</b>
                </h3>
                <!-- <p class="font-body text-xs text-gray-300">
                  {{ item.description }}
                </p> -->
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
            </li>
          </ul>
          <div
            v-if="cat.custom"
            class="
              my-12
              bg-gradient-to-tr
              from-primary-800
              to-primary-600
              text-black
              px-4
              py-8
            "
            data-aos="fade-up"
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
      </div>
    </section>
    <wave />
    <section class="container">
      <div v-for="(drink, d) in drinks" :key="d" class="mb-12">
        <div class="block-shadow rounded-md mb-4 bg-primary-500">
          <h2 class="text-black font-bold px-4 py-2 text-center">
            {{ drink.title }}
          </h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(item, i) in drink.items"
            :key="i"
            data-aos="zoom-in-down"
            class="block-shadow rounded-md text-black relative"
          >
            <img
              :src="item.images || '/pattern.png'"
              class="w-full square object-cover"
            />
            <h3 class="w-full text-center">{{ item.title }}</h3>
            <span
              v-if="!item.variations"
              class="
                absolute
                top-2
                right-2
                bg-purple-500
                text-white
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                shadow-md
              "
              >{{ item.price | price }}</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  async asyncData({ $content }) {
    const orari = await $content('pages/orari').fetch()
    const poke = await $content('custom/pokè').fetch()
    const tags = await $content('tags').sortBy('slug').fetch()
    return { orari, poke, tags }
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
