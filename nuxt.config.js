// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';
import postcssOptions from './postcss.config';

dotenv.config();

export default {
  ssr: true,

  /*
    ** Headers of the page
    */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'ahrefs-site-verification',
        content: '91034bf01733fc21c5ff5ea428b34669f828f4085137983f65f7024752f3a29f',
      },
      {
        name: 'google-site-verification',
        content: 'c5hfFXSFb7nsZGJVL4r4-ELtDr4zzQbnZIdQnrJdeNc',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'chassis, porte, fenetre, chassis hannut, chassis waremme, chassis orp-jauche, chassis jodoigne, chassis waremme, chassis pvc, chassis alu, chassis aluminium, chassis fenetre, porte fenetre',
      },

    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/custom/favicon_manu.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: '/css/bootstrap.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/animate.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/fontawesome-all.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/flaticon.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/hover.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/custom-animate.css',
      },
      {
        rel: 'stylesheet',
        href: '/plugins/glightbox/glightbox.min.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/style.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/rtl.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/responsive.css',
      },
      {
        rel: 'stylesheet',
        href: '/css/colors/color-5.css',
      },
    ],

    // script: [
    //   {
    //     src: '/plugins/glightbox/glightbox.min.js',
    //     body: true,
    //   },
    //   {
    //     src: '/plugins/accordion/accordion.min.js',
    //     body: true,
    //   },
    // ],
  },
  /*
    ** Customize the progress-bar color
    */
  loading: {
    color: '#95d5dc',
    height: '4px',
  },
  /*
    ** Global CSS
    */
  css: [
    '@/assets/css/tailwind.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vue-cookies.js',
    '~/plugins/router-inject.js',
    { src: '~/plugins/vue-cropperjs.js', mode: 'client' },
    { src: 'plugins/owl.js', ssr: false },
    {
      src: 'plugins/mixitup.js',
      ssr: false,
    },
    {
      src: 'plugins/axios.js',
      ssr: true,
    },
  ],
  /* router: {
         middleware: ['auth']
     }, */
  /*
    ** Nuxt.js dev-modules
    */
  // buildModules: [
  //   '@nuxt/image',
  //   '@nuxtjs/fontawesome',
  // ],
  /*
    ** Nuxt.js modules
    */
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'cookie-universal-nuxt',

    [
      'nuxt-mail', {
        message: {
          to: 'info@manupotvin.be',
        },
        smtp: {
          host: 'smtp-relay.sendinblue.com',
          port: 587,
          auth: {
            user: 'fredmoras8@gmail.com',
            pass: 'QaLKm1SDbfh8zvFH',
          },
        },
      }],
    ['@nuxtjs/recaptcha', {
      hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
      language: 'V3', // Recaptcha language (v2)
      siteKey: '6LdmmngbAAAAAB7v58qsupjwR5HTPjZxyRNn8IUI', // Site key for requests
      version: 'V3', // Version
      size: 'normal',
    }],

  ],
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://api.repairtofix.com',
        endpoints: {
          login: {
            url: '/api/login',
          },
          logout: {
            url: '/api/logout',
          },
          user: {
            url: '/api/user',
          },
        },
        user: {
          property: false,
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/',
    },
  },
  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  /*
    ** Build configuration
    */
  build: {
    /*
        ** You can extend webpack config here
        */
    // extend(config, ctx) {
    // },
    postcss: {
      postcssOptions,
    },
  },

  env: {
    baseURL: process.env.BASE_URL,
    phoneNumber: '0475 62 64 40',
  },

  components: {
    dirs: [
      '~/components',
      '~/components/generals',
      '~/components/products',
      '~/components/testimonials',
    ],
  },
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'dashboard',
        path: '/dashboard',
        component: resolve(__dirname, 'pages/back-office/dashboard.vue'),
      });
      routes.push({
        name: 'realisations',
        path: '/realisations',
        component: resolve(__dirname, 'pages/back-office/realisations/index.vue'),
      });
      routes.push({
        name: 'realisations edit',
        path: '/realisations/:id',
        component: resolve(__dirname, 'pages/back-office/realisations/_id.vue'),
      });
      routes.push({
        name: 'temoignages',
        path: '/temoignages',
        component: resolve(__dirname, 'pages/back-office/temoignages/index.vue'),
      });
      routes.push({
        name: 'temoignages edit',
        path: '/temoignages/:id',
        component: resolve(__dirname, 'pages/back-office/temoignages/_id.vue'),
      });
    },
  },
  server: {
    host: process.env.NUXT_HOST || '0.0.0.0', // default: localhost
    port: process.env.NUXT_PORT || 3000, // default: 3000
  },
};
