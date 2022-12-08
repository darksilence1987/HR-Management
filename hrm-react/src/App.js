import "./App.css";
import LoginPage from "./pages/login/LoginPage";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/home/HomePage";

function App() {
    // const isLogin = useSelector((state) => state.auth.isAuthenticated);
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<LoginPage></LoginPage>}
                    ></Route>

                    <Route
                        path="/homepage"
                        element={<HomePage></HomePage>}
                    ></Route>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
