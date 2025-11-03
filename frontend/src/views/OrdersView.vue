<script setup>
import { ref, onMounted } from 'vue'
import { getOrders, createOrder, deleteOrder } from '../api/orders'

const orders = ref([])
const newOrder = ref({ clientName: '', address: '', district: '', timeSlot: '' })

const loadOrders = async () => orders.value = (await getOrders()).data
const addOrder = async () => {
  await createOrder(newOrder.value)
  newOrder.value = { clientName: '', address: '', district: '', timeSlot: '' }
  await loadOrders()
}
const removeOrder = async (id) => { await deleteOrder(id); await loadOrders() }

onMounted(loadOrders)
</script>

<template>
  <div class="p-4">
    <h1>Заказы</h1>
    <form @submit.prevent="addOrder" class="flex gap-2 mb-4">
      <input v-model="newOrder.clientName" placeholder="Имя клиента" />
      <input v-model="newOrder.address" placeholder="Адрес" />
      <input v-model="newOrder.district" placeholder="Район" />
      <input v-model="newOrder.timeSlot" placeholder="Время" />
      <button>Добавить</button>
    </form>

    <table border="1" cellpadding="8">
      <tr><th>Клиент</th><th>Адрес</th><th>Район</th><th>Время</th><th>Действие</th></tr>
      <tr v-for="o in orders" :key="o._id">
        <td>{{ o.clientName }}</td>
        <td>{{ o.address }}</td>
        <td>{{ o.district }}</td>
        <td>{{ o.timeSlot }}</td>
        <td><button @click="removeOrder(o._id)">❌</button></td>
      </tr>
    </table>
  </div>
</template>
