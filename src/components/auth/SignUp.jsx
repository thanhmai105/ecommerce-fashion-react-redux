import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'
import { signUp } from '../../redux/ActionCreator'
import ModalComponent from '../modal/ModalComponent';

function SignUp() {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
        }
    });
    const { password } = watch()
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const onSubmit = data => {
        dispatch(signUp(data))
            .then(() => {
                reset()
                setShowModal(true)
            })
            .catch(() => {
                return 1
            })
    };

    const handleButtonModal = () => {
        setShowModal(false)
    }

    return (
        <div className='col-md-6'>
            <h3>Sign up</h3>
            <p>Create an account for faster checkout</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="firstName" className="control-label">Firstname</label>
                    <div className="form-control">
                        <input type="text" name="firstName" id="firstName" placeholder="Firstname" aria-describedby="helpId" {...register("firstName", { required: "Firstname is required !", maxLength: 60, })} />
                    </div>
                    <small id="helpId" className="text-muted">{errors?.firstName?.message}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName" className="control-label">Lastname</label>
                    <div className="form-control">
                        <input type="text" name="lastName" id="lastName" placeholder="Lastname" aria-describedby="helpId" {...register("lastName", { required: "Lastname is required !" })} />
                    </div>
                    <small id="helpId" className="text-muted">{errors?.lastName?.message}</small>
                </div>
                <div className="form-group" >
                    <label htmlFor="email" className="control-label">Email</label>
                    <div className="form-control">
                        <input type="text" name="email" placeholder="Email" aria-describedby="helpId" {...register("email", {
                            required: "Email is required !", validate: (value) => {
                                if (!value.match(regex)) {
                                    return 'Invalid email';
                                }
                                return true
                            }
                        })} />
                    </div>
                    <small id="helpId" className="text-muted">{errors?.email?.message}</small>
                </div>
                <div className="form-group" >
                    <label htmlFor="password" className="control-label">Password</label>
                    <div className="form-control">
                        <input type="password" name="password" aria-describedby="helpId" {...register("password", {
                            required: "Password is required !",
                            validate: (value) => {
                                if (!value.match(regexPass)) {
                                    return 'Password must be have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character';
                                }
                                return true
                            }
                        })} />
                    </div>
                    <small id="helpId" className="text-muted">{errors?.password?.message}</small>
                </div>
                <div className="form-group" >
                    <label htmlFor="confirmPassword" className="control-label">Confirm Password</label>
                    <div className="form-control">
                        <input type="password" name="confirmPassword" id="confirmPassword" aria-describedby="helpId" {...register("confirmPassword", {
                            required: "Confirm password is required !", maxLength: 60, validate: (val) => {
                                if (password !== val) {
                                    return "Your passwords do no match";
                                } return true
                            },
                        })} />
                    </div>
                    <small id="helpId" className="text-muted">{errors?.confirmPassword?.message}</small>
                </div>

                <button data-toggle="modal" data-target="#exampleModal">Register</button>
            </form>
            <ModalComponent title="Success" subTitle="You register success. Please login" labelBtn="Close" showModal={showModal} onClick={handleButtonModal} link="home" />
        </div>
    );
}

export default SignUp;
