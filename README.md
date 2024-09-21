Consultor de Criptomoedas

Este projeto é uma aplicação simples em Vue.js que consulta a API CoinGecko para exibir informações sobre diversas criptomoedas. A aplicação permite ao usuário visualizar os preços atualizados das criptomoedas, bem como outras informações relevantes, como variação de preços, volume de mercado e capitalização de mercado.
Funcionalidades

    Listagem de criptomoedas com informações atualizadas (nome, preço, variação, capitalização).
    Pesquisa de criptomoedas específicas.
    Atualização automática dos dados a cada 60 segundos.
    Exibição de detalhes adicionais sobre uma criptomoeda selecionada.

Tecnologias Utilizadas

    Vue.js: Framework JavaScript utilizado para construção da interface do usuário.
    Axios: Biblioteca utilizada para fazer requisições HTTP à API CoinGecko.
    Tailwind CSS: Utilizado para o design responsivo da aplicação (ou outra tecnologia de estilo conforme necessário).
    CoinGecko API: API pública gratuita para acessar dados de criptomoedas.

Instalação

    Clone o repositório:

    bash

git clone https://github.com/seu-usuario/consultor-criptomoedas.git
cd consultor-criptomoedas

Instale as dependências:

bash

npm install

Execute a aplicação:

bash

    npm run serve

    Abra o navegador e acesse http://localhost:8080.

Como Usar

    Ao abrir a aplicação, você verá uma lista de criptomoedas populares, incluindo o preço atual, variação em 24 horas e capitalização de mercado.
    Para buscar por uma criptomoeda específica, utilize a barra de pesquisa no topo da página.
    Clique em uma criptomoeda para ver mais detalhes.

API Utilizada
CoinGecko API

A aplicação faz uso da API da CoinGecko para obter informações atualizadas sobre criptomoedas. Você pode consultar a documentação completa da API em: https://www.coingecko.com/en/api.
Exemplo de Requisição

Abaixo está um exemplo de como a aplicação consulta a API:

js

import axios from 'axios';

axios.get('https://api.coingecko.com/api/v3/coins/markets', {
  params: {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 10,
    page: 1,
    sparkline: false,
  },
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});

Melhorias Futuras

    Adicionar gráficos de preço das criptomoedas ao longo do tempo.
    Implementar autenticação de usuário para criar listas personalizadas de criptomoedas favoritas.
    Adicionar suporte para múltiplas moedas (EUR, BRL, etc).
    Melhorar a UI/UX com transições suaves e animações.

Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias, correções de bugs ou novas funcionalidades.
Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Com este README, você fornece uma visão clara do projeto, instruções de instalação e uso, além de sugestões para futuras melhorias.
