<template>
  <main class="d-flex flex-column h-50 w-100 pl-3 pr-3 pb-5 pt-2">
    <h1 class="display-1 txt1 pt-3  align-items-end">
      <strong>Mycripto</strong>
    </h1>
       <div class="d-flex justify-content-center mt-3 mb-4">
      <form class="d-flex flex-row" role="search" @submit.prevent="submitSearch">
        <input
          v-model="searchQuery"
          class="form-control me-2"
          type="text"
          placeholder="Digite a sua Crypto "
          aria-label="Search"
        />
       <button class="btn w-100 btn-outline-warning" type="submit">
          Pesquisar
        </button>
      </form>
    </div>
    <h2 class="txt1 pt-5  align-items-end">
      <strong>Principais Crypto's:</strong>
    </h2>
    <nav class="d-flex flex-column imgs p-2 justify-content-center align-items-center">
      
      <div id="one">
       <router-link to="/bitcoin" class="btn w-75 btn-warning p-3">
          <h5>Bitcoin</h5>
        </router-link>
      </div>
      <div id="two">
        <router-link to="/ethereum" class="btn w-75 btn-outline-light p-3">
          <h5>Ethereum</h5>
        </router-link>
      </div>
      <div id="three">
        <router-link to="/solana" class="btn w-75 btn-info p-3">
          <h5>Solana</h5>
        </router-link>
      </div>
      <div id="fourth">
        <router-link to="/bnb" class="btn w-75 btn-outline-warning p-3">
          <h5>Binance coin</h5>
        </router-link>
      </div>
      <div id="five">
        <router-link to="/cardano" class="btn w-75 btn-primary p-3">
          <h5>Cardano</h5>
        </router-link>
      </div>
    </nav>
   
  </main>
</template>

<script>
export default {
  data() {
    return {
      searchQuery:""
    };
  },
  methods: {
    submitSearch() {
      
      this.$router.push({ path: '/pesq', query: { coin: this.searchQuery }});
    }
  },
  mounted() {
   
  },
};
</script>

<style>
html,body{
  height: 100%;
  margin-bottom: 0%;
  font-family: Arial, sans-serif;
  background-color: #333; 
  color: #fff; 
  
  padding:0%;
}

.txt1 {
  font-family: 'Playfair Display', serif;
  color: #ffffff;
  animation: titleAnimation 1s ease-out forwards;
}

@keyframes titleAnimation {
  0% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

main {
  opacity: 0;
  animation: fadeInAnimation 2s ease forwards;
  background-color: rgb(37, 38, 38);
  height: 100%;
  margin:0%;
  padding:5%;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.imgs{
  display:flex;
 
  padding:5%;
}
#one,
#two,
#three,
#fourth,
#five {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; 
  margin:1%;

}
#one:hover,
#two:hover,
#three:hover,
#fourth:hover,
#five:hover {
  
  transform: scale(1.05);
    opacity: 0.5;
}
</style>
