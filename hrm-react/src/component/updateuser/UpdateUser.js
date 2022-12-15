import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {fetchLogin} from "../../store/features/AuthSlice";
import {updateuserfromuser} from "../../store/features/UserSlice";

function GridComplexExample() {

    const dispatch = useDispatch();

    const email = useSelector((state) => state.auth.auth.email);
// const navigate = useNavigate()
    const [user, setUser] = useState({
        address: "",
        phone: "",
        photo: "",
    });
    const update =  () => {
        dispatch(updateuserfromuser(user, email));
        // await navigate("/");

    };
    const onChangeUser = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3
                            className="text-center font-weight-light my-4">Update User</h3></div>
                        <div className="card-body">
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

                                <div className="mt-4 mb-0">
                                    <div className="d-grid">
                                        <button  onClick={update} type={"button"}>Update</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default GridComplexExample;