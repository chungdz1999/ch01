import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import Chip from '@mui/material/Chip';
const FILTER_LIST = [
    {
        id: 1,
        getlabel: () => 'Giao hàng miễn phí',
        isActive: (filters) => filters.isFreeShip,
        isVisible: (filters) => true,
        isRemovable: false,
        onRemove: () => { },
        onToggle: (filters) => {
            const newFilters = { ...filters };
            if (newFilters.isFreeShip) {
                delete newFilters.isFreeShip;
            } else {
                newFilters.isFreeShip = true;
            }

            return newFilters;
        },
    },
    {
        id: 2,
        getlabel: (filters) => 'Có khuyến mãi',
        isActive: () => true,
        isVisible: (filters) => filters.isPromotion,
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.isPromotion;
            return newFilters;
        },
        onToggle: () => { },
    },
    {
        id: 3,
        getlabel: (filters) => ` từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters) => Object.keys(filters).includes('salePrice_lte') && Object.keys(filters).includes('salePrice_gte'),
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = { ...filters };
            delete newFilters.salePrice_lte;
            delete newFilters.salePrice_gte;
            return newFilters;
        },
        onToggle: () => { },
    },
];

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};


function FilterViewer({ filters = {}, onChange = null }) {
   // use memo
    const visibleFilters = useMemo(() => {
        return FILTER_LIST.filter(x => x.isVisible(filters))
    }, [filters]);

    return (
        <Box component='ul'
            sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                alignItems: 'center',
                p: 0,

                margin: 2,
                listStyleType: 'none',

                '& > li ': {
                    margin: 0,
                    padding: 1,
                }
            }}
        >
            {visibleFilters.map(x => (
                <li key={x.id}>
                    <Chip
                        label={x.getlabel(filters)}
                        color={x.isActive(filters) ? 'primary' : 'default'}
                        clickable={!x.isRemovable}
                        onClick={x.isRemovable ? null : () => {
                            if (!onChange) return;

                            const newFilters = x.onToggle(filters);
                            onChange(newFilters);
                        }}
                        onDelete={x.isRemovable ? () => {
                            if (!onChange) return;

                            const newFilters = x.onRemove(filters);
                            onChange(newFilters);
                        } : null}
                    />
                </li>
            ))}
        </Box>
    );
}

export default FilterViewer;