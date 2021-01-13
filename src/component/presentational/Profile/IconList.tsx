import React from 'react';
import QIITA_ICON from '../../../img/qiita-qiita-jobs-favicon_cpq.png'
import '../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../neumorphism/css/neumorphism.css';

const qiitaIcon = <img src={QIITA_ICON} height="20" width="20" alt="Qiita Logo" />;

const iconList = [

    {link: 'https://twitter.com/samurai_se', targetStr: '_blank', ariaLabel: 'twitter social link', classNameStr: 'icon icon-xs text-twitter mr-3', icon: 'fab fa-twitter', iconItem: ''},
    {link: 'https://github.com/ysknsid25', targetStr: '_blank', ariaLabel: 'github social link', classNameStr: 'icon icon-xs text-facebook mr-3', icon: 'fab fa-github', iconItem: ''},
    {link: 'https://qiita.com/samurai_se', targetStr: '_blank', ariaLabel: '', classNameStr: 'icon icon-xs mr-3', icon: 'fas', iconItem: qiitaIcon},
    {link: 'https://note.com/samurai_se', targetStr: '_blank', ariaLabel: 'book-open social link', classNameStr: 'icon icon-xs icon-book-open mr-3', icon: 'fas fa-book-open', iconItem: ''},

];

const IconList: React.FunctionComponent = () => (

    <ul className="list-unstyled d-flex my-3">
        {iconList.map((item) => (

            <li>
                <a href={item.link} target={item.targetStr} aria-label={item.ariaLabel} className={item.classNameStr}>
                    <span className={item.icon}>
                        {item.iconItem}
                    </span>
                </a>
            </li>

        ))}
    </ul>

);

export default IconList;