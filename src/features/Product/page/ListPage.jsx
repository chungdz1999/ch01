import { Box, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import productApi from '../../../api/productApi';
import FilterViewer from '../components/FilterViewer';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import queryString from 'query-string';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    left: {
        width: '250px'

    },
    right: {
        flex: '1 1 0'
    },

    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',

        marginTop: '20px',
        paddingBottom: '20px'

    }

}));


function ListPage(props) {
    const classes = useStyles();

    const history = useHistory();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search)

        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 8,
            _sort: params._sort || 'salePrice:ASC',
            isPromotion: params.isPromotion === 'true',
            isFreeShip: params.isFreeShip === 'true',
        };
    }, [location.search]);

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        total: 8,
        limit: 8,
        page: 1,
    });
    const [loading, setLoading] = useState(true);
    // const [filters, setFilters] = useState({
    //     _page: 1,
    //     _limit: 8,
    //     _sort: 'salePrice:ASC',
    // });

    // const [filters, setFilters] = useState(() => ({
    //     ...queryParams,
    //     _page: Number.parseInt(queryParams._page) || 1,
    //     _limit: Number.parseInt(queryParams._limit) || 8,
    //     _sort: queryParams._sort || 'salePrice:ASC',
    // }));


    // useEffect(() => {
    //     history.push({
    //         pathname: history.location.pathname,
    //         search: queryString.stringify(filters)
    //     })
    // }, [history, filters]);


    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(queryParams);
                setProductList(data);
                setPagination(pagination);
                console.log({ data, pagination });
            } catch (error) {
                console.log('Faid roi ku', error);
            }
            setLoading(false);
        })();
    }, [queryParams]);

    const handlePageChange = (e, page) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     _page: page
        // }))

        const filters = {
            ...queryParams,
            _page: page,
        }

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        });
    };

    const handleSortChange = (newSortValue) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     _sort: newSortValue
        // }))

        const filters = {
            ...queryParams,
            _sort: newSortValue
        }

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        });
    };

    const handleFiltersChange = (newFilters) => {
        // setFilters((prevFilters) => ({
        //     ...prevFilters,
        //     ...newFilters
        // }))
        
        const filters = {
            ...queryParams,
            ...newFilters,
        }

        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters)
        });
    };

    const setNewFilters = (newFilters) => {
        // setFilters(newFilters);
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilters)
        });
    };

    return (
        <Box>
            <Container>
                <Grid container>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilter filters={queryParams} onChange={handleFiltersChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
                            <FilterViewer filters={queryParams} onChange={setNewFilters} />

                            {loading ? <ProductSkeletonList length={8} /> : <ProductList data={productList} />}
                            <Box className={classes.pagination}>
                                <Pagination
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    color="primary"
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;