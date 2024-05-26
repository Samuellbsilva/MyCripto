<template>
    <div>
    
    <Coin/>
    </div>
    </template>
    
    <style>
    
    body{
    
      backdrop-filter: blur(5px);
      background-color: rgb(22, 71, 116);
    }
    </style>
    <script>
     import Coin from'@/components/Coin.vue';

    export default {
    
      components:{
               Coin
      }
    }</script>
