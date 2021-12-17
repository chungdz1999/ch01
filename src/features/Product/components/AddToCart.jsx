import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import QuantityField from '../../../components/form-controls/QuantityField';

AddToCart.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCart({ onSubmit = null}) {

    const schema = yup.object().shape({
        quantity: yup
        .number()
        .required('pls enter quantity')
        .min(1, 'Minium value is 1')
        .typeError('pls enter a number')
    });

    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    return (
        <Box sx={{
            marginLeft: 2,
        }}>
        <form  onSubmit={form.handleSubmit(handleSubmit)} >
            <QuantityField name="quantity" label="quantity" form={form} />

            <Button style={{ width: '280px' }} type='submit' variant="contained" color='primary' fullWidth >
                Buy
            </Button>
        </form>
        </Box>
    );
}

export default AddToCart;