<template>
  <q-card class="project-card">
    <div class="project-card__image-container">
      <img 
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop" 
        class="project-card__image"
        alt="프로젝트 이미지"
      />
      <div class="project-card__overlay">
        <div class="project-card__tech-stack">
          <q-chip size="sm" color="primary" text-color="white">Vue.js</q-chip>
          <q-chip size="sm" color="secondary" text-color="white">Nuxt.js</q-chip>
        </div>
        <q-btn 
          icon="open_in_new" 
          color="white" 
          round 
          size="lg"
          class="project-card__view-btn"
        />
      </div>
    </div>

    <q-card-section class="project-card__content">
      <div class="text-h6 project-card__title">E-Commerce Platform</div>
      <div class="text-subtitle2 project-card__description">
        Vue.js와 Nuxt.js를 활용한 현대적인 전자상거래 플랫폼
      </div>
      
      <div class="project-card__meta">
        <div class="project-card__date">
          <q-icon name="calendar_month" />
          <span>2024.01</span>
        </div>
        <div class="project-card__status">
          <q-icon name="check_circle" color="green" />
          <span>완료</span>
        </div>
      </div>
      
      <div class="project-card__actions">
        <q-btn 
          flat 
          color="primary" 
          size="sm"
          icon="code"
          label="코드 보기"
        />
        <q-btn 
          flat 
          color="secondary" 
          size="sm"
          icon="visibility"
          label="라이브 데모"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.project-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    
    .project-card__overlay {
      opacity: 1;
    }
    
    .project-card__image {
      transform: scale(1.05);
    }
  }
}

.project-card__image-container {
  position: relative;
  overflow: hidden;
  height: 200px;
  flex-shrink: 0;
}

.project-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card__tech-stack {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.project-card__view-btn {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9) !important;
  color: #1976d2 !important;
  margin-top: auto;
}

.project-card__content {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-card__title {
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.3;
}

.project-card__description {
  color: #7f8c8d;
  margin-bottom: 16px;
  line-height: 1.5;
  flex: 1;
}

.project-card__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ecf0f1;
}

.project-card__date,
.project-card__status {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #7f8c8d;
  font-size: 14px;
}

.project-card__status {
  color: #10b981;
  font-weight: 500;
}

.project-card__actions {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  margin-top: auto;
  
  .q-btn {
    flex: 1;
    font-size: 12px;
  }
}

// 반응형 디자인
@media (max-width: 768px) {
  .project-card__actions {
    flex-direction: column;
    gap: 8px;
    
    .q-btn {
      width: 100%;
    }
  }
  
  .project-card__meta {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
}
</style>