import React from 'react';

import styles from './BinaryTreeMakerContent.module.css';

const binaryTreeMakerContent = (props) => {
    return (
        <div className={styles.BinaryTreeMakerContent}>
            <div className={styles.Label}> 
                Weather Chart
            </div>
            <div className={styles.Chart}>

            </div>
        </div>
    );
};

export default binaryTreeMakerContent;