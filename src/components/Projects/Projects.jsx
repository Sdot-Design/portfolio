import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import './Projects.scss';
import Store from '../../utils/stores/Stores';
import { observer } from 'mobx-react-lite';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  window.scrollTo(0, 0);

  const stores = useContext(Store);

  stores.uiStore.actualLink = 2;

  return (
    <div className="Projects">

      <div className="Projects-containter">
        {stores.uiStore.arrayProjects.map((elem) => {
          return (
            <Fade timeout={1250} delay={elem.id * 500}>
              <ProjectCard key={elem.id} project={elem} />
            </Fade>
          )
        })}
        <Fade timeout={1250} delay={1000} bottom>
          <div className="Projects-moreProjects">
            <h3>Coming soon!</h3>
          </div>
        </Fade>
      </div>

      <footer className="footer">
        <h4>© 2019 Santiago Ortiz Guevara.</h4>
        <h4>All rights reserved.</h4>
      </footer>
    </div>
  )
}

export default observer(Projects);
