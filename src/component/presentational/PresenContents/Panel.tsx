import React from 'react';
import '../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../neumorphism/css/neumorphism.css';

type Props = {idName: string, contentsTitle: string, lead: string, ulClassName: string, contentsList: string[], footerConstents: string[]};

const Panel: React.FunctionComponent<Props> = (props) => (

    <div className="alert shadow-inset" role="alert">
        <span className="alert-inner--icon icon-lg"><span className="far fa-thumbs-up"></span></span>
        <span id={props.idName} className="alert-heading">
            {props.contentsTitle}
        </span>
        <p>{props.lead}</p>
        <ul className={props.ulClassName}>
            {props.contentsList.map((item) => (

                <li key={props.idName + item}>{item}</li>

            ))}
        </ul>
        <hr></hr>
        {props.footerConstents.map((item) => (

            <p className="mb-0" key={props.idName + item}>{item}</p>

        ))}
    </div>

);

export default Panel;