// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
          content: "ひんやりを集めて共通するウェブアプリです。",
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
      script: [
        {
          src: "https://kit.fontawesome.com/8fec9e743f.js",
          crossorigin: "anonymous",
        },
        {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js",
        },
      ],
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
  plugins: ["@/plugins/fontawesome.ts"],
  vite: {
    define: {
      "process.env.DEBUG": true,
    },
    // for HMR
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  modules: [
    "nuxt-rating",
  ],
});
