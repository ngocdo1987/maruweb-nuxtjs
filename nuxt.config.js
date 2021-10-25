export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    title: 'Home page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    //'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/i18n',
    //'@nuxtjs/sitemap',
    '@nuxtjs/redirect-module'
  ],

  i18n: {
    locales: [
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja-JP.js'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'ja'
  },

  redirect: [
    // Redirect options here => https://github.com/nuxt-community/redirect-module
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Dot env module configuration
  dotenv: {
    /* module options */
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
