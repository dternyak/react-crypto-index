import React from 'react';

class TableRows extends React.Component {

    constructor(props) {
        super(props)
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    removeLastThreeOfNumber(x) {
        return x.toString().slice(0, -3)
    }

    render() {
        var styles = this.constructor.styles;
        var all = this.props.jsonobj.map((each, index)  => {
                var src = `https://coinmarketcap.com/static/img/coins/16x16/${each.name.toLowerCase()}.png`
                return (
                    <tr key={index}>
                        <td>{each.position}</td>
                        <td>
                            <img src={src} width="25px" height="25px"/>{' '} {each.name}
                        </td>
                        <td>${this.removeLastThreeOfNumber(parseInt(each.market_cap.usd).toMoney())}</td>
                        <td>{this.numberWithCommas(each.supply) + " " + each.symbol.toUpperCase()}</td>
                        <td>${this.removeLastThreeOfNumber(parseInt(each.volume.usd).toMoney())}</td>
                        {each.change > 0.00 ?
                            <td style={styles.green}>{each.change}</td> : <td style={styles.red}>{each.change}</td>
                        }
                        <td>${each.price.usd}</td>
                    </tr>
                )
            }
        );

        return (
        <div className='row center'>
            <div className="row">
                <table className="striped responsive">
                    <thead  style={{'textAlign': 'center'}}>
                    <tr>
                        <th data-field="id">Position</th>
                        <th data-field="id">Currency</th>
                        <th data-field="price">Market Cap</th>
                        <th data-field="id">Supply</th>
                        <th data-field="price">Volume (24h)</th>
                        <th data-field="name">% Change</th>
                        <th data-field="price">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {all}
                    </tbody>

                </table>
            </div>
        </div>

        )
    }
}
;

TableRows.styles = {
    red: {
        color: 'red'
    },
    green: {
        color: 'green'
    }
};

TableRows.propTypes = {
    jsonobj: React.PropTypes.array.isRequired
};


export default TableRows
