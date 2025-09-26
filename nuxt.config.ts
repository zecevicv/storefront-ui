// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '@erpgap/recent-view-products',
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
    'nuxt-lodash',
    'nuxt-icon',
    'nuxt-delay-hydration',
    'nuxt-typed-router',
    '@nuxtjs/robots',
    '@nuxt/eslint',
    'nuxt-viewport',
    '@nuxtjs/sitemap',
  ],
  devtools: { enabled: true },

  app: {
    head: {
      viewport:
        'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=no',
      title: 'Alokai',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ name: 'robots', content: 'index, follow' }],
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_MIDDLEWARE_URL,
    name: 'ERPGAP VSF',
    description: 'Welcome to an awesome ecommerce site!',
    defaultLocale: 'en',
  },

  runtimeConfig: {
    shouldByPassCacheQueryNames: [
      'LoadCartQuery',
      'WishlistLoadQuery',
      'GetAddressesQuery',
    ],
    public: {
      odooBaseImageUrl: '',
      odooBaseUrl: '',
      currencySymbol: '',
      currencySeparator: '',
      currencyDecimal: '',
      currencyPrecision: '',
    },
  },

  build: {
    transpile: ['vue-toastification'],
  },

  routeRules: {
    '/': { swr: Number(process.env?.NUXT_SWR_CACHE_TIME) },
  },

  experimental: {
    asyncContext: true,
  },

  compatibilityDate: '2024-11-06',

  nitro: {
    // compressPublicAssets: true,
    storage: {
      cache: {
        driver: process.env.NUXT_STORAGE_DRIVER,
        url: process.env.NUXT_STORAGE_URL,
      },
      slug: {
        driver: process.env.NUXT_STORAGE_DRIVER,
        url: process.env.NUXT_STORAGE_URL,
        ttl: process.env?.NUXT_SWR_CACHE_TIME || 3600,
      },
    },
    devStorage: {
      cache: {
        driver: process.env.NUXT_STORAGE_DRIVER,
        url: process.env.NUXT_STORAGE_URL,
      },
      slug: {
        driver: process.env.NUXT_STORAGE_DRIVER,
        url: process.env.NUXT_STORAGE_URL,
        ttl: process.env?.NUXT_SWR_CACHE_TIME || 3600,
      },
    },
  },

  vite: {
    optimizeDeps: {
      include: ['lodash-es'],
    },
  },

  delayHydration: {
    mode: 'init',
  },

  device: {
    refreshOnResize: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },

  googleFonts: {
    families: {
      'Red Hat Display': [400, 500, 700],
    },
  },

  i18n: {
    legacy: false,
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
    ],
    strategy: 'no_prefix',
    lazy: true,
    defaultLocale: 'en',
  },

  image: {
    providers: {
      odooProvider: {
        name: 'odooProvider',
        provider: '~/providers/odoo-provider.ts',
      },
    },
    screens: {
      '2xl': 1536,
      'xxl': 1440,
      'xl': 1280,
      'lg': 1024,
      'md': 768,
      'sm': 640,
      'xs': 376,
    },
  },

  robots: {
    allow: ['/category/*', '/product/*'],
    disallow: ['/cart', '/checkout/*', '/my-account/*', '/forgot-password', '/search?'],
  },

  sitemap: {
    sources: ['/api/sitemap/urls/products', '/api/sitemap/urls/categories'],
    runtimeCacheStorage: {
      driver: process.env.NUXT_STORAGE_DRIVER,
    },
  },

  tailwindcss: {
    viewer: false,
  },

  viewport: {
    breakpoints: {
      desktopSmall: 1024,
      desktop: 1280,
      desktopMedium: 1440,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,

      tablet: 768,
    },
  },

})
