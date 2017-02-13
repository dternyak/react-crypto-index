import React from 'react';

import {Table} from 'react-bootstrap'
import CircularProgress from 'material-ui/CircularProgress';

import {getAllCoins, getCoin} from '../../utils/helper';
import TableRows from '../tableRows';
class TableContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jsonobj: [],
            loading: true,
        }
    }

    componentDidMount() {

        getAllCoins()
            .then((response) => {
                let data = response.data.data;

                this.setState({
                    jsonobj: data,
                    loading: false
                })
            })
    }


    render() {
        return (
            <div>
                {     this.state.loading ?
                    <div style={{textAlign: 'center', marginTop: '200px'}}>
                        <CircularProgress size={200} thickness={20}/>
                    </div>

                    :
                    <TableRows jsonobj={this.state.jsonobj}/>}
            </div>
        )
    }
}
;


export default TableContainer
