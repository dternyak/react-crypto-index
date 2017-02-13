import React from 'react';
import AppBar from 'material-ui/AppBar';

const style = {
    textAlign: 'center'
}

const Navigation = () => {
    return (
        <AppBar
            showMenuIconButton={false}
            title={<div style={style}>CryptoIndex</div>}
        />

    )
};

export default Navigation;
