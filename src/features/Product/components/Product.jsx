import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
// import Skeleton from '@mui/material/Skeleton';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';
import { useHistory } from 'react-router-dom';
import { formatPrice } from '../../../utils';


Product.propTypes = {
    productSP: PropTypes.object,
};

function Product({ productSP }) {

    const history = useHistory();
    const thumbnailurl = productSP.thumbnail
        // ? `https://api.ezfrontend.com${productSP.thumbnail?.url}`
        // : 'https://via.placeholder.com/213'

        ? `${STATIC_HOST}${productSP.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER

const handleClick = () => {
    history.push(`/product/${productSP.id}`)
    // history.push(`/${productSP.id}`)
};

    return (
        <div>
            <Box padding={1} onClick={handleClick}>
                <Box padding={1} minHeight='213px'>
                    <img
                        src={thumbnailurl}
                        alt={productSP.name}
                        width="100%"
                    />
                </Box>

                <Typography variant='body2'>    {productSP.name}   </Typography>
                <Typography variant='body2'>
                    <Box component="span" fontSize="16px" fontWeight='bold' mr={1} >
                        {/* {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(productSP.salePrice)} */}
                        {formatPrice(productSP.salePrice)}
                    </Box>

                    {productSP.promotionPercent > 0 
                    ? `${productSP.promotionPercent}%` 
                    : '' }
                </Typography>
            </Box>
        </div>
    );
}

export default Product;