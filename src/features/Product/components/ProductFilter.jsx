import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FiltersByCategory from './Filters/FiltersByCategory';
import FiltersByPrice from './Filters/FiltersByPrice';
ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
   const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return;

        const newFilters = {
            // ...filters,
            "category.id": newCategoryId,
        }
        onChange(newFilters);
   };

   const handlePriceChange = (values) => {
        // console.log(values);
        if (onChange) onChange(values) 

   };
   
    return (
     <Box>
         <FiltersByCategory onChange={handleCategoryChange} />
         <FiltersByPrice  onChange={handlePriceChange}/>
     </Box>
    );
}

export default ProductFilter;