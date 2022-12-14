import React, {} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from "react-redux";
import {findByEmail} from "../../store/features/UserSlice";


function Topbar() {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.email);
    const auth = useSelector((state) => state.auth);

    console.log("auth", auth);
    console.log("email", email);

    const getUser = async () => {
        const response = await dispatch(findByEmail({email}));
    };

    React.useEffect(() => {
        getUser();
    }, []);



    return (

        <>

            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand ps-3" >Human Resources Management </a>

                <button type={"button"} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
                    className="fas fa-bars"></i> </button>

                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..."
                               aria-describedby="btnNavbarSearch"/>
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i
                            className="fas fa-search"></i></button>
                    </div>
                </form>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                {/*<ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">*/}
                {/*    <li className="nav-item dropdown">*/}
                {/*        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button"*/}
                {/*           data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>*/}
                {/*        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">*/}
                {/*            <li><a className="dropdown-item" href="#">Action</a></li>*/}
                {/*            <li><a className="dropdown-item" href="#">Another action</a></li>*/}
                {/*            <li><a className="dropdown-item" href="#">Something else here</a></li>*/}

                {/*        </ul>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </nav>







        </>

    )
}

export default Topbar