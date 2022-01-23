import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './selectors';
// import PropTypes from 'prop-types';

CartFeature.propTypes = {

};

function CartFeature(props) {

    const total = useSelector(cartTotalSelector);

    return (
        <div>
            <p> Tong : {total} </p>
        </div>
    );
}

export default CartFeature;