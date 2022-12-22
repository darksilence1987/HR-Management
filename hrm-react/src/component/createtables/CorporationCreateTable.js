import {Alert} from "@mui/material";

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchcreateCorporation} from "../../store/features/CorporationSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


function CorporationCreateTable() {

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [mersisNo, setMersisNo] = useState("");
    const [taxNo, setTaxNo] = useState("");
    const [taxOffice, setTaxOffice] = useState("");
    const [logo, setLogo] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [numberOfEmployees, setNumberOfEmployees] = useState("");
    const [foundationYear, setFoundationYear] = useState("");
    const [contractStart, setContractStart] = useState("");
    const [contractEnd, setContractEnd] = useState("");
    const [status, setStatus] = useState("");

    // const [isValid, setIsValid] = useState(false);
    const isSave = useSelector((state) => state.corporation.isSave);
    const alertMessage = useSelector((state) => state.corporation.alertMessage);
    const corporation = useSelector((state) => state.corporation.corporation);
    // const navigate = useNavigate();


    const dispatch = useDispatch();
    const RegisterCorp = async (e) => {
        e.preventDefault();
        const corporation = {
            name,
            title,
            mersisNo,
            taxNo,
            taxOffice,
            logo,
            phone,
            address,
            email,
            numberOfEmployees,
            foundationYear,
            contractStart,
            contractEnd,
            status,
        };

        dispatch(fetchcreateCorporation(corporation));

    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
        <Button variant="primary" onClick={handleShow}>
            Create Corporation
        </Button>


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Corporation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>


                    <div className="card-body">
                        <form>
                            <div className="row mb-3">


                                <div className="col-md-6" >
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="name" onChange={(e) => setName(e.target.value)}
                                               value={name}
                                               className="form-control" id="inputName" type="text"
                                               placeholder="Enter Company Name"/>
                                        <label htmlFor="inputName">Company Name</label>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="title" onChange={(e) => setTitle(e.target.value)}
                                               value={title} className="form-control" id="inputTitle"
                                               type="text"
                                               placeholder="Enter Company Title"/>
                                        <label htmlFor="inputName">Company Title</label>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="mersisNo" onChange={(e) => setMersisNo(e.target.value)}
                                               value={mersisNo} className="form-control" id="inputMersisNo"
                                               type="text"
                                               placeholder="Enter Company Mersis No"/>
                                        <label htmlFor="inputName">Company Mersis No</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="taxNo"
                                               onChange={(e) => setTaxNo(e.target.value)}
                                               value={taxNo} className="form-control"
                                               id="inputTaxNo" type="text"
                                               placeholder="Enter Company Tax No"/>
                                        <label htmlFor="inputName">Company Tax No</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="taxOffice" onChange={(e) => setTaxOffice(e.target.value)}
                                               value={taxOffice} className="form-control" id="inputTaxOffice"
                                               type="text"
                                               placeholder="Enter Company Tax Office"/>
                                        <label htmlFor="inputName">Company Tax Office</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="logo" onChange={(e) => setLogo(e.target.value)}
                                               value={logo} className="form-control" id="inputLogo"
                                               type="text"
                                               placeholder="Enter Company Logo"/>
                                        <label htmlFor="inputName">Company Logo</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="phone" onChange={(e) => setPhone(e.target.value)}
                                               value={phone}
                                               className="form-control" id="inputPhoto" type="text"
                                               placeholder="Enter Company Phone"/>
                                        <label htmlFor="inputName">Company Phone</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="address" onChange={(e) => setAddress(e.target.value)}
                                               value={address} className="form-control" id="inputAddress"
                                               type="text"
                                               placeholder="Enter Company Addres"/>
                                        <label htmlFor="inputName"> Company Address</label>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="email" onChange={(e) => setEmail(e.target.value)}
                                               value={email} className="form-control" id="inputEmail"
                                               type="text"
                                               placeholder="Enter Company Email Addres"/>
                                        <label htmlFor="inputName"> Company Email Address</label>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="numberOfEmployees"
                                               onChange={(e) => setNumberOfEmployees(e.target.value)}
                                               value={numberOfEmployees} className="form-control"
                                               id="inputNumberOfEmployees"
                                               type="text"
                                               placeholder="Enter Number Of Employees"/>
                                        <label htmlFor="inputName">Number of Employees</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="foundationYear"
                                               onChange={(e) => setFoundationYear(e.target.value)}
                                               value={foundationYear}
                                               className="form-control" id="inputfoundationYear" type="text"
                                               placeholder="Enter Company Foundation Year"/>
                                        <label htmlFor="inputName">Foundation Year</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="contractStart"
                                               onChange={(e) => setContractStart(e.target.value)}
                                               value={contractStart} className="form-control"
                                               id="inputContractStart"
                                               type="text"
                                               placeholder="Enter Contract Start Date"/>
                                        <label htmlFor="inputName">Start of the Contract Day</label>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-3">
                                        <input name="contractEnd"
                                               onChange={(e) => setContractEnd(e.target.value)}
                                               value={contractEnd} className="form-control"
                                               id="inputContractEnd"
                                               type="text"
                                               placeholder="Enter Contract Start Date"/>
                                        <label htmlFor="inputName">Enf of the Contract Day</label>
                                    </div>
                                </div>

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="status" onChange={(e) => setStatus(e.target.value)}
                                                   value={status} className="form-control" id="inputStatus"
                                                   type="text"
                                                   placeholder="Enter Company Status"/>
                                            <label htmlFor="inputName">Company Status</label>
                                        </div>
                                    </div>

                    </div>


                </form>
            </div>

        </Form>
        </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary"  onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" onClick={RegisterCorp}>
            Save Changes
        </Button>
    </Modal.Footer>
</Modal>
</>

)
    ;

}

export default CorporationCreateTable;