import React from 'react';
import LinkList from './LinkList';
import '../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../neumorphism/css/neumorphism.css';

const NavbarLgscreen: React.FunctionComponent = () => (

    <div className="container position-relative ml-2">
        <div className="navbar-collapse collapse" id="navbar_global">
            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link" data-toggle="dropdown" >
                        <span className="nav-link-inner-text">About Me</span>
                        <span className="fas fa-angle-down nav-link-arrow ml-2"></span>
                    </a>
                    <LinkList callPoint='lgScreen'></LinkList>
                </li>
            </ul>
        </div>
    </div>

);

export default NavbarLgscreen;