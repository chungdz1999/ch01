import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, Button, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(1),
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
        margin: theme.spacing(2, 0, 0, 0),
    },

  }));


RegisterForm.propTypes = {
    onSubmit: PropTypes.func, 
};

function RegisterForm(props) {
    const classes = useStyles();

    const schema = yup.object().shape({
        title: yup.string()
        .required('please enter title')
        .min(5, 'tiele is too short'),
      });

    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            retypePassword: ''
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        // console.log('Todo Form', values);
        const {onSubmit} = props;
        if (onSubmit) {
            onSubmit(values);
        }

        form.reset();
    };

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}> 
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Create An Acccount
            </Typography>


        <form onSubmit={form.handleSubmit(handleSubmit)} >
         
            <InputField name="fullname" label="Full Name" form={form}/>
            <InputField name="email" label="Email" form={form}/>
            <InputField name="password" label="Password" form={form}/>
            <InputField name="retypePassword" label="Retype Password" form={form}/>

            <Button className={classes.submit} variant="contained" color='primary' fullWidth >
                Tao tai khoan
            </Button>
        </form>

        </div>
    );
}

export default RegisterForm;