import React from 'react';
import NavbarLgscreen from '../presentational/Navbar/NavbarLgscreen';
import NavbarSmscreen from '../presentational/Navbar/NavbarSmScreen';
import '../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../neumorphism/css/neumorphism.css';

const Navbar: React.FunctionComponent = () => (

    <nav id="navbar-main" aria-label="Primary navigation" className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light">
        <NavbarLgscreen></NavbarLgscreen>
        <NavbarSmscreen></NavbarSmscreen>
    </nav>

);

export default Navbar;