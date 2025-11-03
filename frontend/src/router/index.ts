import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrdersView from '../views/OrdersView.vue'
import ClientView from '../views/ClientView.vue'
import CourierView from '../views/CourierView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/orders', name: 'orders', component: OrdersView },
    { path: '/client', name: 'client', component: ClientView },
    { path: "/courier", component: CourierView },
  ]
})

export default router
