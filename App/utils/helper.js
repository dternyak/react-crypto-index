import axios from 'axios';

export function getAllCoins() {
    return axios.get('http://coinmarketcap.northpole.ro/api/v5/all.json');
}

export function getCoin(coin) {
    return axios.get('https://coinmarketcap-nexuist.rhcloud.com/api/btc' + coin);
}




