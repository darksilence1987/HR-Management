import "./App.css";
import LoginPage from "./pages/login/LoginPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";
import UserCreateTable from "./component/createuser/UserCreateTable";
import Chart from "./component/charts/Chart";
import Table from "./component/userlist/UserList";

function App() {

    const isLogin = useSelector((state) => state.auth.isAuthanticated);
    console.log("isLogin degeri", isLogin);

    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={isLogin ?<HomePage></HomePage> :<LoginPage></LoginPage> }
                    ></Route>

                    <Route
                        path="/register"
                        element={ <UserCreateTable></UserCreateTable>}
                    ></Route>


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
