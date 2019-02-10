import React from 'react';

import styles from './Card.module.css';

const card = (props) => {
    return (
        <div className={styles.Card}>
            <div className={styles.ImageBox}>
                {props.children}
            </div>
            <div className={styles.projectLabel}>
                {props.projectName}
            </div>
            <div className={styles.projectDescription}>
                {props.projectDescription}
            </div>
            <div className={styles.CardFooter}>
                {props.projectRelatedIcons.map((icon, index) => {
                    return (
                        <img src={icon.link} alt={icon.label} key={index} />
                    );
                })}
            </div>
            <button type='button' disabled={props.projectDisabled} onClick={props.projectStart}>Start</button>
        </div>
    );
};

export default card;