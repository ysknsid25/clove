import React from 'react';
import PlaningList from '../RecentActivity/PlannigList'
import ActivityList from '../RecentActivity/ActivityList'
import '../../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../../neumorphism/css/neumorphism.css';

const TITLE: string = 'Recent Activity';

const RecentActivity: React.FunctionComponent = () => (

    <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-6">
            <div className="alert shadow-inset">
                <div className="justify-content-center">
                    <div className="alert-inner--text">
                        <b>
                            {TITLE}
                        </b>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="alert-inner--text">
                        <PlaningList></PlaningList>
                        <ActivityList></ActivityList>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default RecentActivity;