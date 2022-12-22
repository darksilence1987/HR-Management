import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {fetchLogin} from "../../store/features/AuthSlice";
import {updateuserfromuser} from "../../store/features/UserSlice";
import Modal from 'react-bootstrap/Modal';

function GridComplexExample() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const email = useSelector((state) => state.auth.auth.email);
// const navigate = useNavigate()
    const [user, setUser] = useState({
        address: "",
        phone: "",
        photo: "",
        email:"",
    });
    const update =  () => {
        dispatch(updateuserfromuser(user));
        // await navigate("/");

    };
    const onChangeUser = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update User
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="form-floating mb-3 mb-md-0">
                                        <input name="address" onChange={onChangeUser} className="form-control" id="inputAddress" type="text"
                                               placeholder="Enter your address"/>
                                        <label htmlFor="inputAddress">Address</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input name="phone" onChange={onChangeUser} className="form-control" id="inputPhone" type="text"
                                               placeholder="Enter your phone"/>
                                        <label htmlFor="inputPhone">Phone</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <input name="photo" onChange={onChangeUser} type="text" className="form-control" id="inputPhoto"
                                       placeholder="photo"/>
                                <label htmlFor="inputPhoto">Photo</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input name="email" onChange={onChangeUser} type="email" className="form-control" id="inputEmail"
                                       placeholder="email"/>
                                <label htmlFor="inputPhoto">Email</label>
                            </div>

                            {/*<div className="mt-4 mb-0">*/}
                            {/*    <div className="d-grid">*/}
                            {/*        <button  onClick={update} type={"button"}>Update</button></div>*/}
                            {/*</div>*/}
                        </form>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={update}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}

export default GridComplexExample;


