import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// import test from 'components/test.vue'
const GeneralLayout = () => import('views/Basic/Layout')
const Button = () => import('views/Basic/Button')

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: '/layout',
        component: GeneralLayout
      },
      {
        path: '/button',
        component: Button
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
