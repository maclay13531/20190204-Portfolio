import React from 'react';

import Aux from '../../hoc/Auxiliary';
import TopNav from './TopNav/TopNav';
import IntroPanel from './IntroPanel/IntroPanel';

const navigation = (props) => {
    return (
        <Aux>
            <TopNav
            aboutMeView={props.aboutMeView}
            projectView={props.projectView}
            contactView={props.contactView}/>
            <IntroPanel />
        </Aux>
    );
};

export default navigation;