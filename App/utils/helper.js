import axios from 'axios';

export function getAllCoins() {
    return axios.get('https://coinmarketcap-nexuist.rhcloud.com/api/all');
}

export function getCoin(coin) {
    return axios.get('https://coinmarketcap-nexuist.rhcloud.com/api/btc' + coin);
}




