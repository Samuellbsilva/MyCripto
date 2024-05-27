<template>
  <div id="tapp">
    <NavHome />
    <router-view />
    <CoolFooter />   
  </div>
</template>

<script>
import NavHome from './components/NavHome.vue'; 
import CoolFooter from './components/CoolFooter.vue';

export default {
  components: {
    NavHome,
    CoolFooter
  }
};
</script>
<style>
#tapp {
  margin:0%;
  padding:0%;
  text-align: center;
}

</style>
