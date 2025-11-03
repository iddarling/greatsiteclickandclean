<template>
  <header class="container header">
    <div class="brand">
      <div style="width:40px;height:40px;border-radius:12px;background:#f2fff8;display:grid;place-items:center;">
        <img src="/src/assets/logo.jpeg" alt="Logo" style="max-width:100%;max-height:100%;border-radius:50%;" />
      </div>
      <span class="brand-title">Click&Clean</span>
    </div>

    <nav class="nav">
      <RouterLink to="/">Главная</RouterLink>
      <a href="#how">Как это работает</a>
      <RouterLink to="/orders">Заказы</RouterLink>
    </nav>

    <div class="header-actions">
      <button class="btn btn--ghost">Вход / Регистрация</button>
      <button class="btn">В кабинет</button>
    </div>
  </header>
</template>
