import React from 'react';
import '../../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../../neumorphism/css/neumorphism.css';
import '../../../../css/clove.css'

const PLAN: string = 'developing function of blog...';

const PlaningList: React.FunctionComponent = () => {

    return (
        <span>
            <span className="icon text-danger icon-xs mr-2 mr-md-1"><span className="fas fa-file-alt"></span></span>
            <span className="text-gray font-small mt-2">
                {PLAN}
            </span>
        </span>
    );

};

export default PlaningList;