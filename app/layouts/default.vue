<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="profile-header">
      <q-toolbar class="profile-toolbar">
        <div class="profile-brand">
          <q-icon name="code" size="1.5rem" color="primary" class="q-mr-sm" />
          <span class="brand-text">김개발</span>
          <span class="brand-subtitle">Vue/Nuxt Developer</span>
        </div>
        
        <q-space />
        
        <div class="profile-nav">
          <q-btn 
            flat 
            label="홈" 
            to="/" 
            class="nav-btn"
            :class="{ 'nav-btn--active': $route.path === '/' }"
          />
          <q-btn 
            flat 
            label="소개" 
            to="/about" 
            class="nav-btn"
            :class="{ 'nav-btn--active': $route.path === '/about' }"
          />
          <q-btn 
            flat 
            icon="email" 
            class="contact-btn"
          >
            <q-tooltip>연락하기</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <slot></slot>
    </q-page-container>
    
    <q-footer class="profile-footer">
      <q-toolbar class="footer-toolbar">
        <div class="footer-content">
          <div class="footer-left">
            <p>&copy; 2024 김개발. All rights reserved.</p>
          </div>
          <div class="footer-right">
            <q-btn 
              flat 
              round 
              icon="github" 
              color="grey-6"
              size="sm"
              href="https://github.com/kimdev"
              target="_blank"
            >
              <q-tooltip>GitHub</q-tooltip>
            </q-btn>
            <q-btn 
              flat 
              round 
              icon="email" 
              color="grey-6"
              size="sm"
              href="mailto:kimdev@example.com"
            >
              <q-tooltip>이메일</q-tooltip>
            </q-btn>
            <q-btn 
              flat 
              round 
              icon="linkedin" 
              color="grey-6"
              size="sm"
              href="https://linkedin.com/in/kimdev"
              target="_blank"
            >
              <q-tooltip>LinkedIn</q-tooltip>
            </q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
// Vue/Nuxt 개발자 프로필 사이트 레이아웃
</script>

<style scoped lang="scss">
.profile-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.profile-toolbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.profile-brand {
  display: flex;
  align-items: center;
  
  .brand-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-right: 8px;
  }
  
  .brand-subtitle {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
  }
}

.profile-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-btn {
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white !important;
  }
  
  &--active {
    background: rgba(255, 255, 255, 0.2);
    color: white !important;
  }
}

.contact-btn {
  color: white !important;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-left: 16px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

.profile-footer {
  background: #2c3e50;
  color: white;
}

.footer-toolbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.footer-left {
  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
}

.footer-right {
  display: flex;
  gap: 8px;
  
  .q-btn {
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}

// 반응형 디자인
@media (max-width: 768px) {
  .profile-toolbar {
    padding: 0 16px;
  }
  
  .profile-brand {
    .brand-text {
      font-size: 1.25rem;
    }
    
    .brand-subtitle {
      display: none;
    }
  }
  
  .profile-nav {
    gap: 4px;
    
    .nav-btn {
      padding: 6px 12px;
      font-size: 0.9rem;
    }
  }
  
  .footer-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  
  .footer-toolbar {
    padding: 0 16px;
  }
}

@media (max-width: 480px) {
  .profile-nav {
    .nav-btn {
      padding: 4px 8px;
      font-size: 0.8rem;
    }
  }
  
  .profile-brand {
    .brand-text {
      font-size: 1.1rem;
    }
  }
}
</style>