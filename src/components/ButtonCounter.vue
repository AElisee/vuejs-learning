<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="btn-counter">
    <button @click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>
