<template>
  <div class="w-full h-full">
    <hero>
      <div class="flex flex-col">
        <logo />
        <nuxt-content :document="orari" />
      </div>
    </hero>
    <!-- <pre>{{ $store.getters.byCategory }}</pre> -->
    <!-- <wave /> -->
    <aside class="container">
      <ClientOnly>
        <h2 class="mb-8 text-center">Di Cosa hai voglia oggi?</h2>
        <carousel :per-page="4" :pagination-enabled="false">
          <slide v-for="(tag, t) in tags" :key="t">
            <div class="flex flex-col space-y-4 items-center">
              <div class="w-16 h-16 border-2 border-white rounded-full">
                <img :src="tag.images" alt="tag" />
              </div>
              <p class="text-xs text-center">{{ tag.title }}</p>
            </div>
          </slide>
        </carousel>
      </ClientOnly>
    </aside>
    <section class="z-20 w-full container">
      <input
        v-model="search"
        type="search"
        class="
          block
          w-full
          p-4
          rounded-md
          text-black
          my-12
          bg-transparent
          border-b border-gray-300
        "
        placeholder="Cerca"
      />
      <div>
        <div
          v-for="(cat, c) in food"
          :key="c"
          class="mb-8"
          data-aos="fade-up"
          data-aos-easing="in-out"
          data-aos-duration="1500"
          :data-aos-delay="c * 10"
        >
          <h1 class="category">{{ cat.title }}</h1>
          <ul class="ml-4 font-bebas font-light text-lg">
            <li
              v-for="(item, i) in cat.items"
              :key="i"
              class="flex mt-4"
              data-aos="fade-up"
              data-aos-easing="in-out"
              data-aos-duration="3500"
            >
              <div class="flex-grow">
                <h3 class="text-xl">
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
          <div v-if="cat.category_name === 'pokè'" class="my-12">
            <nuxt-content :document="poke"></nuxt-content>
          </div>
        </div>
      </div>
    </section>
    <wave />
    <section class="container">
      <div class="block-shadow rounded-md mb-4">
        <h2 class="text-black font-bold px-4 py-2 text-center">
          Qualcosa da Bere?
        </h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="i in 6" :key="i" class="block-shadow rounded-md text-black">
          <img :src="birra.image" class="w-full square object-cover" />
          <h3>{{ birra.name }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const orari = await $content('pages/orari').fetch()
    const poke = await $content('custom/pokè').fetch()
    const tags = await $content('tags').sortBy('slug').fetch()
    return { orari, poke, tags }
  },
  data: () => ({
    birra: {
      name: 'Brewdog IPA',
      description:
        'Scopri la freschezza di una IPA da gustare con piatti di carne',
      price: '€5,00',
      type: 'IPA',
      vol: '6.5%',
      size: '0,5l',
      image: '/birra.png',
    },
  }),
  computed: {
    food() {
      return this.$store.getters.food
    },
    search: {
      get() {
        return this.$store.state.search
      },
      set(value) {
        this.$store.commit('SET_SEARCH', value)
      },
    },
  },
}
</script>
<style lang="postcss">
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
</style>
