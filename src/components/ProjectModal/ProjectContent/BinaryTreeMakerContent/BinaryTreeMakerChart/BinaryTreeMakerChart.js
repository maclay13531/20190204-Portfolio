import React, { Component } from 'react';

import styles from './BinaryTreeMakerChart.module.css';

const BinarySearchTree = require('binary-search-tree').BinarySearchTree;

let userBinarySearchTree = new BinarySearchTree();

// userBinarySearchTree.insert(15, '15');
// userBinarySearchTree.insert(17, '17');
// userBinarySearchTree.insert(5, '5');
// userBinarySearchTree.insert(3, '3');
// userBinarySearchTree.insert(9, '9');

class BinaryTreeMakerChart extends Component {
    state = {
        userBinarySearchTree: userBinarySearchTree
    }

    render() {
        // console.log(this.state.userBinarySearchTree)
        return(
            <div className={styles.BinaryTreeMakerChart}>{this.state.userBinarySearchTree.key}</div>
        );
    }
}

export default BinaryTreeMakerChart;