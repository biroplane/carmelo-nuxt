export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  pageTransition: 'pageSlide',

  env: {
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_API: process.env.AIRTABLE_API,
    AIRTABLE_BASE_URL: process.env.AIRTABLE_BASE_URL,
    GOOGLE_MAPS: process.env.GOOGLE_MAPS
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'carmelo-nuxt',
    htmlAttrs: {
      lang: 'it'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/app.pcss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
    { src: '~/plugins/vue-carousel', mode: 'client' },
    { src: '~/plugins/v-calendar', mode: 'client' },
    '~/plugins/filters'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/google-fonts',
    'nuxtjs-mdi-font',
    [
      'nuxt-gmaps',
      {
        key: process.env.GOOGLE_MAPS
        // you can use libraries: ['places']
      }
    ]
  ],
  googleFonts: {
    display: 'swap',
    families: {
      Montserrat: [400, 500, 600, 700, 800, 900],
      'Bebas Neue': true,
      BioRhyme: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    }
  }
}
