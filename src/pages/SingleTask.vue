<script setup>
import { useTasksStore } from "@/store/tasks.js";
import { onMounted, watchEffect, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const route = useRoute();
const router = useRouter();
const store = useTasksStore();
const task = ref(null);
const isUpdated = ref(false);
const anim = ref(false);

onMounted(() => {
  store.fetchTasks();
  store.fetchSingleTask(route.params.id);
  anim.value = true;
});

watchEffect(() => {
  const tasks = store.allTasks;
  const taskId = route.params.id;
  // task.value = tasks.find((task) => task.id == taskId);
  task.value = store.singleTask;
});

const back = () => {
  router.push("/tasks");
};

const deleteTask = async (taskId) => {
  try {
    store.deletePost(taskId);
    router.push("/tasks");
  } catch (error) {
    console.log("erreur lors de la suppression", err);
  }
};

const btnToUpdate = () => {
  isUpdated.value = !isUpdated.value;
};

const onSubmitForm = async () => {
  try {
    store.updatePost(task.value);
    router.push(`/tasks/${task.value.id}`);
    isUpdated.value = false;
  } catch (error) {
    console.log(error);
  }
};

const today = new Date().toISOString().split("T")[0];
</script>
<template>
  <Transition>
    <div v-if="anim">
      <div class="p-3 flex flex-col gap-3" v-if="task && !isUpdated">
        <h1 class="text-3xl text-amber-600">{{ task.title }}</h1>
        <p class="text-sm text-white">{{ task.description }}</p>
        <p class="text-slate-300">
          Date butoire :
          {{ format(new Date(task.startDate), "PPP", { locale: fr }) }}
        </p>
        <div class="flex gap-5">
          <span
            class="w-[80px] bg-orange-300 rounded-md p-2 text-center cursor-pointer"
            @click="back"
            >Retour</span
          >

          <span
            class="max-w-max bg-gray-500 rounded-md p-2 text-center cursor-pointer"
            @click="btnToUpdate"
            >Modifier</span
          >

          <span
            class="max-w-max bg-red-300 rounded-md p-2 text-center cursor-pointer"
            @click="deleteTask(task.id)"
            >Supprimer</span
          >
        </div>
      </div>
      <div
        v-else-if="isUpdated"
        class="absolute w-[500px] h-[350px] rounded-md shadow-md bg-slate-300 top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] z-30"
      >
        <form
          @submit.prevent="onSubmitForm"
          class="flex flex-col gap-2 p-5 h-full"
        >
          <div class="flex flex-col gap-1 h-1/4">
            <label for="title">Intitulé de la tâche</label>
            <input
              v-model="task.title"
              class="p-2 rounded-md outline-none border-none"
              type="text"
              name="title"
              id="title"
              placeholder="Intitulé de la tâche"
            />
          </div>
          <div class="flex flex-col gap-1 flex-1">
            <label for="description">Description</label>
            <textarea
              v-model="task.description"
              name=""
              id="description"
              class="p-3 rounded-md outline-none border-none"
            ></textarea>
          </div>
          <div class="flex flex-col gap-1 flex-1">
            <label for="date">Date</label>
            <input
              v-model="task.startDate"
              :min="today"
              type="date"
              name=""
              id="date"
              class="p-2 rounded-md outline-none border-none"
            />
          </div>
          <div class="flex w-full justify-center items-center gap-3">
            <span @click="btnToUpdate" class="cursor-pointer">Fermer</span>
            <input
              class="w-[120px] bg-amber-600 p-2 rounded-md shadow-sm cursor-pointer font-bold text-slate-50"
              type="submit"
              value="Somettre"
            />
          </div>
        </form>
      </div>
      <div v-else><p>Chargement...</p></div>
    </div>
  </Transition>
</template>

<style scoped>
/*
  Les animations d'entrée et de sortie peuvent utiliser différentes
  durées et fonctions de temporisation.
*/
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
