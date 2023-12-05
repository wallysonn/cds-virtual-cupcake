// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@pinia/nuxt",
    "@formkit/auto-animate"
  ],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons', "heroicons"]
  }
})