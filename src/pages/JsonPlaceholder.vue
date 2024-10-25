<script setup>
import { onMounted, watchEffect } from "vue";
// import axios from "axios";
import { useJsonPlaceholderStore } from "@/store/placeholder.js";

// const posts = ref([]);

// const fetchPosts = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     posts.value = response.data;
//   } catch (error) {
//     console.error("Erreur lors de la récupération des posts :", error);
//   }
// };

// onMounted(() => {
//   fetchPosts();
// });

const store = useJsonPlaceholderStore();

onMounted(() => {
  store.fetchPosts();
});

// watchEffect(() => {
//   console.log("all posts", store.allPosts);
// });

// const posts = ;
</script>

<template>
  <div>
    <!-- <div v-for="post in posts" :key="post.id">
      <p>{{ post.title }}</p>
    </div> -->
    <select name="" id="">
      <option disabled value="">choisir une option</option>
      <option v-for="post in store.allPosts" :key="post.id" :value="post">
        {{ post.title }}
      </option>
    </select>

    <h1 class="text-2xl">Aboonés : {{ store.followers }}</h1>
    <button @click="store.addFollower">s'abonner</button>
  </div>
</template>
