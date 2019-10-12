import React from 'react';
//import stores from '../../utils/stores/Stores';

import './ProjectCard.scss';

const ProjectCard = (props) => {

    return (
        <div className="ProjectCard">
            <h3>{props.project.id}</h3>
        </div>
    )
}

export default ProjectCard;
