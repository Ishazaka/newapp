import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className='App'>
                <div className='linkss'>
                    <Link to="/" >Home</Link>
                    <Link to="/blog" >Blog</Link>
                    <Link to="/contact" >Contact</Link>
                </div>
            </div>


        </>

    )
}

export default Navbar;