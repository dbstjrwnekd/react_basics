import React, { useState, useEffect } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import './sign-up.styles.scss';

function SignUp() {
    const [userInfo, setUserInfo] = useState({
        'displayName': '',
        'email': '',
        'password': '',
        'confirmPassword': ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = userInfo;
        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }

        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            
            await createUserProfileDocument(user, {displayName});
            setUserInfo({
                'displayName': '',
                'email': '',
                'password': '',
                'confirmPassword': ''
            });
        }catch(err) {
            console.err(err);
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]:value });
    }

    const { displayName, email, password, confirmPassword } = userInfo;
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    );
}

export default SignUp;