import React from 'react';

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.length
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);