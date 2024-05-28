import { createRouter, createWebHistory } from 'vue-router';

import BinanceCoin from "./views/5coin.vue";
import Cardano from "./views/4coin.vue";
import Solana from "./views/3coin.vue";
import Ethereum from "./views/ethereum.vue";
import Bitcoin from "./views/bitcoin.vue";
import Home from "./views/home.vue"; // Changed from 'home' to 'Home'
import Pesq from "./views/pesq.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
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

export default router;
