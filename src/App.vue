<template>
  <div id="tapp">
    <NavHome />
    <router-view></router-view>
    <CoolFooter />   
  </div>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import NavHome from './components/NavHome.vue'; 
import CoolFooter from './components/CoolFooter.vue';

import BinanceCoin from "./views/5coin.vue";
import Cardano from "./views/4coin.vue";
import Solana from "./views/3coin.vue";
import Ethereum from "./views/ethereum.vue";
import Bitcoin from "./views/bitcoin.vue";
import Home from "./views/home.vue";
import Pesq from "./views/pesq.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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

export default {
  components: {
    NavHome,
    CoolFooter
  },
  router
};
</script>

<style>
#tapp {
  margin: 0;
  padding: 0;
  text-align: center;
}
</style>

