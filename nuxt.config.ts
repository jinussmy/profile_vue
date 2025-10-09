// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: { strict: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    'nuxt-quasar-ui', // Quasar 모듈 추가
  ],
  quasar: {
    // Quasar 옵션 예시
    iconSet: 'material-icons',
    lang: 'ko-KR',
    // 필요한 옵션 추가
  }
})