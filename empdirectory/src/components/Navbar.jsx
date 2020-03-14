import React from 'react';
import Name from './Name.jsx';
import DOB from './DOB.jsx';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-target="#navbarNav">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse row">
                <div className="search-area col-4">
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;