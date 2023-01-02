import React, {useState} from 'react'
import DataTable from "../userlist/UserList";
import Topbar from "../navbar/Topbar";
import SideNavbar from "../navbar/SideNavbar";

import ProfilePage from "../profile/Profile1";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import DataTableComp from "../corporationlist/CorporationList";
import DataTableManager from "../managerlist/ManagerList";
import {Grid} from "@mui/material";
import logo1 from "../jpegs/logo1.jpg"


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


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

                    <div className="container-fluid px-4 ">
                        <div className="container" style={{paddingTop:"50px"}}>


                            <img style={{opacity: '0.8', position:'center',  borderRadius: '10px', height: '600px', }}   src={logo1} alt="logo"  />

                            <Button style={{position: 'absolute', left:'300px', top:'70px',fontSize:"20px"}}  variant="primary" onClick={handleClick} >

                                <i className="fa-solid fa-user-check fa-1x"></i>
                                <br/>
                                User Profile</Button>


                        </div>

                        {/*<img  style={     { paddingLeft:"50px" , paddingTop:"50px",paddingBottom:"50px"}} src={logo1} alt="logo"  />*/}
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

<br/>
                                                <div  className="card" style={{width : "100%" , backgroundColor:"#feaf51" }}>
                                                    <h1 className="mt-4 h3" style={{paddingBottom:"10px" ,  color:"#4753ab"}}>User List</h1>
                                                    <div  className="card-body"  style={{width : "100%" , backgroundColor:"white"}}>

                                                    <DataTable  style={{width : "100%"}}></DataTable>
                                                    </div>
                                                </div>
                                        </Grid>

                                        <Grid item xs={6}>


                                        </Grid>

                                        <Grid item xs={6}>

                                        </Grid>

                                        <Grid item xs={6}>
                                            <br/>
                                                <div className="card"  style={{width : "100%" , backgroundColor:"#ff6504"}}>
                                                    <h1 className="mt-4 h3" style={{paddingBottom:"10px" ,  color:"#4753ab"}}>Corporation List</h1>
                                                    <div className="card-body" style={{width : "100%" , backgroundColor:"white"}}>

                                                    <DataTableComp style={{width : "100%"}}></DataTableComp>
                                                    </div>
                                                </div>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>

                                            <br/>
                                            <div  className="card" style={{width : "100%" ,backgroundColor:"#fc864d"}}>
                                                <h1 className="mt-4 h3" style={{paddingBottom:"10px" ,  color:"#4753ab"}}>Manager List</h1>
                                                <div  className="card-body" style={{width : "100%" , backgroundColor:"white" , borderColor: 'primary.main'}} >

                                                    <DataTableManager  style={{width : "100%"}}></DataTableManager>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={6}>


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
