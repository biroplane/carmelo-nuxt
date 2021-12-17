import { groupBy } from 'lodash'
export const state = () => ({
  products: [],
  categories: [],
  cart: [],
  total: 0,
  search: '',
  selectedTag: '',
  foodCategories: [
    'passatempo',
    'fried-snack',
    'veg-snack',
    'healthy-fresh',
    'toast-chips',
    'burrito',
    'piatti-unici',
    'ferro-e-fuoco',
    'burger',
    'fake-burger',
    'soul-burger',
    'apulian-burger',
    'fish-burger',
    'insalate',
    'pokè',
    'dessert',
    'digestive'
  ],
  drinkCategories: ['soft-drink', 'birra', 'vino']
})
export const getters = {
  food: (state, getters) =>
    getters.categories.filter((cat) => state.foodCategories.includes(cat.slug)),
  drink: (state, getters) => {
    return getters.categories.filter((cat) => {
      return state.drinkCategories.includes(cat.slug)
    })
  },
  products: (state) =>
    state.products
      .filter((product) => {
        if (!state.selectedTag) return true
        return product.tags ? product.tags.includes(state.selectedTag) : false
      })
      .filter((product) =>
        product.title.toLowerCase().includes(state.search.toLowerCase())
      ),
  categories: (state, getters) =>
    state.categories
      .map((cat) => {
        return {
          ...cat,
          category_slug: cat.slug.toLowerCase(),
          items: getters.products.filter((product) => {
            return product.categories.includes(cat.slug)
          })
        }
      })
      .filter((cat) => cat.items.length > 0),

  byCategory: (state) =>
    groupBy(
      state.products.filter((cat) => {
        if (cat.categories) {
          return cat.categories.filter((c) => c.slug).flat()
        } else {
          return false
        }
      }),
      'categories.slug'
    )
}
export const mutations = {
  SET_PRODUCTS(state, data) {
    state.products = data
  },
  SET_CATEGORIES(state, data) {
    state.categories = data
  },
  SET_TAG(state, tag) {
    state.selectedTag = tag
  },
  SET_SEARCH(state, search) {
    state.search = search
  }
}
export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const data = await $content('products')
      .where({ visible: true })
      .sortBy('order')
      .fetch()
    const categories = await $content('categories')
      .where({ visible: true })
      .sortBy('order')
      .fetch()
    // const _categories = data
    //   .map((t) => t.categories)
    //   .flat()
    //   .filter((t) => t != null)

    // const result = [
    //   ...new Map(_categories.map((item) => [item.id, item])).values()
    // ]

    commit('SET_PRODUCTS', data)
    const _cat = categories.map((c) => ({
      ...c,
      order: c.order ? c.order : 9999
    }))

    commit('SET_CATEGORIES', _cat)
  }
}
