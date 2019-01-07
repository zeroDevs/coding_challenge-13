import React from 'react';
import './Rank.css';


const Rank = ({ langArray, onTopicClick, checkbox }) => {
    const isChecked = (lang) => {
        if(checkbox === undefined && lang === langArray[0]) return true
        else if(checkbox === lang) return true
    }

    function addLang(lang) {
        let id = Math.random();
        return (
            <div key={lang + id} className="pretty p-default p-smooth p-bigger">
                <input type="checkbox" defaultChecked={isChecked(lang, checkbox)} onChange={() => onTopicClick(lang)} />
                <div className="state p-warning">
                    <label>{lang}</label>
                </div>
            </div>
        )
    }

    return (
        <div className="pb-5">
            {langArray.map(addLang)}
        </div>
    );
}

export default Rank;
