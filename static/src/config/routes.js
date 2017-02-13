import React from 'react';
import Main from '../Main'
import Router from 'react-router'
import TableContainer from '../components/TableContainer/TableContainer'
import {Route, IndexRoute} from 'react-router';

export default (
    <Route path="/" component={Main}>
        <IndexRoute component={TableContainer} />

        </Route>
);