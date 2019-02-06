import React from 'react';

import styles from './Card.module.css';

const card = (props) => {
    return (
        <div 
        className={styles.Card} 
        style={{width: props.width}}>
            {props.children}
        </div>
    );
};

export default card;