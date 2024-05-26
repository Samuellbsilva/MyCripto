<template>
  <main>
    <div v-if="loading" class="loader-container">
      <div class="loader"></div>
    </div>

    <div v-else-if="coinData && coinData.market_data" class="d-flex dpds justify-content-center w-100">
      <div class="d-flex flex-column-reverse coininf justify-content-center align-items-center">
        <div class="w-100 mr-4 justify-content-center align-items-center">
          <h2 class="display-4">{{ coinData.name }}</h2>
        </div>
        <div class="justify-content-center w-50">
          <img class="coinimg" v-if="coinData.image.large" :src="coinData.image.small" alt="">
        </div>
      </div>
      <article class="bgd d-flex dpds justify-content-center p-3" id="artc">
        <div class="d-flex flex-column justify-content-center align-items-center" id="preç">
          <div class="d-flex mb-3">
            <h3 v-if="coinData.market_data.current_price" class="">
              Preço Atual ({{ selectedCurrency.toUpperCase() }}):<br> 
              <span class="display-5" style="color:rgb(255, 183, 0)">
                {{ coinData.market_data.current_price[selectedCurrency.toLowerCase()] }} {{ selectedCurrency.toUpperCase() }}
              </span>
            </h3>
          </div>
          <div>
            <div>
              <label for="selectedCurrency">Moeda Padrão:</label>
              <select v-model="selectedCurrency" @change="updateConvertedAmount" class="form-select form-select-sm mb-3">
                <option v-for="currency in currencies" :key="currency" :value="currency">{{ currency.toUpperCase() }}</option>
              </select>
            </div>
            <div class="input-group input-group-sm mb-3">
              <label for="amount" class="input-group-text" id="inputGroup-sizing-sm">Quantia:</label>
              <input type="number" class="form-control" v-model="amount" id="amount" @input="updateConvertedAmount" />
            </div>
            <h3 v-if="convertedAmount !== null">
              {{ amount }} {{ coinData.symbol.toUpperCase() }} é igual a:  {{ convertedAmount.toFixed(2) }} {{ selectedCurrency.toUpperCase() }}
            </h3>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center" id="time">
          <div class="d-flex div pt-2 flex-column justify-content-center align-items-center">
            <Select class="h-25"/>
          </div>
          <div class="d-flex flex-column h-75 justify-content-center align-items-center">
            <h3 class="justify-content-center align-items-center">Ùltimas transações:</h3>
            <div class="exchange-list justify-content-center align-items-center">
              <p v-for="ticker in lstoprtion" :key="ticker.id" class="exchange-item">
                {{ ticker.market.name }}, {{ ticker.target }}/{{ ticker.base }}, Último Preço: {{ ticker.last }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import Select from '@/components/Select.vue';

export default {
  data() {
    return {
      coinData: null,
      lstoprtion: [],
      error: null,
      intervalId: null,
      selectedCurrency: 'BRL',
      amount: 1,
      convertedAmount: null,
      currencies: ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD', 'BRL'],
      loading: true,
    };
  },
  components: {
    Select,
  },
  created() {
    this.loadFromLocalStorage();
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 60000); 
  },
  beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },
  methods: {
    async fetchData() {
      this.error = null;
      this.loading = true; 
      const coinName = await this.verifyroute();
      if (coinName) {
        const coinId = await this.getCoinIdByName(coinName);
        if (coinId) {
          try {
            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`, {
              params: {
                localization: false,
                tickers: true,
                market_data: true,
                community_data: false,
                developer_data: false,
                sparkline: false,
              }
            });
            this.coinData = response.data;
            this.updateConvertedAmount(); 

            if (response.data.tickers) {
              this.lstoprtion = response.data.tickers.slice(-5);
            }
            this.saveToLocalStorage();
          } catch (error) {
            console.error('Erro ao buscar dados da API', error);
            this.error = 'Erro ao buscar dados da API';
          } finally {
            this.loading = false;
          }
        } else {
          this.error = 'ID da moeda não encontrado';
          this.loading = false;
        }
      } else {
        this.error = 'Nome da moeda ou rota inválida';
        this.loading = false;
      }
    },

    async getCoinIdByName(coinName) {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
        const coinsList = response.data;
        const coin = coinsList.find(coin => this.fixtext(coin.name) === this.fixtext(coinName));
        return coin ? coin.id : null;
      } catch (error) {
        console.error('Erro ao buscar lista de moedas:', error);
        this.error = 'Erro ao buscar lista de moedas';
        return null;
      }
    },

    fixtext(text) {
      return text.toLowerCase().replace(/\s+/g, '');
    },

    verifyifispesq() {
      return this.$route.path === '/pesq';
    },

    async verifyroute() {
      const ispesq = this.verifyifispesq();
      if (!ispesq) {
        const route = this.$route.path;
        switch (route) {
          case '/bitcoin':
            return 'bitcoin';
          case '/ethereum':
            return 'ethereum';
          case '/solana':
            return 'solana';
          case '/bnb':
            return 'bnb';
          case '/cardano':
            return 'cardano';
          default:
            this.error = "Rota inválida!";
            return null;
        }
      } else if (ispesq) {
        const route = this.$route.query.coin;
        return this.fixtext(route);
      }
    },

    updateConvertedAmount() {
      if (this.coinData && this.coinData.market_data && this.coinData.market_data.current_price) {
        const price = this.coinData.market_data.current_price[this.selectedCurrency.toLowerCase()];
        if (price) {
          this.convertedAmount = this.amount * price;
        } else {
          this.convertedAmount = null;
        }
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('coinData', JSON.stringify(this.coinData));
      localStorage.setItem('lstoprtion', JSON.stringify(this.lstoprtion));
    },

    loadFromLocalStorage() {
      const storedCoinData = localStorage.getItem('coinData');
      const storedLstoprtion = localStorage.getItem('lstoprtion');
      if (storedCoinData) {
        this.coinData = JSON.parse(storedCoinData);
        this.updateConvertedAmount();
      }
      if (storedLstoprtion) {
        this.lstoprtion = JSON.parse(storedLstoprtion);
      }
    }
  }
};
</script>

<style>
.coinimg {
  width: 75%;
}
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); 
  z-index: 9999; 
}
.loader {
  border: 1.0% solid #f3f3f3; 
  border-top: 1.0% solid #3498db; 
  border-radius: 50%;
  width: 6.5%;
  height: 7.0%;
  animation: spin 2s linear infinite;
}
.exchange-list {
  max-height: 55%; 
  padding:5%;
  margin:5%;
  border-radius:5%;
  overflow-y: auto;
  background-color:rgb(255, 183, 0);
  color:black;
}
.exchange-item {
  padding: 10px; 
  border-bottom: 1px solid #eee; 
}

.exchange-item:last-child {
  border-bottom: none; 
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.bgd{
  border-radius:2%;
  background-color: rgba(0, 0, 0, 0.564);
}
.coininf
{
  width:25%;
}
.dpds
{
  flex-direction:rown;
}

  #artc
  {
    width:75%;
  }
#preç
{
  width:50%;
}
#time{
  width:50%;
}

 @media (max-width: 556px) { 
  .dpds
  {
    flex-direction:column;
  }
  .coininf
{
  width:100%;
}
#time,
#preç,
#artc
  {
    width:100%;
  }

 }



</style>
