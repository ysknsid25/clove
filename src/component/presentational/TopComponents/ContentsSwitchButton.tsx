import React from 'react';
import '../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../neumorphism/css/neumorphism.css';

const contentsList = [
    {iconImage: 'icon-secondary', labelClassName: 'far fa-user-circle mr-2', labelText: 'Profile'}, 
    {iconImage: 'icon-info', labelClassName: 'far fa-comments mr-2', labelText: 'Articles'}, 
];

const ContentsSwitchButton: React.FunctionComponent = () => (

    <ul className="nav nav-pills nav-fill flex-column flex-md-row">
        {contentsList.map((content) => (

            <li className="nav-item">
                <a className="nav-link mb-sm-3 mb-md-0" data-toggle="tab" href="#">
                    <span className={content.iconImage}>
                        <span className={content.labelClassName}></span>
                        {content.labelText}
                    </span>
                </a>
            </li>

        ))}
    </ul>

);

export default ContentsSwitchButton;