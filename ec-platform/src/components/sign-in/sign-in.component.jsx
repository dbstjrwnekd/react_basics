import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        setEmail(email);
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

                <CustomButton type='submit'onClickHandler={submitHandler}> Sign in </CustomButton>
            </form>
        </div>
    );
}

export default SignIn;