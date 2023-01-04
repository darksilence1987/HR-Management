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

import Particles from "react-tsparticles";

import {loadFull} from "tsparticles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Index() {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {

        setIsShown(current => !current);

    };


    const dispatch = useDispatch();
    const userRole = useSelector((state) => state.auth.auth.role);


    console.log("user role ", userRole);
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    return (

        <body className="sb-nav-fixed" >
<div style={{marginLeft:"10%"}}>
        <Topbar></Topbar>

        <div id="layoutSidenav">
            <Particles
                id="tsparticles"
                init={particlesInit}



                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 0
                    }

                    ,
                    "particles": {
                        "number": {
                            "value":50,
                            "density": {
                                "enable": false,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#0d6efd"

                        },
                        "shape": {
                            "type": "star",
                            "options": {
                                "sides": 5
                            }
                        },
                        "opacity": {
                            "value": 0.8,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 4,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "rotate": {
                            "value": 0,
                            "random": true,
                            "direction": "clockwise",
                            "animation": {
                                "enable": true,
                                "speed": 7,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 400,
                            "color": "#e96900",
                            "opacity": 0.35,
                            "width": 2
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": ["grab"]
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "bubble"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "background": {
                        "color": "#111",
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "cover"
                    }
                }}/>


            {userRole === "Manager" || userRole === "Admin" ? <SideNavbar > </SideNavbar>: <></>
            }

            <div id="layoutSidenav_content">
                <main>

                    <div className="container-fluid px-4 ">
                        <div className="container" style={{paddingTop:"50px"}}>




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
                                userRole === "Manager" ? <>

                                    <br/>
                                    <br/>
                                    <br/>
                                    <Grid container spacing={2}>
                                        <Grid item xs={10}>

                                            <br/>
                                            <div className="card" style={{width: "100%", backgroundColor: "#ff6504"}}>
                                                <h1 className="mt-4 h3"
                                                    style={{ paddingBottom: "10px",
                                                        color: "#4753ab"}}>User List</h1>
                                                <div className="card-body"
                                                     style={{width: "100%", backgroundColor: "white"}}>

                                                    <DataTable style={{width: "100%" }}></DataTable>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    </>    : <></>
                                        }

                            <br/>
                            <br/>
                            <br/>

                                        {userRole === "Admin" ?
                                            <>
                                                <Grid container spacing={2}>


                                                <Grid Grid item xs={10}>
                                                    <br/>
                                                    <div className="card"
                                                         style={{width: "100%", backgroundColor: "#ff6504"}}>
                                                        <h1 className="mt-4 h3" style={{
                                                            paddingBottom: "10px",
                                                            color: "#4753ab"
                                                        }}>Corporation List</h1>
                                                        <div className="card-body"
                                                             style={{width: "100%", backgroundColor: "white"}}>

                                                            <DataTableComp style={{width: "100%"}}></DataTableComp>
                                                        </div>
                                                    </div>
                                                </Grid>

                                            </Grid>

                                            </>       : <></>
                                        }

                            {
                                userRole === "Admin" ? <>

                                    <br/>
                                    <br/>
                                    <br/>
                                    <Grid container spacing={2}>
                                        <Grid item xs={10}>

                                            <br/>
                                            <div className="card" style={{width: "100%", backgroundColor: "#feaf51"}}>
                                                <h1 className="mt-4 h3"
                                                    style={{paddingBottom: "10px", color: "#4753ab"}}>User List</h1>
                                                <div className="card-body"
                                                     style={{width: "100%", backgroundColor: "white"}}>

                                                    <DataTable style={{width: "100%"}}></DataTable>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </>    : <></>
                            }
                            <br/>
                            <br/>
                            <br/>
                                        {userRole === "Admin" ?


                                            <>
                                                <Grid container spacing={2}>
                                            <Grid item xs={10}>

                                                <br/>
                                                <div className="card"
                                                     style={{width: "100%", backgroundColor: "#fc864d"}}>
                                                    <h1 className="mt-4 h3"
                                                        style={{paddingBottom: "10px", color: "#4753ab"}}>Manager
                                                        List</h1>
                                                    <div className="card-body" style={{
                                                        width: "100%",
                                                        backgroundColor: "white",
                                                        borderColor: 'primary.main'
                                                    }}>

                                                        <DataTableManager style={{width: "100%"}}></DataTableManager>
                                                    </div>
                                                </div>
                                            </Grid>
                                                </Grid>
                                            </>    : <></>
                                        }


                                </> : <></>
                            }



                    </div>
                </main>

                <footer className="py-4 bg-light mt-auto" >
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
        </div>

        </body>
    )
}

export default Index
