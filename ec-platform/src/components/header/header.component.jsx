import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from  '../../assets/crown.svg'

import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';

import './header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

function Header({ currentUser, hidden }) {
    return (
        <div className='header'>
            <Link className='loco-container' to ='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to ='/shop'>
                    SHOP
                </Link>
                <Link className='option' to ='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser?
                    <div className='option' onClick={() => signOut(auth)}>SIGN OUT</div>:
                    <Link to='/signIn'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            { hidden? null : <CartDropdown /> }
        </div>
    );
}

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);
