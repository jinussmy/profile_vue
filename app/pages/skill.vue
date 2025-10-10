<template>
  <q-page class="portfolio-page">
    <!-- 소개 섹션 -->
    <section class="intro-section">
      <div class="intro-content">
        <div class="intro-text">
          <!-- <h1 class="intro-title">
            안녕하세요, <span class="gradient-text">남진우</span>입니다
          </h1> -->
          <div class="intro-description">
             <span class="gradient-text">성실함</span>을 중시하는 개발자입니다. 
          </div>
          <div class="intro-highlights">
            <!-- <div class="highlight-item">
              <q-icon name="code" size="2rem" color="primary" />
              <div>
                <h3>17+ 년 경력</h3>
                <p>백엔드, 프론트엔드 개발</p>
              </div>
            </div> -->
            <div class="highlight-item">
              <q-icon name="school" size="2rem" color="secondary" />
              <div>
                <h3>홍익대학교 컴퓨터 전공</h3>
                <p>학사 학위</p>
              </div>
            </div>
            <div class="highlight-item">
              <q-icon name="location_on" size="2rem" color="accent" />
              <div>
                <h3>서울특별시 신도림 거주 </h3>
                <p>교통 편리함</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="intro-image">
          <q-avatar size="200px" class="intro-avatar">
            <img src="~/assets/image/me.jpg" alt="Profile" />
          </q-avatar>
        </div>
      </div>
    </section>

     <!-- 기술 스택 섹션 -->
    <section class="skills-section">
      <div class="section-header">
        <h2 class="section-title">기술 스택</h2>
        <p class="section-description">프로젝트에 사용한 기술들입니다</p>
      </div>
      
      <div class="skills-grid">
        
        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
            </div>
          </template>
          <h3 class="skill-title">Java</h3>
          <p class="skill-description">
            주력 백엔드 프로그래밍 언어
          </p>
        </AppCard>
        
        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </div>
          </template>
          <h3 class="skill-title">JavaScript</h3>
          <p class="skill-description">
            동적 웹 애플리케이션 개발의 핵심 언어
          </p>
        </AppCard>
        
        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
            </div>
          </template>
          <h3 class="skill-title">HTML5</h3>
          <p class="skill-description">
            웹 페이지 구조 및 콘텐츠 작성의 표준 마크업 언어
          </p>
        </AppCard>
        
        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" alt="Oracle" />
            </div>
          </template>
          <h3 class="skill-title">Oracle</h3>
          <p class="skill-description">
            신뢰성 높은 관계형 데이터베이스 관리 시스템
          </p>
        </AppCard>
        
        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="Mssql" />
            </div>
          </template>
          <h3 class="skill-title">Mssql</h3>
          <p class="skill-description">
            마이크로소프트의 관계형 데이터베이스 관리 시스템
          </p> 
        </AppCard>
        
        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySql" />
            </div>
          </template>
          <h3 class="skill-title">MySql</h3>
          <p class="skill-description">
            오픈 소스 관계형 데이터베이스 관리 시스템
          </p>
        </AppCard>
        
        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" alt="Android" />
            </div>
          </template>
          <h3 class="skill-title">Android</h3>
          <p class="skill-description">
            모바일 애플리케이션 개발 플랫폼
          </p>
        </AppCard>
        
        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" />
            </div>
          </template>
          <h3 class="skill-title">Linux</h3>
          <p class="skill-description">
            서버 운영체제 및 개발 환경
          </p>
        </AppCard>

        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="SpringBoot" />
            </div>
          </template>
          <h3 class="skill-title">SpringBoot</h3>
          <p class="skill-description">
            백엔드 핵심 프레임워크
          </p>
        </AppCard>

        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />
            </div>
          </template>
          <h3 class="skill-title">Git</h3>
          <p class="skill-description">
            버전 관리 및 협업 도구
          </p>
        </AppCard>

        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
            </div>
          </template>
          <h3 class="skill-title">Vue.js</h3>
          <p class="skill-description">
            반응형 웹 애플리케이션 개발의 핵심 도구
          </p>
        </AppCard>

        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" alt="Nuxt.js" />
            </div>
          </template>
          <h3 class="skill-title">Nuxt.js</h3>
          <p class="skill-description">
            Vue.js 기반의 풀스택 프레임워크
          </p>
        </AppCard>

        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
            </div>
          </template>
          <h3 class="skill-title">TypeScript</h3>
          <p class="skill-description">
            타입 안전성을 제공하는 JavaScript 확장
          </p>
        </AppCard>

        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            </div>
          </template>
          <h3 class="skill-title">Node.js</h3>
          <p class="skill-description">
            자바스크립트 런타임 환경
          </p>
        </AppCard>

        <AppCard class="skill-card">
          <template #header>
            <div class="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg" alt="Tomcat" />
            </div>
          </template>
          <h3 class="skill-title">Tomcat</h3>
          <p class="skill-description">
            자바 서블릿 컨테이너
          </p>
        </AppCard>
      </div>
    </section>


    <!-- 연락처 섹션 -->
    <section class="contact-section">
      <div class="section-header">
        <h2 class="section-title">연락처</h2>
        <p class="section-description">질문 사항이 있으시다면 언제든 연락주세요</p>
      </div>
      
      <div class="contact-grid">
        <AppCard class="contact-card">
          <template #header>
            <q-icon name="email" size="2rem" color="primary" />
          </template>
          <h3>이메일</h3>
          <p>jinussmy@naver.com</p>
          <q-btn color="primary" outline size="sm" @click="sendEmail">
            <q-icon name="send" class="q-mr-sm" />
            이메일 보내기
          </q-btn>
        </AppCard>
        
        <AppCard class="contact-card">
          <template #header>
            <q-icon name="phone" size="2rem" color="secondary" />
          </template>
          <h3>전화번호</h3>
          <p>+82 10-4651-0134</p>
          <q-btn color="secondary" outline size="sm" @click="sendTel">
            <q-icon name="call" class="q-mr-sm" />
            전화하기
          </q-btn>
        </AppCard>
        
        <!-- <AppCard class="contact-card" >
          <template #header>
            <q-icon name="language" size="2rem" color="accent" />
          </template>
          <h3>GitHub</h3>
          <p>github.com/kimdev</p>
          <q-btn color="accent" outline size="sm">
            <q-icon name="open_in_new" class="q-mr-sm" />
            프로필 보기
          </q-btn>
        </AppCard> -->

      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">

const sendEmail = () => {
    // a 태그를 동적으로 생성하여 이메일 보냄
    const link = document.createElement('a')
    link.href = 'mailto:jinussmy@naver.com'
    link.click()
}
const sendTel = () => {
    // a 태그를 동적으로 생성하여 전화 걸기
    const link = document.createElement('a')
    link.href = 'tel:+821046510134'
    link.click()
}
  

</script>

<style scoped lang="scss">
.portfolio-page {
  padding: 0;
}

// 소개 섹션
.intro-section {
  background: linear-gradient(135deg, #363636 0%, #d6d6d8 100%);
  color: white;
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
}

.intro-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 80px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
}

.intro-title {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 24px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.gradient-text {
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro-description {
  font-size: 1.5rem;
  margin-bottom: 10px;
  opacity: 0.9;
  line-height: 1.6;
}

.intro-highlights {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.highlight-item {
  display: flex;
  align-items: center;
  gap: 16px;
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 4px 0;
  }
  
  p {
    margin: 0;
    opacity: 0.8;
  }
}

.intro-avatar {
  border: 8px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

// 섹션 공통 스타일
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
}

.section-description {
  font-size: 1.125rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
}


// 기술 스택 섹션
.skills-section {
  padding: 80px 24px;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
}

.section-description {
  font-size: 1.125rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.skill-card {
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
}

.skill-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 20px;
  
  img {
    width: 50px;
    height: 50px;
  }
}

.skill-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
}

.skill-description {
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 20px;
}

.skill-level {
  display: flex;
  align-items: center;
  gap: 12px;
}

.skill-bar {
  flex: 1;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.skill-percentage {
  font-weight: 600;
  color: #667eea;
  font-size: 0.9rem;
}

// 연락처 섹션
.contact-section {
  padding: 80px 24px;
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-card {
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 16px 0 8px 0;
  }
  
  p {
    color: #7f8c8d;
    margin-bottom: 20px;
    font-size: 1.1rem;
  }
}

// 반응형 디자인
@media (max-width: 768px) {
  .intro-highlights {
    align-items: center;
  }
  
  .highlight-item {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
  
  .experience-timeline {
    &::before {
      left: 20px;
    }
  }
  
  .timeline-item {
    padding-left: 60px;
  }
  
  .timeline-marker {
    left: 10px;
  }
  
  .experience-header {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>