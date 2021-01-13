import React from 'react';
import '../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../neumorphism/css/neumorphism.css';

const TITLE: string = 'Untitled Report';
const LEAD: string = 'Profile and My history of activity.';

const TitelAndLead: React.FunctionComponent = () => (

    <div className="row mb-4 justify-content-center">
        <div className="col-12 col-md-8 col-lg-7">
            <h1 id="recent" className="display-3 mb-4">{TITLE}</h1>
            <p className="lead">
                {LEAD}
            </p>
        </div>
    </div>

);

export default TitelAndLead;