import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
// import InputField from '../../../../components/form-controls/InputField';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(1),
        position: 'Relative',
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        margin: theme.spacing(2, 0, 1, 0),
        textAlign: 'center'
    },

    submit: {
        margin: theme.spacing(1.5, 0, 0, 0),
    },

}));


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const classes = useStyles();

    // const schema = yup.object().shape({
    //     fullname: yup.string()
    //     .required(' pls enter your full name')
    //     // .test('should has at least two work', ' pls enter at least two work.', values => {
    //     //     // console.log(value);
    //     //     return values.split(' ').length >= 2;
    //     // }), 
    // });     

    const schema = yup.object().shape({
       
        identifier: yup.string()
            .required('pls enter your email')
            .email('pls enter a valid email your ok '),

        password: yup.string()
            .required('pls enter your password')

    });

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        // reValidateMode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        // console.log('Todo Form', values);
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }

        // form.reset();
    };

    const { isSubmitting } = form.formState;


    return (
        <div className={classes.root}>
            {isSubmitting &&
                <Box sx={{
                    width: '100%',
                    position: 'Absolute',
                }}>
                    <LinearProgress />
                </Box>
            }

            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Create An Acccount
            </Typography>


            <form onSubmit={form.handleSubmit(handleSubmit)} >
                
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
               
                <Button disabled={isSubmitting} type='submit' className={classes.submit} variant="contained" color='primary' fullWidth >
                    Đăng nhập 
                </Button>
            </form>

        </div>
    );
}

export default LoginForm;