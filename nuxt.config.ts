// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt'],

  // routeRules: {
  //   '/dev-api/**': {
  //     proxy: 'https://pcapi-xiaotuxian-front.itheima.net/**',
  //   },
  // },

  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_BASE_URL,
    },
  },

  nitro: {
    experimental: {
      database: true,
    },

    // devProxy: {
    //   '/product': {
    //     target: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    //     changeOrigin: true,
    //   },
    // },
  },

  compatibilityDate: '2024-07-10',
});
