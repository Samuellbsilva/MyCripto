<template>
<nav class="d-flex navbar pb-0 h-25 justify-content-center align-items-center m-0"  >
   
    <div class="d-flex flex-column align-items-center w-25 p-2">
      <router-link to="/"><img class="w-75" src="../assets/icons8-crypto-120.png" alt="Crypto"></router-link>
   
</div>

</nav>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  mounted() {
    // Set iframeLoaded to true once the component has mounted
   
  }
};
</script>

<style scoped>
@keyframes gradient {
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
}

nav {
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgb(40, 40, 42) 35%, rgb(0, 0, 0) 100%);
  background-size: 400% 400%;
  animation: gradient 8s linear infinite;
}

/* Remove underline from Bootstrap links globally */
* {
  text-decoration: none !important;
}
.lg{
  margin-left:20%;
  margin-bottom:0%;
  align-items:center;
  align-content: center;
}
</style>
