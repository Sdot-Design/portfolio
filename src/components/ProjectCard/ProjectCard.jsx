import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import './ProjectCard.scss';

const ProjectCard = (props) => {

    const [displayCard, setDisplayCard] = useState(false);

    return (
        <div onMouseOver={() => { setDisplayCard(true) }} onMouseLeave={() => { setDisplayCard(false) }} className="ProjectCard">
            <div className="ProjectCard-background">
                
            </div>

            <Fade timeout={350} in={displayCard} exit>
                <div className="ProjectCard-info">
                    <Link to={`/project/${props.project.id}`}>
                        <h3>View</h3>
                    </Link>
                </div>
            </Fade>

        </div>
    )
}

export default ProjectCard;
