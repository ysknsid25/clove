import React from 'react';
import LinkList from './LinkList';
import '../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../neumorphism/css/neumorphism.css';

const NavbarSmscreen: React.FunctionComponent = () => (

    <div className="d-flex align-items-center">
        <ul className="navbar-nav-hover navbar-toggler noneDotOfUl ml-2">
            <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown" >
                    <span className="navbar-toggler-icon"></span>
                </a>
                <LinkList callPoint='smScreen'></LinkList>
            </li>
        </ul>
    </div>

);

export default NavbarSmscreen;