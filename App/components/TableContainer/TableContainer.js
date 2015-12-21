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
                response = response.data;
                var data = [];
                for (var i = 0; i < Object.keys(response).length; i++) {
                    var key_object = Object.keys(response);
                    var coin_name = key_object[i];
                    var key = response[key_object[i]];
                    key.name = coin_name;
                    data.push(key)
                }

                this.setState({
                    jsonobj: data
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