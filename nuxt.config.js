import { ogMeta } from './lib/meta'

export default {
  loading: false,

  publicRuntimeConfig: {
    APP_ENV: process.env.APP_ENV || 'development',
    API_URL: process.env.API_URL || 'http://localhost:5000'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    title: 'app-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...ogMeta()
    ],
    link: [
      // Generate favicon here - https://realfavicongenerator.net/
      // { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      // { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      // { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      // { rel: 'manifest', href: '/site.webmanifest' },
      // { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      // { rel: 'msapplication-TileColor', content: '#da532c' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/fontawesome/css/all.min.css' }
    ],
    script: []
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/global'
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
