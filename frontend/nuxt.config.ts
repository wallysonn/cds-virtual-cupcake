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
        "@formkit/auto-animate"
    ],
    ui: {
        global: true,
        icons: ['mdi', 'simple-icons', "heroicons"]
    }
})