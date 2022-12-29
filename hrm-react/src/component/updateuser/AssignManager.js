import {Alert, InputLabel, MenuItem, Select, Stack} from "@mui/material";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, redirect, useNavigate} from "react-router-dom";
import {assignManager, findCompanyWorkers} from "../../store/features/UserSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DataGrid} from "@mui/x-data-grid";
import {Dropdown} from "react-bootstrap";
import AsyncSelect from 'react-select/async';


function AssignManager({userList,corporationList}) {
    const [userInfo, setUserInfo] = useState([]);
    let [user, corporationName] = useState("");
    const [email, setEmail,setUser] = useState("");
    let [showUser,setShowUser] = useState(false);
    let [users,setUsers] = useState([]);
    const [selectedOption, setSelectedOption] = useState([]);
    const handleShow1 = (event) => {
        console.log(event.target.value)
        setShowUser(true)
        setUsers(users);
    };
    const [chosenFilterId, setChosenFilterId] = useState(0);

    const handleChangeCorporation = (event) => {
        corporationName= (event.target.value);
        setChosenFilterId(event.target.value);

        (async () => {
            const compResult = dispatch(await findCompanyWorkers(corporationName))
                .unwrap()
                .then(async (originalPromiseResult) => {
                    console.log(originalPromiseResult)
                    users=  originalPromiseResult
                    console.log(users)
                    handleShow1(event)

                });

        })();

    };

    const dispatch = useDispatch();




    const columns = [
        { field: 'id', headerName: 'ID', width: 70, hide: true },

        { field: 'photo', headerName: 'Photo', width: 120   },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'name', headerName: 'First Name', width: 100 },
        { field: 'surname', headerName: 'Last Name', width: 100},
        { field: 'job', headerName: 'Job', width: 130,hide: true  },
        { field: 'department', headerName: 'Department', width: 130,hide: true  },
        { field: 'phone', headerName: 'Phone', width: 130,hide: true  },
        { field: 'address', headerName: 'Address', width: 130,hide: true  },
        { field: 'role', headerName: 'Role', width: 130,hide: true  },
        {
            field: 'action',
            headerName: 'Action',
            width: 220,
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                const GetUser = () => {
                    setUserInfo(params.row);
                    console.log(userInfo);
                };
                return (
                    <Stack direction="row" spacing={3}>
                        <Button variant="outlined" color="warning" size="small" onClick={GetUser}>
                            <Button variant="primary" onClick={makeManager} >
                            <i className="fa-solid fa-person-arrow-up-from-line"></i> Make Manager
                        </Button></Button>
                        {/*<Button variant="outlined" color="error" size="small" onClick={onClick}>Delete</Button>*/}
                    </Stack>
                );
            },
        },
    ];


    const makeManager = async (e) => {
        e.preventDefault();
        handleClose();
        dispatch(assignManager(userInfo.email));
        setUsers([]);

    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = ()=> setShow(true);
    // useEffect(() => {
    //     loadRows().then(r => r);
    // }, []);
    return (

        <>
            <Button style={{maxWidth: '30px', maxHeight: '100px', minWidth: '190px', minHeight: '100px'}} variant="primary" onClick={handleShow}>
                <i className=" fa-solid fa-person-arrow-up-from-line fa-2x"></i>

                <br/>
                Assign Manager
            </Button>


            <Modal show={show} onHide={handleClose}   size="lg" >
                <Modal.Header closeButton>
                    <Modal.Title>Assign Manager</Modal.Title>
                </Modal.Header>
                <Modal.Body className="card-body"  >
                    <Form id="form4" >

                        <div className="card-body " id="form3" >
                            <form id="form1"  style={{width: '450px' , height:'500px' }}>
                                <div className="row mb-3 ">


                                    <div className="col-md-12">
                                        <InputLabel id="corporate-select-label">Select the Company:</InputLabel>

                                        <div className="form-floating mb-3"   >

                                            <Select sx={{width: 725, height: 50 }}
                                                    placeholder="Type to search"
                                                    labelId="corporate-select-label"
                                                    id="corporate-select"
                                                    defaultValue=""
                                                    label="Corporate List"


                                                    onChange={handleChangeCorporation}
                                            >
                                                {corporationList.map((option, index) => {
                                                    return (
                                                        <MenuItem value={option.name} key={index}>
                                                            {option.name}
                                                        </MenuItem>)}
                                                )};

                                            </Select>
                                        </div>
                                        <InputLabel id="user-select-label" >User List</InputLabel>

                                        <DataGrid
                                            style={{width: '725px' , height:'400px' }}
                                            show={showUser}
                                            rows={users}
                                            columns={columns}
                                            pageSize={5}
                                            rowsPerPageOptions={[5]}
                                            disableMultipleSelection={true}
                                        />

                                    </div>

                                </div>
                            </form>
                        </div>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AssignManager;


