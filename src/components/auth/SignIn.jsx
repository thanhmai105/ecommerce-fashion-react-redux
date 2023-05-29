import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/ActionCreator';
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ModalComponent from '../modal/ModalComponent';
import { Button } from 'react-bootstrap';
import { Icons } from '../../icon';

function SignIn() {
    const dispatch = useDispatch()
    const { listUser } = useSelector(state => state.user)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const { email, password } = watch()
    const { push } = useHistory()
    const [showModal, setShowModal] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const handleSignIn = () => {
        const findUser = listUser.find(item => item.email === email && item.password === password)
        if (email && password) {
            if (findUser) {
                return push('/home', findUser)
            }
            return setShowModal(true)
        }
        return setShowModal(false)
    }

    const handleButtonModal = () => {
        setShowModal(false)
    }

    return (
        <div className='col-md-6 border-right'>
            <h3>Sign in</h3>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <div className="form-group">
                    <label htmlFor="email" className='control-label'>Email</label>
                    <div className="form-control">
                        <input
                            type="text"
                            name="email"
                            id="email" placeholder="Email"
                            {...register("email", { required: "Email is required !" })}
                        />
                    </div>
                    <small id="helpId" className="text-muted">{errors?.email?.message}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="password" className='control-label'>Password</label>
                    <div style={{ display: 'flex', alignItems: 'center' }} className="form-control">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            aria-describedby="helpId"
                            {...register("password", { required: "Password is required !" })}
                        />
                        <Button style={{ backgroundColor: 'white', margin: '0', width: 'auto', height: 'auto', display: 'flex', alignItems: 'center' }} onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <Icons.OpenEyes style={{ color: 'black' }} /> : <Icons.CloseEyes style={{ color: 'black' }} />}
                        </Button>
                    </div>
                    <small id="helpId" className="text-muted">{errors?.password?.message}</small>
                </div>
                <button onClick={handleSignIn}>Sign in</button>
            </form>
            <a href='/'>Forgot your password</a>
            <ModalComponent title="Error" subTitle="Email or password incorrect.Please check again!" labelBtn="Close" showModal={showModal} onClick={handleButtonModal} link="login" />
        </div>
    );
}

export default SignIn;
