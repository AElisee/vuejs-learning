import { createWebHistory, createRouter } from "vue-router";
import BlogPage from "@/pages/BlogPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import SingleBlogPage from "@/pages/SingleBlogPage.vue";
import JsonPlaceholder from "@/pages/JsonPlaceholder.vue";
import Todo from "@/pages/Todo.vue";
import SingleTask from "@/pages/SingleTask.vue";
import FormKit from "@/pages/FormKitPage.vue";

const routes = [
  {
    path: "/",
    name: "accueil",
    component: HomePage,
  },
  {
    path: "/blogs",
    name: "blogs",
    component: BlogPage,
  },
  {
    path: "/blogs/:id",
    name: "blogs-detail",
    component: SingleBlogPage,
  },
  {
    path: "/json-placeholder",
    name: "/json-placeholder",
    component: JsonPlaceholder,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactPage,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: Todo,
  },
  {
    path: "/tasks/:id",
    name: "singletasks",
    component: SingleTask,
  },
  {
    path: "/formkit",
    name: "formkit",
    component: FormKit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
