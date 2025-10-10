<template>
  <q-page class="portfolio-page">
    <!-- 소개 섹션 -->
    <section class="intro-section">
      <div class="intro-content">
        <div class="intro-text">
          <h1 class="intro-title">
            안녕하세요, <span class="gradient-text">남진우</span>입니다
          </h1>
          <p class="intro-description">
            팀워크를 최우선으로 생각하는 프론트엔드 개발자입니다.<br>
            Vue.js와 Nuxt.js를 기반으로 현대적이고 반응형인 웹 애플리케이션을 개발합니다.
          </p>
          
          <div class="intro-highlights">
            <div class="highlight-item">
              <q-icon name="code" size="2rem" color="primary" />
              <div>
                <h3>16+ 년 경력</h3>
                <p>백엔드,프론트엔드 개발</p>
              </div>
            </div>
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
          <q-avatar size="300px" class="intro-avatar">
            <img src="~/assets/image/me.jpg" alt="Profile" />
          </q-avatar>
        </div>
      </div>
    </section>

    <!-- 경력 섹션 -->
    <section class="experience-section">
      <div class="section-header">
        <h2 class="section-title">경력 및 경험</h2>
        <p class="section-description">지금까지의 여정을 소개합니다</p>
      </div>
      
      <div class="experience-timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <AppCard>
              <template #header>
                <div class="experience-header">
                  <q-icon name="work" size="2rem" color="primary" />
                  <div>
                    <h3>시니어 프론트엔드 개발자</h3>
                    <p class="company">테크 스타트업 • 2022 - 현재</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>Vue.js와 Nuxt.js를 활용한 대규모 웹 애플리케이션 개발</li>
                <li>TypeScript 도입으로 코드 품질 및 개발 효율성 향상</li>
                <li>팀 리딩 및 신입 개발자 멘토링</li>
                <li>CI/CD 파이프라인 구축 및 배포 자동화</li>
              </ul>
            </AppCard>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <AppCard>
              <template #header>
                <div class="experience-header">
                  <q-icon name="business" size="2rem" color="secondary" />
                  <div>
                    <h3>프론트엔드 개발자</h3>
                    <p class="company">웹 에이전시 • 2021 - 2022</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>다양한 클라이언트 프로젝트 참여</li>
                <li>반응형 웹 디자인 및 모바일 최적화</li>
                <li>API 연동 및 상태 관리 구현</li>
                <li>성능 최적화 및 SEO 개선</li>
              </ul>
            </AppCard>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <AppCard>
              <template #header>
                <div class="experience-header">
                  <q-icon name="school" size="2rem" color="accent" />
                  <div>
                    <h3>컴퓨터공학과 졸업</h3>
                    <p class="company">한국대학교 • 2017 - 2021</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>컴퓨터공학 학사 학위 취득</li>
                <li>웹 개발 동아리 활동</li>
                <li>졸업 프로젝트로 Vue.js 기반 웹 애플리케이션 개발</li>
                <li>학점 3.8/4.5 (우수한 성적)</li>
              </ul>
            </AppCard>
          </div>
        </div>
      </div>
    </section>

    <!-- 연락처 섹션 -->
    <section class="contact-section">
      <div class="section-header">
        <h2 class="section-title">연락처</h2>
        <p class="section-description">프로젝트나 협업에 관심이 있으시다면 언제든 연락주세요</p>
      </div>
      
      <div class="contact-grid">
        <AppCard class="contact-card">
          <template #header>
            <q-icon name="email" size="2rem" color="primary" />
          </template>
          <h3>이메일</h3>
          <p>jinussmy@naver.com</p>
          <q-btn color="primary" outline size="sm">
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
          <q-btn color="secondary" outline size="sm">
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
// 포트폴리오 페이지 - 개발자 소개, 경력, 연락처 정보
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
  font-size: 1.25rem;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.6;
}

.intro-highlights {
  display: flex;
  flex-direction: column;
  gap: 24px;
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

// 경력 섹션
.experience-section {
  padding: 80px 24px;
  background: white;
}

.experience-timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #667eea, #764ba2);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 80px;
}

.timeline-marker {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.3);
}

.timeline-content {
  .app-card {
    margin: 0;
  }
}

.experience-header {
  display: flex;
  align-items: center;
  gap: 16px;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0 0 4px 0;
  }
  
  .company {
    color: #7f8c8d;
    margin: 0;
    font-size: 0.9rem;
  }
}

.experience-details {
  list-style: none;
  padding: 0;
  margin: 16px 0 0 0;
  
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
    color: #5a6c7d;
    line-height: 1.6;
    
    &::before {
      content: '▶';
      position: absolute;
      left: 0;
      color: #667eea;
      font-size: 0.8rem;
    }
  }
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