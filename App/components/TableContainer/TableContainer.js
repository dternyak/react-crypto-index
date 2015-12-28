import React from 'react';

import {Table} from 'react-bootstrap'

import {getAllCoins, getCoin} from '../../utils/helper';
import TableRows from '../tableRows';
class TableContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jsonobj: []
        }
    }

    componentDidMount() {
        getAllCoins()
            .then((response) => {
                var new_coins = []
                var coins = response.data.markets.reverse()

                for (var i = 0; i < 100; i++) {
                    new_coins.push(coins[i])
                }

                console.log(new_coins);
                this.setState({
                    jsonobj: new_coins
                })
            })
    }


    render() {
        return (
            <TableRows jsonobj={this.state.jsonobj}/>
        )
    }
};


export default TableContainer