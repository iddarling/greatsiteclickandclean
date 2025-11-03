<script setup>
import { ref, computed, onMounted } from 'vue'
import { getOrders } from '../api/orders'

const orders = ref([])
const activeFilter = ref('all')

const filteredOrders = computed(() => {
  if (activeFilter.value === 'all') return orders.value
  return orders.value.filter(order => order.status === activeFilter.value)
})

const getStatusText = (status) => {
  switch (status) {
    case 'new': return 'Новый'
    case 'active': return 'В пути'
    case 'done': return 'Завершён'
    default: return status
  }
}

const loadOrders = async () => {
  try {
    const response = await getOrders()
    orders.value = response.data
  } catch (error) {
    console.error('Error loading orders:', error)
  }
}

onMounted(loadOrders)
</script>

<template>
  <main class="container">
    <section class="glass">
      <h1>Список заказов</h1>
      <p class="muted">Все заявки в одном месте. Фильтры по статусу — ниже.</p>
      
      <div class="filters">
        <button 
          class="chip" 
          :class="{ active: activeFilter === 'all' }"
          @click="activeFilter = 'all'"
        >Все</button>
        <button 
          class="chip" 
          :class="{ active: activeFilter === 'new' }"
          @click="activeFilter = 'new'"
        >Новые</button>
        <button 
          class="chip" 
          :class="{ active: activeFilter === 'active' }"
          @click="activeFilter = 'active'"
        >В пути</button>
        <button 
          class="chip" 
          :class="{ active: activeFilter === 'done' }"
          @click="activeFilter = 'done'"
        >Завершённые</button>
      </div>

      <!-- Мобильная версия -->
      <div class="orders-mobile">
        <div v-for="order in filteredOrders" 
             :key="order._id" 
             class="orders-mobile__item order-card">
          <h4>#{{ order._id }} 
            <span :class="['status', 'status--' + order.status]">
              {{ getStatusText(order.status) }}
            </span>
          </h4>
          <div class="order-meta">
            <div><b>Клиент:</b> {{ order.clientName }}</div>
            <div><b>Адрес:</b> {{ order.address }}</div>
            <div><b>Район:</b> {{ order.district }}</div>
            <div><b>Время:</b> {{ order.timeSlot }}</div>
            <div><b>Курьер:</b> {{ order.courier || '—' }}</div>
          </div>
        </div>
      </div>

      <!-- Десктопная версия -->
      <table class="orders-table" aria-label="Таблица заказов">
        <thead>
          <tr>
            <th>ID</th>
            <th>Клиент</th>
            <th>Адрес</th>
            <th>Район</th>
            <th>Статус</th>
            <th>Когда</th>
            <th>Курьер</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in filteredOrders" :key="order._id">
            <td>#{{ order._id }}</td>
            <td>{{ order.clientName }}</td>
            <td>{{ order.address }}</td>
            <td>{{ order.district }}</td>
            <td>
              <span :class="['status', 'status--' + order.status]">
                {{ getStatusText(order.status) }}
              </span>
            </td>
            <td>{{ order.timeSlot }}</td>
            <td>{{ order.courier || '—' }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<style>
.container {
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.glass {
  background: var(--surface);
  border-radius: var(--radius-16);
  padding: 24px;
  box-shadow: var(--shadow-1);
  margin-bottom: 1200px;
}

/* .container {
  padding: 0 16px;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}

.glass {
  background: var(--surface);
  border-radius: var(--radius-16);
  padding: 24px;
  box-shadow: var(--shadow-1);
  margin-top: 0;
} */



.glass h1 {
  font-size: 28px;
  margin: 0 0 8px;
  font-weight: 700;
}

.filters {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.chip {
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid rgba(0, 0, 0, .08);
  box-shadow: var(--shadow-1);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
}

.chip:hover {
  background: #f2fff8;
}

.chip.active {
  background: var(--primary);
  color: white;
  border-color: transparent;
}

.orders-table {
  width: 100%;
  border-collapse: collapse;
  font-size: .95rem;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 20px;
}

.orders-table th,
.orders-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, .06);
}

.orders-table th {
  font-weight: 700;
  background: linear-gradient(180deg, #f9fffb, #eefcf4);
  color: var(--ink);
}

.orders-table td {
  background: var(--surface);
}

.status {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: 600;
  font-size: .85rem;
  border: 1px solid rgba(0, 0, 0, .06);
}

.status--new {
  background: #d8fbe8;
  color: #0b7a49;
  border-color: #b7efd6;
}

.status--active {
  background: #fff4cf;
  color: #a97400;
  border-color: #f2dea0;
}

.status--done {
  background: #ebedf0;
  color: #354052;
  border-color: #d5d9df;
}

.orders-mobile {
  display: none;
}

.order-card {
  padding: 16px;
  border-radius: var(--radius-16);
  background: var(--surface);
  border: 1px solid rgba(0, 0, 0, .05);
  box-shadow: var(--shadow-1);
  margin-bottom: 16px;
}

.order-card h4 {
  margin: 0 0 12px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.order-meta {
  font-size: .95rem;
  color: var(--ink);
  display: grid;
  gap: 8px;
}

.order-meta b {
  font-weight: 600;
  color: var(--muted);
}

@media (max-width: 768px) {
  .orders-table {
    display: none;
  }
  
  .orders-mobile {
    display: block;
    margin-top: 20px;
  }

  .glass {
    padding: 16px;
  }
}
</style>
