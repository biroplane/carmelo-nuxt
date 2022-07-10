export const state = () => ({
  cart: [
    {
      user: 'guest',
      items: []
    }
  ]
})

export const getters = {
  getCart: (state) => (user) =>
    state.cart.filter((cart) => cart.user === user)[0].items
}
