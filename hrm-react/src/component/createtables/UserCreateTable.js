import {Alert, MenuItem, Select} from "@mui/material";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, redirect, useNavigate} from "react-router-dom";
import {fetchUserCreate} from "../../store/features/UserSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function UserCreateTable({userList,userCorporationName}) {

    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [surname, setSurname] = useState("");
    const [secondName, setSecondName] = useState("");
    const [secondSurname, setSecondSurname] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [birthPlace, setBirthPlace] = useState("");
    const [startDate, setStartDate] = useState("");
    const [job, setJob] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [corporationName, setCorporationName] = useState(userCorporationName);
    const [role, setRole] = useState("Employee");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    // const [isValid, setIsValid] = useState(false);
    const isSave = useSelector((state) => state.auth.isSave);
    const alertMessage = useSelector((state) => state.auth.alertMessage);
    const auth = useSelector((state) => state.auth.auth);
    // const navigate = useNavigate();


    const dispatch = useDispatch();


    const register = async (e) => {
        e.preventDefault();
        handleClose();
        const auth = {
            photo,
            name,
            surname,
            secondName,
            secondSurname,
            birthDate,
            birthPlace,
            startDate,
            job,
            department,
            email,
            phone,
            address,
            corporationName,
            role,
        };
        dispatch(fetchUserCreate(auth));
    };



    function handleChange(e) {

        setPhoto(URL.createObjectURL(e.target.files[0]));
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = ()=> setShow(true);
    return (
        <>
            <Button style={{maxWidth: '30px', maxHeight: '100px', minWidth: '190px', minHeight: '100px'}} variant="primary" onClick={handleShow}>
                <i className="fa-solid fa-user-plus fa-2x"></i>

                <br/>
                Create User
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="card-body">
                            <form>
                                <div className="row mb-3">


                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="name" onChange={(e) => setName(e.target.value)} value={name}
                                                   className="form-control" id="inputName" type="text"
                                                   placeholder="Enter your name"/>
                                            <label htmlFor="inputName">Name</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="surname" onChange={(e) => setSurname(e.target.value)}
                                                   value={surname} className="form-control" id="inputSurname"
                                                   type="text"
                                                   placeholder="Enter your  surname"/>
                                            <label htmlFor="inputName">Surname</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="secondName" onChange={(e) => setSecondName(e.target.value)}
                                                   value={secondName} className="form-control" id="inputSecondName"
                                                   type="text"
                                                   placeholder="Enter your  secondname"/>
                                            <label htmlFor="inputName">SecondName</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="secondSurname"
                                                   onChange={(e) => setSecondSurname(e.target.value)}
                                                   value={secondSurname} className="form-control"
                                                   id="inputSecondSurname" type="text"
                                                   placeholder="Enter your  secondSurname"/>
                                            <label htmlFor="inputName">SecondSurname</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="birthDate" onChange={(e) => setBirthDate(e.target.value)}
                                                   value={birthDate} className="form-control" id="inputBirthDate"
                                                   type="date"
                                                   placeholder="Enter your  birthDate"/>
                                            <label htmlFor="inputName">BirthDate</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="birthPlace" onChange={(e) => setBirthPlace(e.target.value)}
                                                   value={birthPlace} className="form-control" id="inputBirthPlace"
                                                   type="text"
                                                   placeholder="Enter your  birthPlace"/>
                                            <label htmlFor="inputName">BirthPlace</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="startDate" onChange={(e) => setStartDate(e.target.value)}
                                                   value={startDate} className="form-control" id="inputStartDate"
                                                   type="date"
                                                   placeholder="Enter your  startDate"/>
                                            <label htmlFor="inputName">StartDate</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="job" onChange={(e) => setJob(e.target.value)} value={job}
                                                   className="form-control" id="inputJob" type="text"
                                                   placeholder="Enter your  job"/>
                                            <label htmlFor="inputName">Job</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="department" onChange={(e) => setDepartment(e.target.value)}
                                                   value={department} className="form-control" id="inputDepartment"
                                                   type="text"
                                                   placeholder="Enter your department"/>
                                            <label htmlFor="inputName">Department</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <PhoneInput name="phone" onChange={setPhone} value={phone}
                                                   className="form-control" id="inputPhone"
                                                   placeholder="Enter your phone"
                                            />
                                            <label htmlFor="inputName">Phone</label>
                                        </div>
                                    </div>


                                    <div className="col-md-6">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input name="address" onChange={(e) => setAddress(e.target.value)}
                                                   value={address} className="form-control" id="inputAddress"
                                                   type="text"
                                                   placeholder="Enter your address"/>
                                            <label htmlFor="inputName">Address</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <input name="email" onChange={(e) => setEmail(e.target.value)} value={email}
                                               type="email" className="form-control" id="inputEmail"
                                               placeholder="name@example.com"/>
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>

                                    </div>



                                    <div className="col-md-6">

                                        <p>Photo</p>
                                        <div className="form-floating mb-3 mb-md-0 ">


                                            {/*<label htmlFor="inputName">Photo</label>*/}
                                            <input name="photo" type="file" onChange={handleChange}
                                                   className="form-control" id="inputPhoto"
                                            />
                                            {/*<img src={photo} />*/}
                                            
                                        </div>
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
                    <Button variant="primary" onClick={register} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UserCreateTable;
