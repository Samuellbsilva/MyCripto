
import axios from 'axios';

const apiUrl = process.env.VUE_APP_MY_CRIPTO_URL; 
const apiKey = process.env.VUE_APP_MY_CRIPTO_KEY; 


const axiosInstance = axios.create({
  baseURL: apiUrl,
});


axiosInstance.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params['x_cg_demo_api_key'] = apiKey; 
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;

//////////////////////////////////////////////////////////////

const currencieKey = process.env.VUE_APP_MY_CURRRENCIE_KEY;
const baseUrl = 'https://openexchangerates.org/api/';

export async function getLatestRates() {
  try {
    const response = await axios.get(`${baseUrl}latest.json`, {
      params: {
        app_id:currencieKey
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(`Erro: ${error.response.status}, ${error.response.data}`);
  }
}
