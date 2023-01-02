import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import {findallUser} from "../../store/features/UserSlice";
import {Stack, Button} from "@mui/material";
import {Form, Modal} from "react-bootstrap";
import Topbar from "../navbar/Topbar";
import {render} from "react-dom";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer, MDBIcon,
    MDBRow,
    MDBTypography
} from "mdb-react-ui-kit";
import {sendMail} from "../../store/features/MailSlice";




export default function DataTable() {

const [userInfo, setUserInfo] = useState([]);



  const columns = [
    { field: 'id', headerName: 'ID', width: 70, hide: true  },

      { field: 'photo', headerName: 'Photo', width: 200 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'name', headerName: 'First Name', width: 300 },
    { field: 'surname', headerName: 'Last Name', width: 130, hide: true },

    // { field: 'secondName', headerName: 'Second Name', width: 130, hide: true  },
    // { field: 'secondSurname', headerName: 'Second Surname', width: 130, hide: true   },
    // { field: 'birthDate', headerName: 'Birth Date', width: 130, hide: true  },
    // { field: 'birthPlace', headerName: 'Birth Place', width: 130,hide: true  },
    // { field: 'startDate', headerName: 'Start Date', width: 130,hide: true  },
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
        };
        return (

            <Stack direction="row" spacing={2}>
              <Button variant="outlined" color="warning" size="small" onClick={GetUser}><Button variant="primary" onClick={handleShow}>
                DETAILS
              </Button></Button>
              {/*<Button variant="outlined" color="error" size="small" onClick={onClick}>Delete</Button>*/}
            </Stack>
        );
      },
    },


  ];

  const dispatch = useDispatch();


  const findAllUser = async () =>{
    const response = await dispatch(findallUser());


  }
  const userListUpdate = useSelector((state) => state.user.userListUpdate);
  const userProfileList = useSelector((state) => state.user.userProfileList);


  const user = useSelector((state) => state.user.userProfile);


  React.useEffect(() => {
    findAllUser();
  }, [userListUpdate]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("user info", userInfo);




    const [mail, setMail] = useState({
        mailAdres: "",
        icerik: "",
        konu: "",

    });

    console.log("mailim", mail)
    const sendEmail =  () => {
        dispatch(sendMail(mail));

    };
    const onChangeMail = (e) => {
        const { name, value } = e.target;
        setMail({ ...mail, [name]: value });
    };

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);






    return (
      <>
      <div className="container">

        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
              rows={userProfileList}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}

              isCellEditable={(params) => params.row.age % 2 === 0}
              experimentalFeatures={{ newEditingApi: true }}
              disableMultipleSelection={true}


          />
        </div>
      </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>User Information</Modal.Title>
            </Modal.Header>
                                <MDBRow className="justify-content-center align-items-center">
                                    <MDBCol md="8" xl="8">
                                        <MDBCard style={{ borderRadius: '15px' }}>
                                            <MDBCardBody className="text-center">

                                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                                                  className="ms-4 rounded-circle" fluid style={{ width: '250px' }} />

                                                <MDBTypography tag="h4">{userInfo.name} + {userInfo.surname}</MDBTypography>

                                                <MDBCardText className="text-muted mb-4">
                                                    {userInfo.phone} <span className="mx-2">|</span> <a href="#!">{userInfo.email}</a>
                                                </MDBCardText>

                                                <MDBTypography tag="h4">{userInfo.role}</MDBTypography>
                                                <br/>
                                                <MDBTypography tag="h4">{userInfo.address}</MDBTypography>
                                                <br/>
                                                <MDBTypography tag="h4">{userInfo.department}</MDBTypography>
                                                <br/>
                                                <div className="mb-4 pb-2">
                                                    <MDBBtn outline floating>
                                                        <MDBIcon fab icon="facebook" size="lg" />
                                                    </MDBBtn>
                                                    <MDBBtn outline floating className="mx-1">
                                                        <MDBIcon fab icon="twitter" size="lg" />
                                                    </MDBBtn>
                                                    <MDBBtn outline floating>
                                                        <MDBIcon fab icon="skype" size="lg" />
                                                    </MDBBtn>
                                                </div>
                                                <MDBBtn rounded size="lg">

                                                    <Button variant="primary" onClick={handleShow1}>
                                                       Send Mail
                                                    </Button>

                                                </MDBBtn>

                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>





          <Modal show={show1} onHide={handleClose1}>
              <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                              onChange={onChangeMail}
                              name = "mailAdres"
                              placeholder="name@example.com"
                              autoFocus
                          />
                      </Form.Group>
                      <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                      >
                          <Form.Label>İçerik</Form.Label>
                          <Form.Control
                              onChange={onChangeMail}
                              name="icerik"
                              as="textarea" rows={3} />
                      </Form.Group>

                      <Form.Group

                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                      >
                          <Form.Label>Konu</Form.Label>
                          <Form.Control
                              onChange={onChangeMail}
                              name="konu"
                              as="textarea" rows={3} />
                      </Form.Group>

                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose1}>
                      Close
                  </Button>
                  <Button variant="primary" onClick={sendEmail}>
Send
                  </Button>
              </Modal.Footer>
          </Modal>


        </>
  );
}