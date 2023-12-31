import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{ backgroundColor: "#e3dac9" }}>

                <a className="navbar-brand" href="#">Digital E-Commerce Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Catalog<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>

                    </ul>
                </div>

            </nav>

        </>
    );
}

export default Navbar;
