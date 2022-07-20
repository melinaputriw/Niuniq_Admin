import Vue from "vue";
import VueRouter from "vue-router";
import DetailView from "../views/DetailView.vue";
import TentangView from "../views/TentangView.vue";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import NotificationView from "../views/NotificationView.vue";
import InputProdukView from "../views/InputProdukView.vue";
import InputTokoView from "../views/InputTokoView.vue";
import TentangViewPenjual from "../views/TentangViewPenjual.vue";
import PengaturanView from "../views/PengaturanView.vue";
import ShopInfo from "../views/ShopInfoView.vue";
import Dashboard from "../views/DashboardView.vue";
import ProfileView from "../views/ProfileView.vue";
import ProductList from "../views/ProductListView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/detailview",
    name: "DetailView",
    component: DetailView,
  },
  {
    path: "/pengaturanview",
    name: "PengaturanView",
    component: PengaturanView,
  },
  {
    path: "/tentangview",
    name: "TentangView",
    component: TentangView,
  },
  {
    path: "/tentangviewpenjual",
    name: "TentangViewPenjual",
    component: TentangViewPenjual,
  },
  {
    path: "/inputprodukview",
    name: "InputProdukView",
    component: InputProdukView,
  },
  {
    path: "/inputtokoview",
    name: "InputTokoView",
    component: InputTokoView,
  },
  {
    path: "/loginview",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/notificationview",
    name: "NotificationView",
    component: NotificationView,
  },
  {
    path: "/registerview",
    name: "RegisterView",
    component: RegisterView,
  },
  {
    path: "/homeview",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/profileview",
    name: "ProfileView",
    component: ProfileView,
  },
  {
    path: "/shop-info",
    name: "ShopInfo",
    component: ShopInfo,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
    {
      path: "/product-list",
      name: "ProductList",
      component: ProductList,
    },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
