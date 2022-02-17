import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from  '../../assets/crown.svg'

import { auth } from '../../firebase/firebase.utils';
import { signOut } from 'firebase/auth';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser, selectCartHidden } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

function Header({ currentUser, hidden }) {
    return (
        <HeaderContainer>
            <LogoContainer to ='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to ='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to ='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser?
                    <OptionLink as='div' onClick={() => signOut(auth)}>SIGN OUT</OptionLink>:
                    <Link to='/signIn'>SIGN IN</Link>
                }
                <CartIcon />
            </OptionsContainer>
            { hidden? null : <CartDropdown /> }
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
