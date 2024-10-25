import { defineStore } from "pinia";
import axios from "axios";

// Store avec un état défini comme un objet
export const useJsonPlaceholderStore = defineStore("jsonPlaceholderStore", {
  state: () => ({
    posts: [],
    followers: 0,
  }),

  getters: {
    allPosts: (state) => state.posts,
  },

  actions: {
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = response.data; // Utilisation de "this" car "state" est devenu un objet
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    },

    addFollower() {
      this.followers++;
    },
  },
});
