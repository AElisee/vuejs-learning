<script setup>
import { useTasksStore } from "@/store/tasks.js";
import TodoCard from "./TodoCard.vue";
import { onMounted, watchEffect } from "vue";

const store = useTasksStore();

onMounted(() => {
  store.fetchTasks();
});

// watchEffect(() => {
//   console.log(store.allTasks);
// });
</script>

<template>
  <ul class="todo-ctn flex justify-center gap-4 flex-wrap">
    <TransitionGroup>
      <TodoCard
        v-for="task in store.allTasks"
        :key="task.id"
        :task="task"
      ></TodoCard>
    </TransitionGroup>
  </ul>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.v-leave-active {
  position: absolute;
}
</style>
