import React from 'react';
import {AppBar, IconMenu, MenuItem, IconButton} from 'material-ui/lib'

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