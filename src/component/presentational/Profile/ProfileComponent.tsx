import React from 'react';
import IconList from '../Profile/IconList';
import PROFILE_IMG from '../../../img/unnamed.jpg';
import Twemb from './Twemb';
import '../../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../../neumorphism/css/neumorphism.css';

const NAME: string = 'Ramen Tabetaro';
const JOB_NAME: string = 'Web Engineer';

const ProfileComponent: React.FC = () => (

    <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 mb-6 mb-md-5">
                <div className="profile-card mb-5">
                    <div className="card bg-primary shadow-soft border-light">
                        <div className="profile-image bg-primary shadow-inset border border-light rounded mx-auto p-3 mt-n6">
                            <img src={PROFILE_IMG} className="card-img-top rounded" alt={NAME}></img>
                        </div>
                        <div className="card-body">
                            <h3 className="h5 mb-2">
                                <span id="briefProfile">
                                    {NAME}
                                </span>
                            </h3>
                            <span className="h6 font-weight-normal text-gray mb-3">
                                {JOB_NAME}
                            </span>
                            <IconList></IconList>
                            <div className="card-text">
                                <p>I'm Anime Geek and Ramen Ranger.</p>
                                <p>I love Anime, Manga, LightNovel, Ramen, Voice Actor, Baseball, Fashion, Mahjong.</p>
                                <p>I'm a Member of <a href="https://www.inoriminase.com/">Inori Minase</a>'s fanclub.</p>
                                <p>I'm user of <a href="https://mahjongsoul.com/">雀魂</a>.My friend code is 91969030. My Rank is 雀傑★3.</p>
                            </div>
                            <Twemb></Twemb>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default ProfileComponent;
