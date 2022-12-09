import "./App.css";
import LoginPage from "./pages/login/LoginPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";

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


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
