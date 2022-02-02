import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setEmail('');
            setPassword('');
        } catch (err){
            console.error(err);
        }
    }

    const changeHandler = (e) => {
        const { value, name } = e.target;

        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }

    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form>
                <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={changeHandler} 
                    label='Email'
                    value={email} 
                    required />
                <FormInput
                    name='password'
                    type='password'
                    handleChange={changeHandler}
                    label='Password'
                    value={password}
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit' onClick={submitHandler}> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;