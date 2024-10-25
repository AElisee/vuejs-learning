<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useStore } from "@/store/store.js";

// const articles = ref([
//   { id: 1, title: "My journey with Vue", slot: true },
//   { id: 2, title: "Blogging with Vue", slot: false },
//   { id: 3, title: "Why Vue is so fun", slot: true },
// ]);

const store = useStore();

const route = useRoute();
const router = useRouter();

const blogId = parseInt(route.params.id);
const blog = store.state.articles.find(
  (article) => parseInt(article.id) == parseInt(blogId)
);

const deleteBlog = () => {
  store.deleteArticle(blogId);
  router.push("/blogs");
};
</script>

<template>
  <Transition>
    <div>
      <p>Blog ayant l'id : {{ blogId }}</p>
      <h3>{{ blog.title }}</h3>
      <button @click.prevent="deleteBlog">Supprimer</button>
    </div>
  </Transition>
</template>
