import React from 'react'
import Index from "../../component/home";
import {Outlet} from "react-router-dom";
function HomePage() {

    return (
        <>
       <Index></Index>
        <Outlet />

        </>
    )
}

export default HomePage