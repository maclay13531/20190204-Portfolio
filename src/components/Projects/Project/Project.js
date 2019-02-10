import React from 'react';

import Card from '../../../ui/Card/Card';
import styles from './Project.module.css';
import weatherImage from '../../../images/WeatherProjectImage.jpg';
import binaryTreeImage from '../../../images/BinaryTreeMaker.png';
import comingSoonImage from '../../../images/ComingSoon.png';
import javascript from '../../../images/Javascript.png';
import html from '../../../images/Html.png';
import css from '../../../images/Css.png';
import react from '../../../images/React.png';
import ajax from '../../../images/Ajax.png';
import d3 from '../../../images/D3.png';
import binaryTreeIcon from '../../../images/BinaryTreeMakerIcon.png';

const weatherDetailerDescription = 'Type in your favorite city and let WD tell you all about its weather analytically!';
const weatherDetailerRequiredIcons = [
    { label: 'javascript', link: javascript },
    { label: 'html', link: html },
    { label: 'css', link: css },
    { label: 'react', link: react },
    { label: 'ajax', link: ajax },
    { label: 'd3', link: d3 }
];
const binaryTreeMakerRequiredIcons = [
    { label: 'javascript', link: javascript },
    { label: 'html', link: html },
    { label: 'css', link: css },
    { label: 'react', link: react },
    { label: 'binaryTree', link: binaryTreeIcon }
];
const binaryTreeMakerDescription = 'Make cyber world more green by implementing tree. A binary tree that is!';
const comingSoonRequiredIcons = [
    { label: 'javascript', link: javascript },
    { label: 'html', link: html },
    { label: 'css', link: css }
];
const comingSoonDescription = 'Under Construction!';
const projectsToDisplay = [
    { 
        label: 'Weather Detailer', 
        link: weatherImage, 
        description: weatherDetailerDescription, 
        requiredIcons: weatherDetailerRequiredIcons,
        disabled: false
    },
    { 
        label: 'Binary Tree Maker', 
        link: binaryTreeImage, 
        description: binaryTreeMakerDescription,
        requiredIcons: binaryTreeMakerRequiredIcons,
        disabled: false
    },
    {
        label: 'Coming Soon',
        link: comingSoonImage,
        description: comingSoonDescription,
        requiredIcons: comingSoonRequiredIcons,
        disabled: true
    }
];

const project = (props) => {
    return (
        <div className={styles.Project}>
            {projectsToDisplay.map(projects => {
                return (
                    <Card 
                    projectName={projects.label} 
                    projectDescription={projects.description}
                    projectRelatedIcons={projects.requiredIcons}
                    projectDisabled={projects.disabled}
                    projectStart={() => props.projectStart(projects.label)}
                    key={projects.label}>
                        <img src={projects.link} alt={projects.label} key={projects.label} /> 
                    </Card>
                );
            })}
        </div>
    );
}

export default project;