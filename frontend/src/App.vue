<template>
  <div class>
    <HeaderBar />
    <RouterView />
    <MobileTabbar />
  </div>
</template>

<script setup>

import HeaderBar from "./components/HeaderBar.vue";
import MobileTabbar from "./components/MobileTabbar.vue";
</script>

<style>
body {
  margin: 0;
  font-family: "Inter", system-ui, sans-serif;
  background: #f9fff9;
  color: #1d1d1d;
}
</style>
