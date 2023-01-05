import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from "react-redux";
import {permissionCreate} from "../../store/features/PermissionSlice";
import {render} from "react-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {fetchUserCreate} from "../../store/features/UserSlice";


function PermissionForm() {

    const userEmail = useSelector((state) => state.auth.auth.email);


    const [permissionType, setPermissionType] = useState("");
    const [dayAmount, setDayAmount] = useState("");
    const [startDate, setStartDate] = useState("");

const dispatch = useDispatch();

    const createPermission = async () => {

        const permission = {
            userEmail,
            permissionType,
            dayAmount,
            startDate,

        };
        dispatch(permissionCreate(permission));
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

    }, []);




    return (
        <>
            <Button variant="primary" onClick={handleShow}>
               Create Permission Request
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Permission Type</Form.Label>
                            <Form.Control
                                name="permissionType" onChange={(e) => setPermissionType(e.target.value)} value={permissionType}

                                type="text"
                                placeholder="Permission Type"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Day</Form.Label>
                            <Form.Control
                                name="dayAmount" onChange={(e) => setDayAmount(e.target.value)} value={dayAmount}

                                type="number"
                                placeholder="Number of Days"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control
                                name="startDate" onChange={(e) => setStartDate(e.target.value)} value={startDate}

                                type="date"
                                placeholder="Start Date"
                                autoFocus
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createPermission}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PermissionForm