import React from 'react';

import styles from './MyDescription.module.css';
import MySkill from './MySkill/MySkill';

const myDescription = (props) => {
    return (
        <div className={styles.MyDescription}>
            <p>Hello! My name is Jong park, a web developer & software engineer from Atlanta Georgia.
            As an engineer, there is nothing more satisfying than being a creator of
            well developed projects, and no matter the size of your projects,
            let me solve your problems!</p>
            <MySkill />
        </div>
    );
};

export default myDescription;