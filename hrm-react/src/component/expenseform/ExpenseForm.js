import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from "react-redux";
import {expenseCreate} from "../../store/features/ExpenseSlice";


function ExpenseForm() {

    const userEmail = useSelector((state) => state.auth.auth.email);

    const [expenseName, setExpenseName] = useState("");
    const [expenseDescription, setExpenseDescription] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");

    const dispatch = useDispatch();

    const createExpense = async () => {

        const expense = {
            userEmail,
            expenseDescription,
            expenseName,
            expenseAmount,
            expenseDate,

        };
        dispatch(expenseCreate(expense));
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {

    }, []);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create Expense Request
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Expense Request Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Expense Name</Form.Label>
                            <Form.Control
                                name="expenseName" onChange={(e) => setExpenseName(e.target.value)} value={expenseName}
                                type="text"
                                placeholder="Expense Name"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Expense Amount</Form.Label>
                            <Form.Control
                                name="expenseAmount" onChange={(e) => setExpenseAmount(e.target.value)} value={expenseAmount}
                                type="number"
                                placeholder="Expense Amount"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Start Date</Form.Label>

                            <Form.Control
                                name="expenseDate" onChange={(e) => setExpenseDate(e.target.value)} value={expenseDate}

                                type="date"
                                placeholder="Expense Date"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group controlId="formFileLg" className="mb-3">

                            <Form.Label>Upload Invoice</Form.Label>

                            <Form.Control
                                    name="expenseDescription" onChange={(e) => setExpenseDescription(e.target.value)} value={expenseDescription}

                                type="file"

                                size="lg" />
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createExpense}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ExpenseForm