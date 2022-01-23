import { Box, Container, Grid, Paper } from '@mui/material';

// import { styled } from '@mui/material/styles';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';
import AddToCart from '../components/AddToCart';
import ProductMenu from '../components/ProductMenu';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductReviews from '../components/ProductReviews';
import LinearProgress from '@mui/material/LinearProgress';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/Cart/CartSlice';
// DetailPage.propTypes = {

// };

function DetailPage() {
    // const classes = useStyles();

    // const Item = styled(Paper)(({ theme }) => ({
    //     // ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     // textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

    const {
        params: { productId }, url
    } = useRouteMatch();
    // console.log(productId);
    const { product, loading } = useProductDetail(productId);
    const dispatch = useDispatch();

    if (loading) {
        return <Box sx={{
            width: '100%',
            top: 0,
            left: 0,
            position: 'fixed',
        }}>
            <LinearProgress  />
        </Box>
    }

    const handleOnSubmit = ({quantity}) => {
        // console.log('From value', FromValue);
        const action = addToCart({
            id: product.id,
            product,
            quantity,
        })
        console.log(action);
        dispatch(action);
    }

    return (
        <Box sx={{
            // paddingBottom: 5,
        }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4} >
                        <Paper elevation={0}>
                            <ProductThumbnail product={product} />
                        </Paper>
                    </Grid>
                    <Grid item xs={8} >
                        <Paper elevation={0}>
                            <ProductInfo product={product} />
                            <AddToCart onSubmit={handleOnSubmit} />
                        </Paper>
                    </Grid>
                </Grid>
                <ProductMenu />

                <Switch>
                    <Route exact path={url}>
                        <ProductDescription product={product} />
                    </Route>


                    <Route path={`${url}/additional`} component={ProductAdditional} />


                    <Route path={`${url}/reviews`} component={ProductReviews} />
                </Switch>

            </Container>
        </Box>
    );
}

export default DetailPage;