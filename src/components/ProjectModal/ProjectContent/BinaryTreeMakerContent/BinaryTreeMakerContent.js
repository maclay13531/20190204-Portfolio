import React from 'react';

import BinaryTreeMakerChart from './BinaryTreeMakerChart/BinaryTreeMakerChart';
import styles from './BinaryTreeMakerContent.module.css';

const binaryTreeMakerContent = (props) => {
    return (
        <div className={styles.BinaryTreeMakerContent}>
            <div className={styles.Label}> 
                Binary Tree Graph
            </div>
            <div className={styles.Chart}>
                <BinaryTreeMakerChart />
            </div>
        </div>
    );
};

export default binaryTreeMakerContent;