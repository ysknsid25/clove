import React from 'react';
import '../../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../../neumorphism/css/neumorphism.css';
import '../../../../css/clove.css'

const activityList = ["replace plain html portfolio to it's developed by React", "disclose my portfolio."];

const ActivityList: React.FunctionComponent = () => (

    <ul className="text-gray font-small mt-2">
        {activityList.map((activity) => (
            <li className="textAlignLi_Left" key={activity}>{activity}</li>
        ))}
    </ul>

);

export default ActivityList;