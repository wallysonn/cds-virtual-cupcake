export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        head: {
            title: 'Cupcake Store',
            meta: [
                {charset: 'utf-8'},
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '_nuxt/assets/images/logo.png'
                }
            ]
        }
    },
    modules: [
        '@nuxt/ui',
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "@pinia/nuxt",
        "@formkit/auto-animate",
        'nuxt-vue3-google-signin'
    ],
    googleSignIn: {
        clientId: '691583100776-sr5rl2040l5haqulccgb2d86ovcqohim.apps.googleusercontent.com',
    },
    ui: {
        global: true,
        icons: ['mdi', 'simple-icons', "heroicons"]
    }
})