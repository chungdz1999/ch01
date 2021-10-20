import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import React from 'react';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {

    const handleSortChange = (e, newValue) => {
        if (onChange) onChange(newValue);
    };

    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange}
            aria-label="disabled tabs example"
            textColor='primary'
        >
            <Tab label="Giá thấp đến cao" value="salePrice:ASC" />
            <Tab label="Giá cao đến thấp" value="salePrice:DESC" />
        </Tabs>
    );
}

export default ProductSort;