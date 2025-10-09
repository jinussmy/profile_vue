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

  // Vite 설정으로 소스맵 경고 해결
  vite: {
    css: {
      devSourcemap: true
    },
    build: {
      sourcemap: false // 프로덕션에서는 소스맵 비활성화
    }
  },
  
  // Nuxt Image 설정
  image: {
    // Sharp 사용 설정
    provider: 'sharp',
    // Sharp 옵션
    sharp: {},
    // 이미지 품질 설정
    quality: 80,
    // 형식 설정
    format: ['webp', 'avif'],
    // 크기 제한
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },
  
  quasar: {
    // Quasar 옵션 예시
    iconSet: 'material-icons',
    lang: 'ko-KR',
    // 필요한 옵션 추가
  }
})