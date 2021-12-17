import { Box, Container, Grid, Paper } from '@mui/material';

// import { styled } from '@mui/material/styles';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';
import AddToCart from '../components/AddToCart';


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
        params: { productId, } } = useRouteMatch();

    const { product, loading } = useProductDetail(productId);

    if (loading) {
        return <Box>ahihi</Box>
    }

    const handleOnSubmit = (FromValue) => {
        console.log('From value', FromValue);
    }

    return (
        <Box >
            <Container>
                <Grid container spacing={0.5}>
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
            </Container>
        </Box>
    );
}

export default DetailPage;