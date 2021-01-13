import React from 'react';
import Navbar from './Navbar';
import '../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../neumorphism/css/neumorphism.css';

const Header: React.FunctionComponent = () => (
    <header className="header-global">
        <Navbar></Navbar>
    </header>
);

export default Header;