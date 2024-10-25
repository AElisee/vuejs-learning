// store.js
import axios from "axios";
import { reactive } from "vue";

// On crée une instance unique du store ici

export const useStore = () => {
  const state = reactive({
    articles: [
      { id: 1, title: "My journey with Vue", slot: true },
      { id: 2, title: "Blogging with Vue", slot: false },
      { id: 3, title: "Why Vue is so fun", slot: true },
    ],
  });
  const addArticle = (article) => {
    const newId = state.articles.length + 1;
    const newArticle = { id: newId, ...article };
    state.articles.push(newArticle);
  };

  const deleteArticle = (articleId) => {
    state.articles = state.articles.filter(
      (article) => parseInt(article.id) !== parseInt(articleId)
    );
  };

  return {
    state,
    addArticle,
    deleteArticle,
  };
};
