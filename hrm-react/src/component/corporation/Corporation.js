import React from 'react'
import DataTable from "../userlist/UserList";
import Topbar from "../navbar/Topbar";
import SideNavbar from "../navbar/SideNavbar";

import ProfilePage from "../profile/Profile1";

import {useDispatch, useSelector} from "react-redux";




function Corporation() {

    const dispatch = useDispatch();
    const userRole = useSelector((state) => state.auth.auth.role);


    console.log("user role ", userRole);

    return (

        <body className="sb-nav-fixed">
        <Topbar></Topbar>
        <div id="layoutSidenav">


            {userRole === "Manager"? <SideNavbar></SideNavbar>: <></>
            }

            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Human Resources Management</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">User Profile</li>

                        </ol>

                        <ProfilePage></ProfilePage>
<>
    {
        userRole === "Manager"? <>

            <br/>
            <br/>
            <br/>
            <ol className="breadcrumb mb-4">

                <li className="breadcrumb-item active">User List</li>

            </ol>

            <div className="card mb-4">

                    <DataTable></DataTable>

            </div>
        </>: <></>


    }

</>

                    </div>
                </main>

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
        <script src="/js/scripts.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
                crossOrigin="anonymous"></script>

        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet"/>
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous"></script>

        </body>
    );
}

export default Corporation