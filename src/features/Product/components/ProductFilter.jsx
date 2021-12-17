import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FiltersByService';

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

   const handleChange = (values) => {
        // console.log(values);
        if (onChange) onChange(values) 

   };
   
    return (
     <Box>
         <FilterByCategory onChange={handleCategoryChange} />
         <FilterByPrice  onChange={handleChange}/>
         <FilterByService filters={filters} onChange={handleChange} />
     </Box>
    );
}

export default ProductFilter;