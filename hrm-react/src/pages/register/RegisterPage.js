import { Alert } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
// import {
//     fecthRegister,
//     setAllertMsssage,
//     setAuth,
//     setIsSave,
// } from "../../store/features/AuthSlice";

function RegisterPage() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");



    // const [isValid, setIsVAlid] = useState(false);
    // const isSave = useSelector((state) => state.auth.isSave);
    // const alertMessage = useSelector((state) => state.auth.alertMessage);
    // const auth = useSelector((state) => state.auth.auth);
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
        <body className="bg-primary">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3
                                        className="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="text"
                                                               placeholder="Enter your first name"/>
                                                        <label htmlFor="inputFirstName">First name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="inputLastName" type="text"
                                                               placeholder="Enter your last name"/>
                                                        <label htmlFor="inputLastName">Last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" type="email"
                                                       placeholder="name@example.com"/>
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPassword"
                                                               type="password" placeholder="Create a password"/>
                                                        <label htmlFor="inputPassword">Password</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPasswordConfirm"
                                                               type="password" placeholder="Confirm password"/>
                                                        <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><a className="btn btn-primary btn-block"
                                                                           href="login.html">Create Account</a></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="login.html">Have an account? Go to login</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                crossOrigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        </body>
    );
}

export default RegisterPage;