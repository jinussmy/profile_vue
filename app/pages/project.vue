<template>
  <q-page class="portfolio-page">
    <!-- 소개 섹션 -->
    <section class="intro-section">
      <div class="intro-content">
        <div class="intro-text">
          <!-- <h1 class="intro-title">
            안녕하세요, <span class="gradient-text">남진우</span>입니다
          </h1>-->
          <div class="intro-description">
             <span class="gradient-text">팀워크</span>를 중시하는 개발자입니다.
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
                  <q-icon name="school" size="2rem" color="accent" />
                  <div>
                    <h3>미래엔 엠티처</h3>
                    <p class="company">출판사 • 2025 - 현재</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>출판사 사이트 개발 및 유지보수</li>
                <li>java, mariaDB, springBoot, gradle, git, thymeleaf</li>
                <li>역할 : PL 백엔드,프런트엔드 개발 유지보수 수행</li>
                <li>포인트 시스템 신규 개발 및 기타 개발</li>
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
                  <q-icon name="wifi" size="2rem" color="red" />
                  <div>
                    <h3>KT GateWay</h3>
                    <p class="company">KT • 2024 - 2025</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>삼성 TV 앱을 위한 KT GateWay 프록시 서버 확장 개발</li>
                <li>java, mysql, springBoot, gradle, apach</li>
                <li>역할 : PL 백엔드 개발 수행, 운영관리 지원</li>
                <li>성능 최적화 및 트래픽, 비동기, 이중화 및 프록시 관련 설정</li>
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
                  <q-icon name="local_atm" size="2rem" color="blue" />
                  <div>
                    <h3>신한홈뱅크</h3>
                    <p class="company">신한은행 • 2024</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>신한홈뱅크 앱을 위한 API, 운영 관리, 배치, 통계 개발</li>
                <li>java, oralce, springBoot, maven, vue3</li>
                <li>역할 : PL 백엔드, 프런트엔드 개발 수행 , 운영 관리 개발</li>
                <li>설계 분석, API, 운영 관리, 배치, 통계 시스템 구축</li>
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
                  <q-icon name="business" size="2rem" color="accent" />
                  <div>
                    <h3>솔브레인 통합 포털</h3>
                    <p class="company">솔브레인 • 2023</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>솔브레인 탄소배출 시스템 통합 포털 개발</li>
                <li>java, oralce, 전자전부프레임워크, maven, ibsheet</li>
                <li>역할 : PL 백엔드, 프론트엔드 개발 수행</li>
                <li>탄소 배출 시스템 구성 및 로직 분석 개발, 통계 시스템 구축</li>
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
                  <q-icon name="power_settings_new" size="2rem" color="secondary" />
                  <div>
                    <h3>롯데환경에너지 통합 시스템</h3>
                    <p class="company">롯데정보통신 • 2022</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>롯데 탄소배출 시스템 통합 포털 개발</li>
                <li>java, oralce, 전자전부프레임워크, maven</li>
                <li>역할 : PL 백엔드 개발 수행</li>
                <li>탄소 배출 시스템 구성 및 로직 분석 개발, 통계 시스템</li>
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
                  <q-icon name="wb_sunny" size="2rem" color="light-blue" />
                  <div>
                    <h3>파인웨더 기상관측 시스템 </h3>
                    <p class="company">한국천문연구원외. • 2016~2021</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>서해대교 대교 관측 시스템 개발</li>
                <li>태안,세평 VTS 도로 관측시스템 개발</li>
                <li>공주 한국도로공사 관측 시스템 개발</li>
                <li>부산시설공단 광안대교 시정관측 프로그램 개발</li>
                <li>한국천문연구원, 레인보우로보틱스와 몽골,모로코,미국,이스라엘 4개국 출장</li>
                <li>java, mysql, spring, maven</li>
                <li>관측 센서들의 데이터를 데이터 로거에서 소켓으로 전달 받아 통합 모니터링 시스템 개발</li>
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
                  <q-icon name="solar_power" size="2rem" color="brown" />
                  <div>
                    <h3>지비엠아이엔씨 기상솔루션</h3>
                    <p class="company">지비엠아이엔씨 • 2014~2016</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>제주공항 LLWAS(저층윈드시어 알람시스템)설치, 모니터링 개발</li>
                <li>포항공항 AMOS(자동기상관측장비시스템)설치</li>
                <li>153웨더 날씨 시스템 개발</li>
                <li>java, mysql, spring, batch, socket, android, flex</li>
                <li>공공기관 프로젝트 PM 및 시스템 출장 개발</li>
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
                  <q-icon name="wifi" size="2rem" color="red" />
                  <div>
                    <h3> T 서비스  </h3>
                    <p class="company">SK • 2013</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>SK 내장 앱 통합 서비스를 위한 SK Legacy System연동 API 개발</li>
                <li>java, spring, Legacy System, oracle, android, linux</li>
                <li>역할 : PL 백엔드</li>
                <li>API를 미리 가비지 데이터로 구현 배포하여 단말 개발자들의 편의 제공</li>
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
                  <q-icon name="wifi" size="2rem" color="red" />
                  <div>
                    <h3> 이매진 쇼핑 </h3>
                    <p class="company">SKP • 2012</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>이매진 쇼핑, sns 연동을 위한 안드로이드 앱 개발</li>
                <li>android, java, spring</li>
                <li>PL 백엔드, 프론트 엔드</li>
                <li>소셜 SNS 연동 개발,쇼핑몰 앱 개발, 서버 API 개발</li>
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
                  <q-icon name="developer_board" size="2rem" color="primary" />
                  <div>
                    <h3>타이밍 체커</h3>
                    <p class="company">삼성전자  • 2009~2010</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>타이밍체커 3차 : 휴대폰 메모리 추가 모델 적용 자동화 웹, 출력 자동화 시스템</li>
                <li>타이밍체커 2차 : 휴대폰 메모리 시간 체크 모델분석 자동화 프로그램 개발</li>
                <li>java, jsp, struts, oralce, flex</li>
                <li>메모리 적용 자동화 모듈개발, 출력 자동화, 어도비 flex활용</li>
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
                  <q-icon name="energy_savings_leaf" size="2rem" color="light-green" />
                  <div>
                    <h3>생활 폐기물, 수송 인벤토리</h3>
                    <p class="company">에코 프론티어  • 2008~2009</p>
                  </div>
                </div>
              </template>
              <ul class="experience-details">
                <li>생활 폐기물 : 전국 생활폐기물 검색, 그래프 , 시스템 구축</li>
                <li>수송 인벤토리 : 탄소배출 계산 및 검색, 그래프 표출 시스템</li>
                <li>java, jsp, ibsheet, flex, chartFx, oracle</li>
                <li>전국 폐기물 데이터 필터 API 와 화면 구축,탄소배출 로직 처리</li>
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
        <p class="section-description">질문 사항이 있으시다면 언제든 연락주세요</p>
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