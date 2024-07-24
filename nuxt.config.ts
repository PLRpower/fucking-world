// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/icon", "@nuxt/image", "@nuxt/fonts"],

  fonts: {
    defaults: {
      styles: ['normal'],
      subsets: [
        'dela-gothic-one',
        'montserrat',
      ]
    },
  },

  runtimeConfig: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    ENDPOINT_SECRET: process.env.ENDPOINT_SECRET,
    public: {
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    }
  },
})