import React from 'react';
import TopComponent from './mainContainer/topComponent';
import ProfileComponent from '../presentational/Profile/ProfileComponent'
import Panel from '../presentational/PresenContents/Panel'
import '../../neumorphism/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import '../../neumorphism/css/neumorphism.css';
import '../../css/clove.css';

const ANIME_CONTENT = {
    idName: 'anime', 
    contentsTitle: 'Anime', 
    lead: 'My favorite Anime Ranking of Top 5.', 
    ulClassName: 'decimalUl', 
    contentsList: ['SHIROBAKO','Just Because!','クオリディア・コード','シュタインズ・ゲート','ヴァイオレット・エヴァーガーデン'], 
    footerConstents: ['I choose Famous as Anime. I will be described later Light Novel and Manga.']
};

const LANOVE_CONTENT = {
    idName: 'lightNovel', 
    contentsTitle: 'Light Novel', 
    lead: 'My favorite Light Novel Ranking of Top 5.', 
    ulClassName: 'decimalUl', 
    contentsList: ['さくら荘のペットな彼女','青春ブタ野郎シリーズ','なれる！SE','冴えないヒロインの育て方','14歳とイラストレーター'], 
    footerConstents: [
        'Others...',
        '公女殿下の家庭教師 / 妹さえいればいい / ストライク・ザ・ブラッド',
        'とらドラ / 神様のメモ帳 / 覇剣の皇姫アルティーナ / 神様のメモ帳',
        'りゅうおうのおしごと！ / やはり俺の青春ラブコメは間違っている',
        'ひげを剃る、そして女子高生を拾う / お隣の天使様にいつのまにかダメ人間にされていた件',
    ]
};

const MANGA_CONTENT = {
    idName: 'manga', 
    contentsTitle: 'Manga', 
    lead: 'My favorite Manga Ranking of Top 5.', 
    ulClassName: 'decimalUl', 
    contentsList: ['鋼の錬金術師','SLAM DANK','ブラック・ジャック','NARUTO','金色のガッシュ!!'], 
    footerConstents: ['Too many to decide.', 'I like almost anything.']
};

const RAMEN_CONTENT = {
    idName: 'ramen', 
    contentsTitle: 'Ramen', 
    lead: 'My favorite Ramen Ranking of Top 3.', 
    ulClassName: 'decimalUl', 
    contentsList: ['会(Hyogo Kobe)','ヒキュウ(Hyogo Rokkomichi)','世界一暇なラーメン屋(Osaka Higobashi)'], 
    footerConstents: ['I eat ramen twice a week.']
};

const QUALIFI_CONTENT = {
    idName: 'qualification', 
    contentsTitle: 'Qualification', 
    lead: 'My Qualification related IT.', 
    ulClassName: 'decimalUl', 
    contentsList: ['応用情報技術者', 'Java SE8 Silver', 'Oracle Master Bronze', 'LPIC Lv1'], 
    footerConstents: ['I have 図書館司書']
};

const Main: React.FunctionComponent = () => (
    <main>
        <TopComponent></TopComponent>
        <section className="section section-lg pt-0">
            <br></br>
            <div className="container">
                <ProfileComponent></ProfileComponent>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        <Panel {...ANIME_CONTENT}></Panel>
                        <Panel {...LANOVE_CONTENT}></Panel>
                        <Panel {...MANGA_CONTENT}></Panel>
                        <Panel {...RAMEN_CONTENT}></Panel>
                        <Panel {...QUALIFI_CONTENT}></Panel>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default Main;