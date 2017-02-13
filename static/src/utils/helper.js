import axios from 'axios';

export function getAllCoins() {
    return axios.get('/api/v1/all');
    // return axios.get('https://api.coinmarketcap.com/v1/ticker');
}

// export function getCoin(coin) {
//     return axios.get('https://coinmarketcap-nexuist.rhcloud.com/api/btc' + coin);
// }




