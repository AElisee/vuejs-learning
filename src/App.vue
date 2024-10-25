<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import { provide } from "vue";

provide("nom", "Kouassi");
</script>

<template>
  <Transition>
    <div>
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active {
  transition: all 0.3s cubic-bezier(0.04, 0.1, 1, 0.99);
}

.v-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
