import Vue from "vue";
import VueRouter from "vue-router";

// import test from 'components/test.vue'
const Home = () => import('views/Home/index')
const Echarts = () => import('views/Home/Echarts')

const Basic = () => import('views/Basic/index')
const GeneralLayout = () => import('views/Basic/Layout')
const Button = () => import('views/Basic/Button')
const Progress = () => import('views/Basic/Progress')
const Color = () => import('views/Basic/Color')
const ColorPicker = () => import('views/Basic/ColorPicker')
const Icon = () => import('views/Basic/Icon')

const Map = () => import('views/Map/index')
const BasicMap = () => import('views/Map/BasicMap')

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        component: Echarts
      }
    ]
  },
  {
    path: "/basic",
    name: "Basic",
    component: Basic,
    children: [
      {
        path: "/",
        component: Basic
      },
      {
        path: 'layout',
        component: GeneralLayout
      },
      {
        path: 'button',
        component: Button
      },
      {
        path: 'progress',
        component: Progress
      },
      {
        path: 'color',
        component: Color
      },
      {
        path: 'colorpicker',
        component: ColorPicker
      },
      {
        path: 'icon',
        component: Icon
      }
    ]
  },
  {
    path: "/map",
    component: Map,
    children: [
      {
        path: 'basic',
        component: BasicMap
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
