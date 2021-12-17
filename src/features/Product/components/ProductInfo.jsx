import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { formatPrice } from '../../../utils';

ProductInfo.propTypes = {
    product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;

    const Item = styled(Typography)(({ theme }) => ({
        margin: theme.spacing(2, 0),
    }));

    const Price = styled(Box)(({ theme }) => ({
        marginRight: theme.spacing(3),
        fontSize: theme.typography.h4.fontSize,
        fontWeight: 'bold',
    }));

    const Price1 = styled(Box)(({ theme }) => ({
        marginRight: theme.spacing(2),
        textDecoration: 'line-through',
    }));

    return (
        <Box sx={{
            marginLeft: 2,
        }}>
            <Typography
                component='h1'
                variant='h4'
            >  {name}  </Typography>
    
            <Item  variant='body2'>  {shortDescription}   </Item>

            <Box sx={{
                backgroundColor: '#eeeeee',
            }}>
                {/* <Box component='span'> 
                </Box> */}
                <Price component='span'>
                    {formatPrice(salePrice)}
                </Price>

                {promotionPercent > 0 && (
                    <>
                        <Price1 component='span'> {formatPrice(originalPrice)} </Price1>

                        <Box component='span'>{`-${promotionPercent}%`}</Box>
                    </>
                )}
            </Box>
             <p></p>
            <hr></hr>
        </Box>
    );
}

export default ProductInfo;