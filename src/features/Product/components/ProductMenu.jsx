import React from 'react';
// import PropTypes from 'prop-types';
import { Box, Link } from '@mui/material';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { styled } from '@mui/material/styles';

ProductMenu.propTypes = {

};

function ProductMenu(props) {
    const { url } = useRouteMatch();
    // console.log(url);

    const Boxx = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 0,
        listStyleType: ' none',

        '& > li': {
            padding: theme.spacing(2, 4),
        },

        '& > li > a': {
            color: theme.palette.grey[700],
        },

        '& > li > a.active': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
        },

    }));

    return (
        <Boxx component='ul'>
            <li>
                <Link component={NavLink} to={url} exact >
                    Desription
                </Link>
            </li>

            <li>
                <Link component={NavLink} to={`${url}/additional`} exact >
                    add infomation
                </Link>
            </li>

            <li>
                <Link component={NavLink} to={`${url}/reviews`} exact >
                    Review
                </Link>
            </li>
        </Boxx>
    );
}

export default ProductMenu;