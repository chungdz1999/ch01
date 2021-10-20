import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import ListPage from './page';
import ListPage from '../Product/page/ListPage';

Product.propTypes = {};

function Product(props) {
    const match = useRouteMatch();

    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ListPage} exact />
            </Switch>
        </Box>
    );
}

export default Product;