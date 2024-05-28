<template>
    <div>
      <MainHome/>
    </div>
    </template>
    
    <style>
    
    body{
    height:100%;
      backdrop-filter: blur(5px);
      background-color: rgb(85, 88, 90);
    }
    </style>
    <script>
     import MainHome from'@/components/MainHome.vue';

    export default {
    
      components:{
     
        MainHome
      }
    }
    </script>