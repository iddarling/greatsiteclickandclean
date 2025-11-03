<template>
  <main class="container">
    

    <section class="hero">
      <div>
        <h1>Привет, курьер!</h1>
        <p class="muted">Бери свободные заявки и закрывай выполненные.</p>
      </div>
      <div class="hero__media">
        <div style="font-size:120px;">🚚</div>
      </div>
    </section>

    <section class="glass1" style="margin-top:16px;">
      <h2>Твои заказы</h2>
      <div class="cards" id="courier-my">
        <!-- Здесь позже будут заказы курьера -->
      </div>
    </section>

    <section class="glass" style="margin-top:16px;">
      <h2>Свободные заказы</h2>
      <div class="cards" id="courier-free">
        <!-- Здесь позже будут свободные заказы -->
      </div>
    </section>

    <nav class="mobile-tabbar">
      <RouterLink to="/">🏠<span>Главная</span></RouterLink>
      <RouterLink to="/orders">📦<span>Заказы</span></RouterLink>
      <RouterLink to="/client">👤<span>Клиент</span></RouterLink>
      <RouterLink to="/courier">🛵<span>Курьер</span></RouterLink>
    </nav>
  </main>
</template>

<script setup>
// Пока логика не подключена
</script>

<style scoped>
/* Используются глобальные стили из style.css */
</style>
