import { createWebHistory, createRouter } from "vue-router";

import Home from '@/views/Home.vue';
import Article from "@/views/Article.vue";
import Login from '@/views/Login.vue';
import CategoryPage from '@/views/CategoryPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
  },
  {
    path: "/category-page",
    name: "CategoryPage",
    component: CategoryPage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
