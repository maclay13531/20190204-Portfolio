import React from 'react';

import styles from  './MySkill.module.css';
import javascript from '../../../../../images/Javascript.png';
import html from '../../../../../images/Html.png';
import css from '../../../../../images/Css.png';
import jquery from '../../../../../images/Jquery.png';
import react from '../../../../../images/React.png';
import python from '../../../../../images/Python.jpg';
import cshop from '../../../../../images/Cshop.png';

const iconsToDisplay = [
    { label: 'javascript', link: javascript },
    { label: 'html', link: html },
    { label: 'css', link: css },
    { label: 'jquery', link: jquery },
    { label: 'react', link: react },
    { label: 'python', link: python },
    { label: 'cshop', link: cshop }
];

const mySkill = (props) => {
    return (
        <div className={styles.MySkill}>
            {iconsToDisplay.map(icon => {
                return (
                    <img src={icon.link} alt={icon.label} key={icon.label} /> 
                );
            })}
        </div>
    );
};

export default mySkill;