import { Alert } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import {
    fetchRegister,

} from "../../store/features/AuthSlice";

function RegisterPage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");



    // const [isValid, setIsValid] = useState(false);
    const isSave = useSelector((state) => state.auth.isSave);
    const alertMessage = useSelector((state) => state.auth.alertMessage);
    const auth = useSelector((state) => state.auth.auth);
    // const navigate = useNavigate();


    const dispatch = useDispatch();
    const register = async (e) => {
        e.preventDefault();
        const auth = {
            firstName,
            lastName,
            email,
            password,
        };

        // dispatch(setAuth(auth));

        // if (isValid) {
        //     dispatch(fecthRegister(auth));
        // }

        dispatch(fetchRegister(auth))



        // setTimeout(() => {
        //     dispatch(setIsSave());
        // }, 3000);
    };



    //
    // const navigateLogin = () => {
    //     if (isSave) {
    //         setTimeout(() => {
    //             navigate("/");
    //         }, 3000);
    //     } else {
    //         setTimeout(() => {
    //             dispatch(setIsSave());
    //         }, 3000);
    //     }
    // };

    // useEffect(() => {
    //     navigateLogin();
    // }, [isSave]);
    //
    // useEffect(() => {
    //     checkPassword();
    // }, [rePassword, password]);
    //
    // const checkPassword = async (e) => {
    //     if (password === rePassword) {
    //         setIsVAlid(true);
    //         dispatch(setAllertMsssage(""));
    //     } else {
    //         setIsVAlid(false);
    //         dispatch(setAllertMsssage("Şifreler Uyuşmuyor"));
    //     }
    //     return isValid;
    // };

    return (

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3
                                        className="text-center font-weight-light my-4">Create User</h3></div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input name="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName}  className="form-control" id="inputFirstName" type="text"
                                                               placeholder="Enter your first name"/>
                                                        <label htmlFor="inputFirstName">First name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input name="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} className="form-control" id="inputLastName" type="text"
                                                               placeholder="Enter your last name"/>
                                                        <label htmlFor="inputLastName">Last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="inputEmail"
                                                       placeholder="name@example.com"/>
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input name="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="inputPassword"
                                                               type="password" placeholder="Create a password"/>
                                                        <label htmlFor="inputPassword">Password</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPasswordConfirm"
                                                           name="password"  type="password" value={password}  onChange={(e) => setRePassword(e.target.value)}  placeholder="Confirm password"/>
                                                        <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 mb-0">
                                                <div className="d-grid">
                                                    <button

                                                    onClick={register}
                                                    type={"button"}

                                                >Save

                                                </button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    );
}

export default RegisterPage;