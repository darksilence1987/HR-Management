import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import {Stack, Button} from "@mui/material";
import {findallCorporation} from "../../store/features/CorporationSlice";
import {Modal} from "react-bootstrap";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBIcon,
    MDBRow,
    MDBTypography
} from "mdb-react-ui-kit";
import {useState} from "react";



export default function DataTableComp() {

    const [companyInfo, setCompanyInfo] = useState([]);
    const columns = [
        { field: 'id', headerName: 'ID', width: 100, hide: true },

        { field: 'name', headerName: 'Company  Name', width: 200 },
        { field: 'title', headerName: 'Title', width: 200 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'phone', headerName: 'Phone', width: 120,hide: true },
        { field: 'address', headerName: 'Address', width: 100, hide: true },

        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            sortable: false,
            disableClickEventBubbling: true,

            renderCell: (params) => {
                const GetCompany = (e) => {
                    setCompanyInfo(params.row);


                //     return alert(JSON.stringify(currentRow, null, 4));
                };

                return (

                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" color="warning" size="small" onClick={GetCompany}><Button variant="primary" onClick={handleShow}>
                            DETAILS
                        </Button></Button>
                        {/*<Button variant="outlined" color="error" size="small" onClick={onClick}>Delete</Button>*/}
                    </Stack>
                );
            },
        },


    ];



    const dispatch = useDispatch();


    const findAllCorporation = async () =>{
        const response = await dispatch(findallCorporation());

    }
    const corporationListUpdate = useSelector((state) => state.corporation.corporationListUpdate);
    const corporationList = useSelector((state) => state.corporation.corporationList);
    const corporation = useSelector((state) => state.corporation.corporation);

    console.log("corporationListUpdate", corporationListUpdate);

    React.useEffect(() => {
        findAllCorporation()},
        [corporationListUpdate]);
    // React.useEffect(() => {
        // findAllCorporation().then(r => r);},
        // [corporationListUpdate]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
        <div className="container">

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={corporationList}
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

                        {/*<MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"*/}
                        {/*              className="ms-4 rounded-circle" fluid style={{ width: '250px' }} />*/}

                        <MDBTypography tag="h1">{companyInfo.name} </MDBTypography>

                        <MDBCardText className="text-muted mb-4">
                            {companyInfo.id} <span className="mx-2">|</span> <a href="#!">{companyInfo.email}</a>
                        </MDBCardText>

                        <MDBTypography tag="h4">{companyInfo.title}</MDBTypography>
                        <br/>
                        <MDBTypography tag="h4">{companyInfo.address}</MDBTypography>
                        <br/>
                        <MDBTypography tag="h4">{companyInfo.phone}</MDBTypography>
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
                            Message now
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
</>
    );
}