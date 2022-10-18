<script setup>
  import AppHeaderVue from "@/components/AppHeader.vue";
</script>

<template>
  <AppHeaderVue />
  <div class="m-auto max-w-7xl p-10">
    <router-view />
  </div>
</template>
