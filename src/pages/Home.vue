<script setup lang="ts">
import { ref } from 'vue';
import {useI18n} from "vue-i18n";

const noticeSection = ref<HTMLElement | null>(null);
const { t } = useI18n()
</script>

<template>
  <div class="home">

    <div class="hero">
      <h1 class="hero-title">{{ t("hero-title") }} 👋</h1>
      <p class="hero-subtitle">{{ t("hero-subtitle") }}</p>
    </div>

    <section class="notice" ref="noticeSection">
      <h2>{{ t("notice") }}</h2>
      <ul>
        <li>📢{{ t("n1") }} </li>
        <li>✨{{ t("n2") }} </li>
      </ul>
    </section>

  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 3rem 1rem 4rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  /* 动态渐变背景 */
  background: linear-gradient(270deg, #f9e6ff, #a0d8ef, #4fa3d8, #f9e6ff);
  background-size: 800% 800%;
  animation: gradientMove 30s ease infinite;
}

/* 光晕漂浮效果 */
.home::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  animation: floatGlow 25s linear infinite;
  pointer-events: none;
  z-index: 0;
}

/* 背景渐变动画 */
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 光晕漂浮动画 */
@keyframes floatGlow {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(30px, 20px) rotate(180deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}


.hero {
  max-width: 700px;
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255 255 255 / 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.15);
  margin-bottom: 4rem;
  user-select: none;
  transition: transform 0.3s ease;
}
.hero:hover {
  transform: scale(1.03);
}

.hero-title {
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(45, 226, 190, 0.6);
}

.hero-subtitle {
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: #e0f7f5;
  user-select: text;
}

.btn-primary {
  background: #fff;
  color: #409eff;
  font-weight: 700;
  padding: 0.8rem 2.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 6px 12px rgb(64 158 255 / 0.5);
  transition: background-color 0.3s ease, color 0.3s ease;
  user-select: none;
}
.btn-primary:hover {
  background: #2de2be;
  color: #fff;
  box-shadow: 0 8px 16px rgb(45 226 190 / 0.7);
}

.notice {
  max-width: 700px;
  background: #ddd;
  color: #333;
  border-radius: 16px;
  padding: 2rem 3rem;
  box-shadow: 0 6px 20px rgb(0 0 0 / 0.1);
  user-select: none;
  font-weight: 600;
}

.notice h2 {
  margin-bottom: 1.5rem;
  color: #409eff;
  user-select: text;
  font-size: 2rem;
}

.notice ul {
  list-style: inside disc;
  line-height: 1.6;
  font-size: 1.1rem;
  padding-left: 0;
}

.notice li {
  margin-bottom: 1rem;
}
</style>
