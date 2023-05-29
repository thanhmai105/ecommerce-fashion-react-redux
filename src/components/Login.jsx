import React from 'react';
import SignUp from './auth/SignUp'
import SignIn from './auth/SignIn';
import { useSelector } from 'react-redux';

function Login() {
    const { errMess } = useSelector(state => state.user)

    if (errMess) {
        return <div className='login page-content container-fluid contact'>{errMess}</div>
    }
    return (
        <div className='login page-content container-fluid contact'>
            <h2>Login</h2>
            <div className='row text-left'>
                <SignIn />
                <SignUp />
            </div>
        </div>
    );
}

export default Login;
