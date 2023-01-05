import "./App.css";
import LoginPage from "./pages/login/LoginPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";
import UserPage from "./pages/userprofile/UserPage";
import Corporation from "./component/corporation/Corporation";
import ApprovedPermissionList from "./component/permissionform/ApprovedPermissionList";
import FinalizedPermission from "./pages/finalizedpermission/FinalizedPermission";
import Index from "./component/home";


function App() {

    const isLogin = useSelector((state) => state.auth.isAuthanticated);


    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={isLogin ?<HomePage></HomePage> :<LoginPage></LoginPage> }
                    ></Route>

                    <Route
                        path="/profilepage"
                        element={ <UserPage></UserPage>}
                    ></Route>
                    <Route
                        path="/approvedList"
                        element={ <FinalizedPermission></FinalizedPermission>}
                    ></Route>
                    <Route
                        path="/corporation"
                        element={ <Corporation></Corporation>}
                    ></Route>


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
