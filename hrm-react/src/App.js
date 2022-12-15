import "./App.css";
import LoginPage from "./pages/login/LoginPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./component/createuser/RegisterPage";
import Chart from "./component/charts/Chart";
import Table from "./component/tables/Table";

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
                        element={ <RegisterPage></RegisterPage>}
                    ></Route>


                    <Route
                        path="/chart"
                        element={ <Chart></Chart>}
                    ></Route>

                    <Route
                        path="/table"
                        element={ <Table></Table>}
                    ></Route>



                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
