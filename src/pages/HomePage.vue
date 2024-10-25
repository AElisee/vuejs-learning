<script setup>
import ButtonCounter from "@/components/ButtonCounter.vue";
import TodoContainer from "@/components/TodoContainer.vue";
import { useJsonPlaceholderStore } from "@/store/placeholder.js";
import { computed, ref, reactive, onMounted } from "vue";
import Text from "@/components/Text.vue";
import Nombre from "@/components/Nombre.vue";

const tabs = {
  Text: Text,
  Nombre: Nombre,
};

const count = ref(0);
// let isNan = ref(true);
// const isActive = ref(true);
const message = ref(0);
const now = computed(() => Date.now());
const activeComponent = ref("Nombre");

const myObject = reactive({
  title: "How to do lists in Vue",
  author: "Jane Doe",
  publishedAt: "2016-04-10",
});

const store = useJsonPlaceholderStore();

onMounted(() => {
  store.fetchPosts();
});

const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};

const greet = (event) => {
  alert("Bonjour !");

  if (event) {
    console.log(event);
  }
};
</script>

<template>
  <div class="container">
    <TodoContainer />
    <ButtonCounter />
  </div>

  <div class="setup">
    <p :id="count > 5 ? 'string' : 'number'">commpteur : {{ count }}</p>
    <button @click="decrement" class="active">-</button>
    <button v-on:click="increment" class="active">+</button>
    <p>{{ now }}</p>

    <div>
      <ul v-for="(index, value) of myObject" :key="index">
        {{
          value
        }}
      </ul>
    </div>

    <button @click="greet">click</button>

    <!-- FORMULAIRE -->
    <p>Votre Age {{ message }}</p>
    <input
      type="number"
      min="0"
      max="25"
      v-model.number="message"
      placeholder=""
      style="width: 100px; padding: 5px"
    />

    <h3 class="text-2xl">Followers : {{ store.followers }}</h3>
    <button @click="store.addFollower">s'abonner</button>

    <!-- rendu dynamique des composants -->
    <div>
      <div class="flex gap-4">
        <button @click="activeComponent = 'Text'">Afficher Component A</button>
        <button @click="activeComponent = 'Nombre'">
          Afficher Composant B
        </button>
      </div>
      <component :is="tabs[activeComponent]" />
    </div>
  </div>
</template>

<style>
.container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
#string {
  color: rgb(6, 164, 29);
}

.active {
  padding: 0 25px;
  border: 1px solid gray;
  font-size: 1.2rem;
  border-radius: 5px;
  margin: 10px;
}

.blogs {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
