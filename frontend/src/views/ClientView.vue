<template>
  <main class="container">
    <section class="hero">
      <div>
        <h1>Здравствуйте!</h1>
        <p class="muted">
          Оформляйте заявки и следите за статусами. Всё просто.
        </p>
      </div>
      <div class="hero__media">
        <div style="font-size:120px;">🧺</div>
      </div>
    </section>

    <section class="glass" style="margin-top:16px;">
      <div class="info-stripe">
        <div class="info-tile">
          <div class="icon">⏰</div>
          <div>
            <b>Окно 15:00–17:00</b>
            <span class="muted">Можно уточнить в комментарии</span>
          </div>
        </div>
        <div class="info-tile">
          <div class="icon">📍</div>
          <div>
            <b>Районы</b>
            <span class="muted">Алмалинский, Бостандыкский и др.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="cards" id="client-orders">
      <!-- Здесь позже появится список заказов -->
    </section>

    <!-- Modal create -->
    <div class="modal-overlay" id="create-modal" aria-hidden="true">
      <div class="modal glass">
        <h2>Новый заказ</h2>
        <form id="create-form" class="form">
          <div class="row">
            <label>Адрес</label>
            <input name="address" placeholder="г. Алматы, ул. ..." required />
          </div>

          <div class="row">
            <label>Район</label>
            <select name="district" required>
              <option value="">Выберите район</option>
              <option>Бостандыкский</option>
              <option>Алмалинский</option>
              <option>Медеуский</option>
              <option>Ауэзовский</option>
              <option>Наурызбайский</option>
              <option>Турксибский</option>
              <option>Алатауский</option>
              <option>Жетысуский</option>
            </select>
          </div>

          <div class="row">
            <label>Желаемое время</label>
            <input name="when" placeholder="Сегодня 16:00–17:00" />
          </div>

          <div class="form-actions">
            <button class="btn" type="submit">Создать</button>
            <button class="btn btn--ghost" type="button">Отмена</button>
          </div>
        </form>
      </div>
    </div>

    <button class="fab" title="Создать заявку">＋</button>

    <nav class="mobile-tabbar">
      <RouterLink to="/">🏠<span>Главная</span></RouterLink>
      <RouterLink to="/orders">📦<span>Заказы</span></RouterLink>
      <RouterLink to="/client">👤<span>Клиент</span></RouterLink>
      <RouterLink to="/courier">🛵<span>Курьер</span></RouterLink>
    </nav>
  </main>
</template>

<script setup>
// Пока без логики — позже сюда можно добавить реактивные данные и обработчики
</script>

<style scoped>
/* Использует глобальные стили из style.css */
</style>
