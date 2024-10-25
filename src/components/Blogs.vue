<script setup>
import {  inject } from "vue";

const { item } = defineProps(["item"]);
const nom = inject("nom");
</script>

<template>
  <RouterLink :to="`/blogs/${item.id}`" class="blog-card">
    <h2 class="text-2xl">{{ item.id }} - {{ item.title }}</h2>
    <slot>no completed</slot>
    <p>auteur : {{ nom }}</p>
  </RouterLink>
</template>

<style>
.blog-card {
  border: 1px solid rgb(215, 215, 243);
  padding: 20px;
  border-radius: 15px;
}
</style>
