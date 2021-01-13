import React from 'react';
import '../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../neumorphism/css/neumorphism.css';

const year: string = new Date().getFullYear().toString();
const copyRight: string = 'Copyright © Ramen Tabetaro';
const allRightReserved: string = '. All rights reserved.';

const Footer: React.FunctionComponent = () => (
    <footer className="d-flex pb-5 pt-6 pt-md-7 border-top border-light bg-primary">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                        <p className="font-weight-normal font-small mb-0">
                            {copyRight}
                            <span className="current-year">{year}</span>
                            {allRightReserved}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;