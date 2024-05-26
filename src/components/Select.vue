<template>
    <div>
        <h2>Moeda ao longo do tempo </h2>
      <select v-model="selectedPeriod" @change="handleChange" class="form-select form-select-sm mb-3">
        <option value="">Selecione um período</option>
        <option v-for="(period, index) in periods" :key="index" :value="period">{{ period }}</option>
      </select>
      <div v-if="selectedPercentage !== null" >
        <h3>Porcentagem para {{ selectedPeriod }}: {{ selectedPercentage }}%</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedPeriod: '',
        selectedPercentage: null,
        periods: ['24h', '7d', '14d', '30d', '200d', '1y'],
        percentageData: {
          '24h': 10,
          '7d': -5,
          '14d': 8,
          '30d': 15,
          '200d': 20,
          '1y': 25
        }
      };
    },
    methods: {
      handleChange() {
        if (this.selectedPeriod && this.percentageData.hasOwnProperty(this.selectedPeriod)) {
          this.selectedPercentage = this.percentageData[this.selectedPeriod];
        } else {
          this.selectedPercentage = null;
        }
      }
    }
  };
  </script>
  <style>
.div
{

  }
</style>
  