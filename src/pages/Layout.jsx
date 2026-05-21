import React from "react";
import HeaderPage from "./HeaderPage/HeaderPage";
import FooterPage from "./FooterPage/FooterPage";
function Layout({children}){
    return(
        <>
        <HeaderPage/>
        {children}
        <FooterPage/>
        </>
    );
}
export default Layout;