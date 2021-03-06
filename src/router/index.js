import AboutComp from "../pages/AboutComp";
import HomeComp from "../pages/HomeComp";
import ContactComp from "../pages/ContactComp";
import PortfolioComp from "../pages/PortfolioComp";
import TodoList from "../pages/TodoList";
import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    id: 0,
    path: "/",
    name: "Home",
    component: HomeComp,
  },
  {
    id: 1,
    path: "/about",
    name: "about",
    component: AboutComp,
  },
  {
    id: 2,
    path: "/contact/:id",
    name: "contact",
    component: ContactComp,
  },
  {
    id: 3,
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioComp,
  },
  {
    id: 4,
    path: "/todolist",
    name: "todolist",
    component: TodoList,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
