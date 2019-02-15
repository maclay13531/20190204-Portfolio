import React from 'react';

import Card from '../../../ui/Card/Card';
import styles from './Project.module.css';
import weatherImage from '../../../images/WeatherProjectImage.jpg';
import typeForNoReasonImage from '../../../images/TypeForNoReason.jpeg';
import comingSoonImage from '../../../images/ComingSoon.png';
import javascript from '../../../images/Javascript.png';
import html from '../../../images/Html.png';
import css from '../../../images/Css.png';
import react from '../../../images/React.png';
import ajax from '../../../images/Ajax.png';
import d3 from '../../../images/D3.png';
import regex from '../../../images/Regex.jpg';

const weatherDetailerDescription = 'Type in your favorite city and let WD tell you all about its weather!';
const weatherDetailerRequiredIcons = [
    { label: 'react', link: react },
    { label: 'ajax', link: ajax },
    { label: 'd3', link: d3 }
];
const typeForNoReasonTreeMakerRequiredIcons = [
    { label: 'react', link: react },
    { label: 'regex', link: regex },
    { label: 'd3', link: d3 }
];
const typeForNoReasonTreeMakerDescription = 'Type then enter. Your gibberi.. I mean your sentence will be analyzed!';
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
        label: 'Type For No Reason',
        link: typeForNoReasonImage,
        description: typeForNoReasonTreeMakerDescription,
        requiredIcons: typeForNoReasonTreeMakerRequiredIcons,
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