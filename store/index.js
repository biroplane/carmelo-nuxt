import { groupBy } from 'lodash'
export const state = () => ({
  products: [],
  categories: [],
  cart: [],
  total: 0
})
export const getters = {
  categories: (state) => {
    const _cats = state.products
      .map((product) => product.categories)
      .filter((c) => c)
      .flat()
    const _res = new Map(_cats.map((c) => [c.slug, c]))

    return Array.from(_res).flat()
  },

  byCategory: (state) =>
    groupBy(
      state.products.filter((cat) => {
        console.log('Cat in filter', cat.categories)
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
  }
}
export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const data = await $content('products').where({ visible: true }).fetch()

    // const _categories = data
    //   .map((t) => t.categories)
    //   .flat()
    //   .filter((t) => t != null)

    // const result = [
    //   ...new Map(_categories.map((item) => [item.id, item])).values()
    // ]

    commit('SET_PRODUCTS', data)
  }
}
