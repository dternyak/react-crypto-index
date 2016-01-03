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
                        <td className="text-center">{each.position}</td>
                        <td className="text-center">
                            <img src={src}/>{' '} {each.symbol}
                        </td>
                        <td className="text-center">${this.removeLastThreeOfNumber(parseInt(each.marketCap.usd).toMoney())}</td>
                        <td className="text-center">{each.availableSupply + ' ' + each.symbol}</td>
                        <td className="text-center">{this.removeLastThreeOfNumber(parseInt(each.volume24.btc).toMoney())} {' '} {'BTC'}</td>
                        {each.change7h.usd > 0.00 ?
                            <td className="text-center" style={styles.green}>{each.change7h.usd}%</td> : <td className="text-center" style={styles.red}>{each.change7h.usd}%</td>
                        }
                        <td className="text-center">${each.price.usd}</td>
                    </tr>
                )
            }
        );

        return (
        <div className='row center'>
            <div className="row">
                <table className="striped responsive">
                    <thead>
                    <tr className="text-center">
                        <th data-field="id" className="text-center">Position</th>
                        <th data-field="id" className="text-center">Currency</th>
                        <th data-field="price" className="text-center">Market Cap</th>
                        <th data-field="id" className="text-center">Supply</th>
                        <th data-field="price" className="text-center">Volume (24h)</th>
                        <th data-field="name" className="text-center">% Change (7h)</th>
                        <th data-field="price" className="text-center">Price</th>
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