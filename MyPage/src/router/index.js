import { createRouter, createWebHistory } from "vue-router";
import IntroView from "../views/IntroView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "intro",
      component: IntroView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CView.vue"),
    },
  ],
});

export default router;
