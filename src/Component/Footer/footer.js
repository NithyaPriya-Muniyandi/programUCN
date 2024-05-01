import React from "react";
import './footer.css';
const Footer=()=>{
    const currentYear = new Date().getFullYear();

    return(
        <>
    <footer className="footer bg-dark text-center text-white w-100">
         &#169; {currentYear} University of Central Nicaragua. All Rights Reserved.
    </footer>
        </>
    )
}
export default Footer;

