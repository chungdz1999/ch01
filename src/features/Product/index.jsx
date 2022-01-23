import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import ListPage from './page';
import ListPage from '../Product/page/ListPage';
import DetailPage from './page/DetailPage';

Product.propTypes = {};

function Product(props) {
    const match = useRouteMatch();

    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ListPage} exact />
                <Route path={`${match.url}/:productId`} component={DetailPage} />
            </Switch>
        </Box>
    );
}

export default Product;