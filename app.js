var baseUrl = 'https://api.coinranking.com/v2';
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
var apiKey = 'coinrankingc4fa432a95c8485e17c9e1dbd1a4df57407bd4aa52fd6186';

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-My-Custom-Header': `${apiKey}`,
    'Access-Control-Allow-Origin': '*',
  },
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
          var cryptoCoin = '';
        }
        //For Loop Starts
        coinsData.forEach((coin) => {
          cryptoCoin += '<tr>';
          cryptoCoin += `<td> ${coin.uuid} </td>`;
          cryptoCoin += `<td> ${coin.btcPrice} </td>`;
          cryptoCoin += `<td> ${coin.rank}</td>`;
          cryptoCoin += `<td> ${coin.tier} </td>`;
          cryptoCoin += `<td> ${coin.name}</td>`;
          cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
          cryptoCoin += `<td> ${coin.symbol}</td>`;
          ('<tr>');
        });
        //For Loop Ends
        document.getElementById('data').innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
