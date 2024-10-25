import axios from "axios";
import { defineStore } from "pinia";

const apiUrl = "http://localhost:5000/tasks";

export const useTasksStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    singleTask: null,
  }),

  getters: {
    allTasks: (state) => state.tasks,
  },

  actions: {
    async fetchTasks() {
      try {
        const response = await axios.get(apiUrl);
        this.tasks = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    },

    async fetchSingleTask(id) {
      try {
        const response = await axios.get(`${apiUrl}/${id}`);
        this.singleTask = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    },

    async addPost(newPost) {
      try {
        await axios.post(apiUrl, newPost);
        await this.fetchTasks();
      } catch (error) {
        alert("Veuillez renseigner les champs obligatoires !");
      }
    },

    async deletePost(taskId) {
      try {
        await axios.delete(`${apiUrl}/${taskId}`);
        await this.fetchTasks();
      } catch (error) {
        throw error;
      }
    },

    async updatePost(task) {
      try {
        await axios.put(`${apiUrl}/${task.id}`, task);
        await this.fetchTasks();
      } catch (error) {
        throw error;
      }
    },
  },
});
