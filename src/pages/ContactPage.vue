<script setup>
import { ref } from "vue";

const name = ref("contact");
</script>
<template>
  <div class="contact-page">
    <h1>Bienvenue sur la page de {{ name }}</h1>
  </div>
</template>
