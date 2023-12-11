// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  nitro: {
    preset: "firebase",
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width",
      title: "ひんやりあるばむ",
      meta: [
        // <meta name="description" content="My amazing site.">
        {
          name: "description",
          content: "ひんやりとしたものを投稿、共有しよう。",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Inter",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      script: [],
    },
  },
  css: [
    "~/assets/style/reset.css",
    "vuetify/lib/styles/main.sass",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
      "vuetify",
    ],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    // for HMR
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
