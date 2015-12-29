import axios from 'axios';

export function getAllCoins() {
    return axios.get('/api/v1/get_coins');
}


