import React from 'react';

import myResume from '../../resume/MyResume.pdf';
import git from '../../images/Git.jpg';
import linkedIn from '../../images/LinkedIn.jpg';
import email from '../../images/Email.jpg';
import resume from '../../images/Resume.jpg';
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
                <div className={styles.ContactIcons}>
                    <div>
                        <a href={`mailto:maclay13531@gmail.com`} rel="noopener noreferrer" target="_blank">
                            <img src={email} alt='email'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/jong-park-info/' rel="noopener noreferrer" target='_blank'>
                            <img src={linkedIn} alt='linkedIn'/>
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/maclay13531' rel="noopener noreferrer" target='_blank'>
                            <img src={git} alt='git'/>
                        </a>
                    </div>
                    <div>
                        <a href={myResume} rel="noopener noreferrer" target='_blank'>
                            <img src={resume} alt='resume'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default contact;