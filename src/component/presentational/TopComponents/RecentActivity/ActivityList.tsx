import React from 'react';
import '../../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../../neumorphism/css/neumorphism.css';

const activityList = ['disclose my portfolio.'];

const ActivityList: React.FunctionComponent = () => (

    <ul className="text-gray font-small mt-2 justify-content-center">
        {activityList.map((activity) => (
            <li key={activity}>{activity}</li>
        ))}
    </ul>

);

export default ActivityList;