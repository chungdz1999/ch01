import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product }) {
    const thumbnailurl = product.thumbnail
        // ? `https://api.ezfrontend.com${productSP.thumbnail?.url}`
        // : 'https://via.placeholder.com/213'

        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER


    return (
        <Box>
            <img
                src={thumbnailurl}
                alt={product.name}
                width="100%"
            />
        </Box>
    );
}

export default ProductThumbnail;