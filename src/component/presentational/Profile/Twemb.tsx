import React from 'react';

let isLoadwidgets = false;

const Twemb = () => {
    React.useEffect(() => {
        if (!isLoadwidgets) {
            const s = document.createElement("script");
            s.setAttribute("src", "https://platform.twitter.com/widgets.js");
            document.body.appendChild(s);
            isLoadwidgets = true;
        }
    }, []);

    return (
        <a
            className="twitter-mention-button"
            data-related="samurai_se" 
            data-lang="ja" 
            data-show-count="false"
            href="https://twitter.com/intent/tweet?screen_name=samurai_se&ref_src=twsrc%5Etfw"
        >
            Tweet to @samurai_se
        </a>
    );
};

export default Twemb;