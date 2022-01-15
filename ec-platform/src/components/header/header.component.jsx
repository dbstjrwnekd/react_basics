import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from  '../../assets/crown.svg'

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss'

function Header({ currentUser }) {
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
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>:
                    <Link to='/signIn'>SIGN IN</Link>
                }
            </div>
        </div>
    );
}

export default Header;