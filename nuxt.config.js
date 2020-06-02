
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: "Saito's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { type: "text/javascript", src: "https://code.jquery.com/jquery-2.2.4.min.js" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:300", rel: "stylesheet" },
      { href: "https://fonts.googleapis.com/css?family=Homemade+Apple", rel: "stylesheet"},
      { href: "https://use.fontawesome.com/releases/v5.11.2/css/all.css", rel: "stylesheet" },
      { href: "https://fonts.googleapis.com/css?family=Roboto+Condensed:700", rel: "stylesheet"},
      { href: "https://fonts.googleapis.com/css?family=Quicksand", rel: "stylesheet"},
      { href: "https://fonts.googleapis.com/css?family=Bangers", rel: "stylesheet"},
      { href: "https://fonts.googleapis.com/css?family=Noto+Serif+JP", rel: "stylesheet"},
      { href: "https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c", rel: "stylesheet"},
      { href: "https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700", rel: "stylesheet"},
      { href: "https://fonts.googleapis.com/css?family=Caveat", rel: "stylesheet"},
      { href: "https://fonts.googleapis.com/css?family=Economica:700", rel: "stylesheet"},
      { href: "https://fonts.googleapis.com/css?family=Sawarabi+Gothic", rel: "stylesheet"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/stylesheet.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/jQuery.js', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
