import React from 'react';

import styles from './Contact.module.css';

const contact = React.forwardRef((props, ref) => {
    return (
        <div className={styles.Contact} ref={ref}>
            <div className={styles.Content}>
                <div className={styles.GeneralInfo}>
                    <div className={styles.GeneralInfoLabel}>Contact Info</div>
                    <p>850.339.4834</p>
                    <p>maclay13531@gmail.com</p>
                </div>
            </div>
        </div>
    );
});

export default contact;