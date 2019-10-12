import React, { useContext } from 'react';

import './Projects.scss';
import Store from '../../utils/stores/Stores';
import { observer } from 'mobx-react-lite';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  const stores = useContext(Store);

  stores.uiStore.actualLink = 2;

  return (
    <div className="Projects">

      <div className="Projects-containter">
        {stores.uiStore.arrayProjects.map((elem) => {
          return (
            <ProjectCard key={elem.id} project={elem} />
          )
        })}
        <div className="Projects-moreProjects"></div>
      </div>

      <footer className="footer">
        <h4>© 2019 Santiago Ortiz Guevara.</h4>
        <h4>All rights reserved.</h4>
      </footer>
    </div>
  )
}

export default observer(Projects);
