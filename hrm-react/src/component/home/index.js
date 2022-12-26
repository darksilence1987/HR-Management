import React, {useState} from 'react'
import DataTable from "../userlist/UserList";
import Topbar from "../navbar/Topbar";
import SideNavbar from "../navbar/SideNavbar";

import ProfilePage from "../profile/Profile1";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import DataTableComp from "../companylist/CorporationList";
import DataTableManager from "../managerlist/ManagerList";
import {Grid} from "@mui/material";



function Index() {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {

        setIsShown(current => !current);

    };


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
                        <h1 className="mt-4 h1">Human Resources Management</h1>
                        <Button   variant="primary" onClick={handleClick}>Get User Profile</Button>

                        {isShown && (
                            <>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item active">User Profile</li>
                                </ol>
                                <ProfilePage></ProfilePage>


                            </>
                        )}
                        <>
                            {
                                userRole === "Manager" || userRole === "Admin"  ? <>

                                    <br/>
                                    <br/>
                                    <br/>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <h1 className="mt-4 h3">User List</h1>
                                            <br/>
                                                <div  className="card" style={{width : "100%"}}>
                                                    <div  className="card-body">

                                                    <DataTable  style={{width : "100%"}}></DataTable>
                                                    </div>
                                                </div>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <h1 className="mt-4 h3">Company List</h1>
                                            <br/>
                                                <div className="card"  style={{width : "100%"}}>
                                                    <div className="card-body">

                                                    <DataTableComp style={{width : "100%"}}></DataTableComp>
                                                    </div>
                                                </div>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <h1 className="mt-4 h3">Manager List</h1>
                                            <br/>
                                            <div  className="card" style={{width : "100%"}}>
                                                <div  className="card-body">

                                                    <DataTableManager  style={{width : "100%"}}></DataTableManager>
                                                </div>
                                            </div>
                                        </Grid>

                                    </Grid>
                                </> : <></>
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
    )
}

export default Index