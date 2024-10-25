<script setup>
import TodoContainer from "@/components/TodoContainer.vue";
import { useTasksStore } from "@/store/tasks.js";
import axios from "axios";
import { computed, onMounted, ref, watchEffect } from "vue";

const apiUrl = "http://localhost:5000/tasks";
const store = useTasksStore();
const tasks = ref(null);

onMounted(() => {
  store.fetchTasks();
});

watchEffect(() => {
  tasks.value = store.allTasks;
});

const isActiveModal = ref(false);
const title = ref("");
const date = ref("");
const description = ref("");

const onSubmitForm = async () => {
  if (!title.value || !date.value) {
    alert("Veuillez renseigner les champs obligatoires !");
    return;
  } else {
    const newTask = {
      title: title.value,
      startDate: date.value,
      description: description.value,
      status: 1,
    };

    try {
      store.addPost(newTask);

      title.value = "";
      date.value = "";
      description.value = "";

      isActiveModal.value = false;
    } catch (error) {
      console.log("Erreur survenue lors de l'enrgistrement !", error);
    }
  }
};

const btnActiveModalClick = () => {
  isActiveModal.value = !isActiveModal.value;
};
</script>
<template>
  <div class="todo p-5">
    <div
      class="p-2 my-3 bg-amber-600 max-w-max rounded-md text-slate-300 font-semibold hover:bg-amber-500"
    >
      <button @click="btnActiveModalClick">Ajoter nouvelle tâche</button>
    </div>
    <Transition>
      <div
        v-if="isActiveModal"
        class="absolute w-[500px] h-[350px] rounded-md shadow-md bg-slate-300 top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
      >
        <form
          @submit.prevent="onSubmitForm"
          class="flex flex-col gap-2 p-5 h-full"
        >
          <div class="flex flex-col gap-1 h-1/4">
            <label for="title">Intitulé de la tâche</label>
            <input
              v-model="title"
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
              v-model="description"
              name=""
              id="description"
              class="p-3 rounded-md outline-none border-none"
            ></textarea>
          </div>
          <div class="flex flex-col gap-1 flex-1">
            <label for="date">Date</label>
            <input
              v-model="date"
              type="date"
              name=""
              id="date"
              class="p-2 rounded-md outline-none border-none"
            />
          </div>
          <div class="flex w-full justify-center items-center gap-3">
            <span @click="btnActiveModalClick" class="cursor-pointer"
              >Fermer</span
            >
            <input
              class="w-[120px] bg-amber-600 p-2 rounded-md shadow-sm cursor-pointer font-bold text-slate-50"
              type="submit"
              value="Somettre"
            />
          </div>
        </form>
      </div>
    </Transition>
    <div v-if="tasks.length <= 0">
      <p class="text-2xl text-slate-300 text-center w-full">
        Aucune tâche enregistrée
      </p>
    </div>
    <TodoContainer />
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
