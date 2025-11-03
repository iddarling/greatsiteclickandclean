<template>
  <main class="container">
    <section class="hero">
      <div class="hero__content">
        <h1>Вы нажимаете — мы вывозим</h1>
        <p class="lead">Быстрый заказ, понятные статусы, вежливые курьеры.</p>

        <div class="cta-row">
          <button class="btn">Попробовать бесплатно</button>
          <a class="btn btn--ghost" href="#how">Как это работает</a>
        </div>

        <div class="info-stripe">
          <div class="info-tile">
            <div class="icon">⏰</div>
            <div><b>15:00–17:00</b><span class="muted"> Ежедневно, без выходных</span></div>
          </div>
          <div class="info-tile">
            <div class="icon">🚚</div>
            <div><b>7 районов Алматы</b><span class="muted"> Алмалинский, Бостандыкский и др.</span></div>
          </div>
          <div class="info-tile">
            <div class="icon">🌱</div>
            <div><b>Экологично</b><span class="muted"> Раздельный сбор и аккуратность</span></div>
          </div>
        </div>
      </div>

      <div class="hero__media">
        <div style="font-size:120px;">🚛</div>
      </div>
    </section>

    <section id="how" class="glass">
      <h2>Как это работает</h2>
      <div class="steps">
        <div class="step">
          <div class="num">1</div>
          <b>Зарегистрируйтесь</b>
          <div class="muted">Клиент или курьер</div>
        </div>
        <div class="step">
          <div class="num">2</div>
          <b>Создайте заказ</b>
          <div class="muted">Адрес, район, время</div>
        </div>
        <div class="step">
          <div class="num">3</div>
          <b>Курьер в пути</b>
          <div class="muted">Отслеживайте статус</div>
        </div>
      </div>
    </section>

    <section class="cards">
      <article class="card">
        <div class="card__img">⏱️</div>
        <h3>Чёткие окна</h3>
        <p class="muted">Выбирайте слот — курьер приезжает вовремя.</p>
      </article>
      <article class="card">
        <div class="card__img">🧼</div>
        <h3>Аккуратно и чисто</h3>
        <p class="muted">Бережно работаем в подъездах и дворах.</p>
      </article>
      <article class="card">
        <div class="card__img">📦</div>
        <h3>Понятные статусы</h3>
        <p class="muted">Новый → В пути → Завершён.</p>
      </article>
    </section>
  </main>
</template>
