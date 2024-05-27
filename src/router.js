import Vue from "vue";
import Router from "vue-router";
import binancecoin from "./views/5coin.vue";
import cardano from "./views/4coin.vue";
import solana from "./views/3coin.vue";
import ethereum from "./views/ethereum.vue";
import bitcoin from "./views/bitcoin.vue";
import Home from "./views/Home.vue";
import pesq from "./views/pesq.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: '/',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/bitcoin",
      name: "bitcoin",
      component: bitcoin
    },
    {
      path: "/ethereum",
      name: "ethereum",
      component: ethereum
    },
    {
      path: "/solana",
      name: "solana",
      component: solana
    },
    {
      path: "/bnb",
      name: "binancecoin",
      component: binancecoin
    },

    {
      path: "/cardano",
      name: "cardano",
      component: cardano
    },
    {
      path: "/pesq",
      name: "pesq",
      component: pesq
    },
  ]
});
