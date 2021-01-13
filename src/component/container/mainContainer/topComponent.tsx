import React from 'react';
import TitelAndLead from '../../presentational/TopComponents/TitleAndLead';
import RecentActivity from '../../presentational/TopComponents/RecentActivity/RecentActivity'
import ContentsSwitchButton from '../../presentational/TopComponents/ContentsSwitchButton'
import '../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../neumorphism/css/neumorphism.css';

const TopComponent: React.FunctionComponent = () => (

    <div className="section-header pb-6 bg-primary overflow-hidden text-center border-bottom border-light">
        <div className="container z-2">
            <TitelAndLead></TitelAndLead>
            <RecentActivity></RecentActivity>
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-6">
                    <div className="nav-wrapper position-relative">
                        <ContentsSwitchButton></ContentsSwitchButton>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default TopComponent;