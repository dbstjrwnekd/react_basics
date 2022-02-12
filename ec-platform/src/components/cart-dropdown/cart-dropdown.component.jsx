import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import "./cart-dropdown.styles.scss";
import { connect, useDispatch } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartDropdown({cartItems}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length > 0 ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />):
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                navigate('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);