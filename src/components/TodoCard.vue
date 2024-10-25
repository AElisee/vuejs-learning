<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";

const { task } = defineProps(["task"]);
</script>

<template>
  <RouterLink
    :to="`/tasks/${task.id}`"
    class="todo-card flex flex-col gap-1 p-2 w-[295px] min-w-[295px] h-[100px] rounded-md border border-amber-700"
  >
    <div>
      <span class="text-amber-100">Intitulé</span>
      <h3 class="text-xl text-white">{{ task.title }}</h3>
    </div>
    <div class="text-xs text-amber-600">non terminé</div>
  </RouterLink>
</template>
