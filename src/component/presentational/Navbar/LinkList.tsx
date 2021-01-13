import React from 'react';
import '../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../neumorphism/css/neumorphism.css';

type Props = {callPoint: string};

const valuelist = [
    {idName: 'recent', label: 'Recent Activity'},
    {idName: 'briefProfile', label: 'Profile'},
    {idName: 'anime', label: 'Anime'},
    {idName: 'lightNovel', label: 'Light Novel'},
    {idName: 'manga', label: 'Manga'},
    {idName: 'ramen', label: 'Ramen'},
    {idName: 'job', label: 'Job'},
    {idName: 'qualification', label: 'Qualification'},
    {idName: 'skillset', label: 'Skill Set'},
];

const LinkList: React.FunctionComponent<Props> = (props) => {

    const {callPoint} = props;

    return (
        <ul className="dropdown-menu">
            {valuelist.map((item) =>(

                <li key={callPoint + '_' + item.idName}><a className="dropdown-item" href={'#' + item.idName}>{item.label}</a></li>

            ))}
        </ul>
    );

};

export default LinkList;