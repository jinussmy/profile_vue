<template>
  <q-card class="app-card">
    <q-card-section v-if="$slots.header" class="app-card__header">
      <slot name="header"></slot>
    </q-card-section>

    <q-card-section class="app-card__body">
      <slot></slot>
    </q-card-section>

    <q-separator v-if="$slots.footer" class="app-card__separator" />

    <q-card-actions v-if="$slots.footer" class="app-card__footer">
      <slot name="footer"></slot>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
// 범용 카드 컴포넌트 - 스킬, 경험, 프로젝트 등 다양한 용도로 사용 가능
</script>

<style scoped lang="scss">
.app-card {
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 8px 30px rgba(0, 0, 0, 0.12),
      0 2px 8px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
}

.app-card__header {
  padding: 32px 32px 0 32px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.app-card__body {
  padding: 32px;
  background: white;
}

.app-card__separator {
  margin: 0 24px;
  background: linear-gradient(90deg, transparent 0%, #e0e0e0 50%, transparent 100%);
  height: 1px;
}

.app-card__footer {
  padding: 20px 32px 32px 32px;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%);
  backdrop-filter: blur(10px);
}

// 다크 모드 지원
@media (prefers-color-scheme: dark) {
  .app-card {
    background: linear-gradient(145deg, #2d3748 0%, #1a202c 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    .app-card__header {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .app-card__body {
      background: #2d3748;
      color: #e2e8f0;
    }
    
    .app-card__footer {
      background: linear-gradient(135deg, rgba(45, 55, 72, 0.8) 0%, rgba(26, 32, 44, 0.8) 100%);
    }
  }
}
</style>