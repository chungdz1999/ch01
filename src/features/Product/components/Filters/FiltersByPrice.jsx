import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box, display, margin } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

FiltersByPrice.propTypes = {
    onChange: PropTypes.func,
};

function FiltersByPrice({ onChange }) {

    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevalues) => ({
            ...prevalues,
            [name]: value,
        }))
    };

    const handleClick = () => {
        if (onChange) onChange(values);
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0
        });
    };

    return (
        <Box
            sx={{
                paddingTop: 2,
                borderTop: "1px solid black"
            }}
        >
            <Typography> Chọn lọc sản phẩm </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexFlow: ' row nowrap',
                    alignItems: 'center',
                    marginTop: 1,
                    marginBottom: 1,
                }}
            >
                <TextField
                    id="outlined-basic" variant="outlined" size="small"
                    name="salePrice_gte" values={values.salePrice_gte} onChange={handleChange} />
                <span
                style={{
                    marginLeft: 1,
                    marginRight: 1,
                }}
                >-</span>
                <TextField
                    id="outlined-basic" variant="outlined" size="small"
                    name="salePrice_lte" values={values.salePrice_lte} onChange={handleChange} />
            </Box>
            <p></p>
            <Button
                variant="contained"
                onClick={handleClick}
            > Áp dụng</Button>
        </Box>
    );
}

export default FiltersByPrice;