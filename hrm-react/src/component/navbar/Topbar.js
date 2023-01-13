import React, {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from "react-redux";
import {findByEmail} from "../../store/features/UserSlice";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PermissionForm from "../permissionform/PermissionForm";
import ExpenseForm from "../expenseform/ExpenseForm";



function Topbar() {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.auth.email);
    const user = useSelector((state) => state.auth.auth);
    console.log("topbar user", user.role);

    const [isShown1, setIsShown1] = useState(false);
    const handleClick = event => {
        setIsShown1(current => !current);
    };

    const logout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.reload();
    }

    return (

        <>

            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3" >Team 3 </a>
                {/*<button type={"button"} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">Main Page </button>*/}
                {/*<Button variant="primary"> <Link to = "/approvedList">Finalized Permission List</Link></Button>*/}

                <PermissionForm></PermissionForm>
                <br/>

                <ExpenseForm></ExpenseForm>



                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..."
                               aria-describedby="btnNavbarSearch"/>
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i
                            className="fas fa-search"></i></button>
                    </div>


                </form>

                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {email}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item ><Link to = "/profilepage">User Profile</Link></Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={logout}>Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
        </>
    )
}

export default Topbar
