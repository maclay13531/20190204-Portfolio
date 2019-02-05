import React from 'react';

import Aux from '../../hoc/Auxiliary';
import TopNav from './TopNav/TopNav';
import IntroPanel from './IntroPanel/IntroPanel';

const navigation = (props) => {
    return (
        <Aux>
            <TopNav />
            <IntroPanel />
        </Aux>
    );
};

export default navigation;