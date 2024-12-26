// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    app: {
      baseURL: '/SummerCamp123/', // 仓库名称
      buildAssetsDir: 'assets', // 不要使用_nuxt
    },
  })