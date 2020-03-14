import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header w-100 text-center">
            <h1>Employee Directory</h1>
            <p>
                Toggle carrots to filter or use form to search by employee name.
            </p>
        </div>
    )
}

export default Header;