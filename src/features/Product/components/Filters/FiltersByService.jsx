import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

FilterByPrice.propTypes = {
    filters: PropTypes.object,  
    onChange: PropTypes.func,
};

function FilterByPrice({ filters = {}, onChange }) {

    // const [values, setValues] = useState({
    //     // isPromotion: Boolean(filter.isPromotion),
    //     // isFreeship: Boolean(filter.isFreeship)
    // });
    const handleChange = (e) => {
        if (!onChange) return;

        const { name, checked } = e.target;
        onChange({ [name]: checked });
    };

    return (
        <Box
            sx={{
                paddingTop: 2,
                borderTop: "1px solid black"
            }} >
            <Typography variant='subtitle2'> Dịch vụ  </Typography>

            <ul style={{
                padding: 0,
                margin: 0,
                listStyleType: 'none',

                '& > li': {
                    margin: 0,
                    marginTop: 1,
                }
            }}>
                {[
                    { value: 'isPromotion', label: 'có khuyến mãi' },
                    { value: 'isFreeShip', label: 'vận chuyển miễn phí' }
                ].map((service) => (    
                        <li key={service.value}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={Boolean(filters[service.value])}
                                        onChange={handleChange}
                                        name={service.value}
                                        color="primary"
                                    />}
                                label={service.label}
                            />
                        </li>
                    ))}
            </ul>
        </Box >
    );
}

export default FilterByPrice;