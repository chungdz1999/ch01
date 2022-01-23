import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispath = useDispatch();

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        // console.log('Form Submit', values);
        try {
            // auto set username = email

            const action = login(values);
            const resultAction = await dispath(action);
            unwrapResult(resultAction);

            // close Dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }

            // console.log('new user', user);

        } catch (error) {
            console.log('failed to Login', error);
            enqueueSnackbar(error.message, { variant: 'error' })
        }
    };

    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;