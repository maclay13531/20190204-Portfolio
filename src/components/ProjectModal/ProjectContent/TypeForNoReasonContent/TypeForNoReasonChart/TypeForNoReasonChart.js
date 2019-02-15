import React, { Component } from 'react';

import styles from './TypeForNoReason.module.css';

class TypeForNoReason extends Component {
    state = {
        userBinarySearchTree: null
    }

    render() {
        // console.log(this.state.userBinarySearchTree)
        return(
            <div className={styles.TypeForNoReason}></div>
        );
    }
}

export default TypeForNoReason;