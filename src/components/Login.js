import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'


function Login() {
    
    const [users, setUsers] = useState([])

    const [errEmail, setErrEmail] = useState('')
    const [errPass, setErrPass] = useState('')

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login page-content container-fluid contact'>
            <h2>Login</h2>

            <div className='row text-left '>
                {/* ===============login========= */}
                <div className='col-md-6 border-right'>
                    <h3>Sign in</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email" className="form-control" placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <small>{errEmail}</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                aria-describedby="helpId"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <small>{errPass}</small>
                        </div>
                        <button>Sign in</button>
                    </form>
                    <a href='/'>Forgot your password</a>
                </div>

                {/* ==========register======= */}
                <div className='col-md-6'>
                    <h3>Sign up</h3>
                    <p>Create an account for faster checkout</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" name="firstname" id="firstname" className="form-control" placeholder="Firstname" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" name="lastname" id="lastname" className="form-control" placeholder="Lastname" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" name="email2" id="email2" className="form-control" placeholder="Email" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password2" id="password2" className="form-control" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" name="confirm-password" id="confirm-password" className="form-control" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted"></small>
                        </div>

                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
