<script setup>
import Blogs from "@/components/Blogs.vue";
import { useStore } from "@/store/store.js";
import { ref } from "vue";

const name = ref("Blogs");
const store = useStore();
const articles = store.state.articles;

const newTitle = ref("");
const newSlot = ref(false);
const addNewArticle = () => {
  const newArticle = {
    title: newTitle.value,
    slot: newSlot.value,
  };

  // Appel de la fonction `addArticle` du store
  if (newTitle.value) {
    store.addArticle(newArticle);
  }

  // Remettre les valeurs à zéro après l'ajout
  newTitle.value = "";
  newSlot.value = false;
};
</script>
<template>
  <div class="blog-page">
    <h1 class="text-4xl font-bold text-amber-300">
      Bienvenue sur la page {{ name }}
    </h1>
    <div class="blogs">
      <Blogs v-for="post in articles" :key="post.id" :item="post">
        <p v-if="post.slot">completed</p>
      </Blogs>
    </div>

    <div class="add-blog w-full flex justify-center">
      <div>
        <h2 class="text-3xl text-amber-300 font-semibold mb-5">
          Ajouter un nouveau blog
        </h2>
        <form action="" class="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Titre"
            v-model="newTitle"
            class="w-[300px] px-2 py-2"
          />
          <label for="">
            <input type="checkbox" class="" v-model="newSlot" /> Complète
          </label>
          <button
            class="px-3 py-1 bg-amber-400 rounded-md"
            @click.prevent="addNewArticle"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
