import Vue from "vue";
import Router from "vue-router";
import BinanceCoin from "./views/5coin.vue";
import Cardano from "./views/4coin.vue";
import Solana from "./views/3coin.vue";
import Ethereum from "./views/ethereum.vue";
import Bitcoin from "./views/bitcoin.vue";
import home from "./views/home.vue";
import Pesq from "./views/pesq.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: '/',
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/bitcoin",
      name: "bitcoin",
      component: Bitcoin
    },
    {
      path: "/ethereum",
      name: "ethereum",
      component: Ethereum
    },
    {
      path: "/solana",
      name: "solana",
      component: Solana
    },
    {
      path: "/bnb",
      name: "binancecoin",
      component: BinanceCoin
    },
    {
      path: "/cardano",
      name: "cardano",
      component: Cardano
    },
    {
      path: "/pesq",
      name: "pesq",
      component: Pesq
    }
  ]
});
