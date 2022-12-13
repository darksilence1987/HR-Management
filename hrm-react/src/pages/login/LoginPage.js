import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../store/features/AuthSlice";
import {useNavigate} from "react-router-dom";


export default function SignIn() {

    const dispatch = useDispatch();
// const navigate = useNavigate()
    const [auth, setAuth] = useState({
        email: "",
        password: "",
    });
    const doLogin =  () => {
     dispatch(fetchLogin(auth));
       // await navigate("/");


    };
    const onChangeAuth = (e) => {
        const { name, value } = e.target;
        setAuth({ ...auth, [name]: value });
    };

    return (

        <body className="bg-light">
        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3
                                        className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body bg-gray-300">
                                        <form>
                                            <div className="form-floating mb-3">
                                                <input onChange={onChangeAuth} className="form-control" name="email"  type="email"
                                                       placeholder="name@example.com"/>
                                                <label >Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input onChange={onChangeAuth} className="form-control" name="password" type="password"
                                                       placeholder="Password"/>
                                                <label >Password</label>
                                            </div>
                                            <div className="form-check mb-3">
                                                <input className="form-check-input" id="inputRememberPassword"
                                                       type="checkbox" value=""/>
                                                <label className="form-check-label" htmlFor="inputRememberPassword">Remember
                                                    Password</label>
                                            </div>
                                            <div
                                                className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <a className="small" href="password.html">Forgot Password?</a>
                                                <a onClick={doLogin} className="btn btn-primary" >Login</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="register.html">Need an account? Sign up!</a>
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
        </body>

    );
}
