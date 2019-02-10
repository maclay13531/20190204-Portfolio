import React from 'react';

import styles from './Contact.module.css';

const contact = React.forwardRef((props, ref) => {
    return (
        <div className={styles.Contact} ref={ref}>

        </div>
    );
});

export default contact;