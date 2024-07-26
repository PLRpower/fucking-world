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

  modules: ["@nuxt/icon", "@nuxt/image", "@nuxtjs/google-fonts", "nuxt-aos"],

  googleFonts: {
    families: {
      'Dela Gothic One': true,
      Montserrat: true,
    },
  },

  runtimeConfig: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    ENDPOINT_SECRET: process.env.ENDPOINT_SECRET,
    public: {
        STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  aos: {
    duration: 1000,
  }
})