<template>
  <q-page class="profile-page">
    <!-- 프로필 히어로 섹션 -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="profile-image-container">
          <div class="profile-image">
            <q-avatar size="200px" class="profile-avatar">
              <img src="~/assets/image/me.jpg" alt="Profile" />
            </q-avatar>
            <div class="status-indicator online"></div>
          </div>
        </div>
        
        <div class="profile-info">
          <h1 class="profile-name">
            남진우
            <span class="gradient-text">FullStack Developer</span>
          </h1>
          <p class="profile-description">
            팀워크를 중시하는 개발자입니다.<br>
            백엔드, 프론트엔드 모두 가능합니다.
          </p>
          <div class="profile-stats">
            <div class="stat-item">
              <div class="stat-number">17+</div>
              <div class="stat-label">년 경력</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">프로젝트</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">A+</div>
              <div class="stat-label">성실함</div>
            </div>
          </div>
          
          <div class="profile-actions">
            <!-- <q-btn 
              color="primary" 
              size="lg" 
              rounded 
              class="action-btn"
              no-caps
            >
              <q-icon name="email" class="q-mr-sm" />
              연락하기
            </q-btn> -->
            <q-btn 
              inline 
              color="primary" 
              size="lg" 
              rounded 
              class="action-btn"
              no-caps
              @click="showConfirmDialog"
            >
            <q-icon name="download" class="q-mr-sm"  />
                이력서(doc)
            </q-btn>

            <q-btn 
              inline 
              color="primary" 
              size="lg" 
              rounded 
              class="action-btn"
              no-caps
              @click="downloadResume"
            >
            <q-icon name="download" class="q-mr-sm"  />
               이력서(pdf)
            </q-btn>
          </div>
        </div>
      </div>
    </section>

    <!-- 기술 스택 섹션 -->
    <section class="skills-section">
      <div class="section-header">
        <h2 class="section-title">기술 스택</h2>
        <p class="section-description">최근 사용하고 있는 기술들입니다</p>
      </div>
      
      <div class="skills-grid">
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
          <div class="skill-level">
            <div class="skill-bar">
              <div class="skill-progress" style="width: 90%"></div>
            </div>
            <span class="skill-percentage">90%</span>
          </div>
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
          <div class="skill-level">
            <div class="skill-bar">
              <div class="skill-progress" style="width: 90%"></div>
            </div>
            <span class="skill-percentage">90%</span>
          </div>
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
          <div class="skill-level">
            <div class="skill-bar">
              <div class="skill-progress" style="width: 80%"></div>
            </div>
            <span class="skill-percentage">80%</span>
          </div>
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
          <div class="skill-level">
            <div class="skill-bar">
              <div class="skill-progress" style="width: 80%"></div>
            </div>
            <span class="skill-percentage">80%</span>
          </div>
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
          <div class="skill-level">
            <div class="skill-bar">
              <div class="skill-progress" style="width: 80%"></div>
            </div>
            <span class="skill-percentage">80%</span>
          </div>
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
          <div class="skill-level">
            <div class="skill-bar">
              <div class="skill-progress" style="width: 80%"></div>
            </div>
            <span class="skill-percentage">80%</span>
          </div>
        </AppCard>
      </div>
       <div class="text-center q-mt-xl">
        <NuxtLink to="/skill">
          <q-btn color="primary" outline size="lg" roundedno-caps>
            모든 스킬 보기
          <q-icon name="arrow_forward" class="q-ml-sm"/>
          </q-btn>
        </NuxtLink>
      </div>
    </section>

    <!-- 프로젝트 섹션 -->
    <section class="projects-section">
      <div class="section-header">
        <h2 class="section-title">주요 프로젝트</h2>
        <p class="section-description">최근 작업한 프로젝트들을 소개합니다</p>
      </div>
      
      <div class="projects-grid">
          <ProjectCard />
      </div>
      
      <div class="text-center q-mt-xl">
        <NuxtLink to="/project">
          <q-btn color="primary" outline size="lg" roundedno-caps>
            모든 프로젝트 보기
          <q-icon name="arrow_forward" class="q-ml-sm"/>
          </q-btn>
        </NuxtLink>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { button } from '#build/ui';
import { Dialog } from 'quasar';
import ProjectCard from '~/components/ProjectCard.vue';

const resumeUrl = '/files/이력서_20251017.doc'

const showConfirmDialog = () => {

  console.log('Download button clicked');
  Dialog.create({
    title: '다운로드 확인',
    message: '이력서를 다운로드하시겠습니까?',
    ok: {
      label: '다운로드',
      color: 'primary'
    },
    cancel: {
      label: '취소',
      color: 'negative'
    }
  }).onOk(() => {
    // a 태그를 동적으로 생성하여 다운로드 실행
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = '이력서_남진우.doc'
    link.click()
  }).onCancel(() => {
    console.log('다운로드 취소됨')
  })
}

// 사용 안함 
const downloadResume = () => {
  const resumeUrl = '/files/남진우_이력서.pdf';
  const fileName = '이력서_남진우.pdf';

  Dialog.create({
    title: '다운로드 확인',
    message: '이력서를 다운로드하시겠습니까?',
    ok: {
      label: '다운로드',
      color: 'primary'
    },
    cancel: {
      label: '취소',
      color: 'negative'
    }
  }).onOk(() => {
     // Blob을 사용하여 다운로드 트리거
    fetch(resumeUrl)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href); // 메모리 해제
    }).catch(error => {
      console.error('파일 다운로드 실패:', error);
    });
  }).onCancel(() => {
    console.log('다운로드 취소됨')
  })
};
</script>

<style scoped lang="scss">
.profile-page {
  padding: 0;
}

// 히어로 섹션
.hero-section {
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

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
}

.profile-image-container {
  position: relative;
}

.profile-image {
  position: relative;
  display: inline-block;
}

.profile-avatar {
  border: 6px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
}

.status-indicator {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 4px solid white;
  
  &.online {
    background: #10b981;
    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.3);
    animation: pulse 2s infinite;
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.profile-info {
  max-width: 600px;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 16px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.gradient-text {
  display: block;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 8px;
}

.profile-description {
  font-size: 1.25rem;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.6;
}

.profile-stats {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 30px;
  }
}
.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #ffd700;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.profile-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
}

.action-btn {
  padding: 12px 32px;
  font-weight: 600;
  text-transform: none;
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

// 프로젝트 섹션
.projects-section {
  padding: 80px 24px;
  background: #f8f9fa;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-item {
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
}

// 반응형 디자인
@media (max-width: 768px) {
  .profile-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .profile-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .skills-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-section {
    padding: 10px 0;
  }
}
</style>