import React from 'react'
import UserCreateTable from "../createtables/UserCreateTable";
import CorporationCreateTable from "../createtables/CorporationCreateTable";
import ManagerCreateTable from "../createtables/ManagerCreateTable";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AssignManager from "../updateuser/AssignManager";

function SideNavbar() {


    const userRole = useSelector((state) => state.auth.auth.role);
    const userProfileList = useSelector((state) => state.user.userProfileList);
    const corporationList = useSelector((state) => state.corporation.corporationList);

    console.log("sidenavbar role", userRole)

    return (

        <>

            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">

                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">CREATES</div>
                            {
                                userRole ==="Admin" ?

                                <a className="nav-link">

                                    <ManagerCreateTable></ManagerCreateTable>

                                </a>
                                    :
                                <a className="nav-link" >

                                    <UserCreateTable userList={userProfileList} corporationList={corporationList}>

                                </UserCreateTable>

                                </a>

                            }

                            {userRole === "Admin"  ?
                            <a className="nav-link" >
                                <CorporationCreateTable></CorporationCreateTable>
                            </a>
                                : <></>
                            }
                            {userRole === "Admin"  ?
                            <a className="nav-link" >
                             <AssignManager userList={userProfileList} corporationList={corporationList}></AssignManager>
                            </a>
                                : <></>
                            }



                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo"
                                 data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse"
                                       data-bs-target="#pagesCollapseAuth" aria-expanded="false"
                                       aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i>
                                        </div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                                         data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="login.html">Login</a>
                                            <a className="nav-link" href="register.html">Register</a>
                                            <a className="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>


                                </nav>
                            </div>


                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
        </>

    )
}

export default SideNavbar


