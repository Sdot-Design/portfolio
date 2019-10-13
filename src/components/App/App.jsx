import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import './App.scss';

//import Store from '../../utils/stores/Stores';

import { Menu, Logo, MenuSocialMedia, Message } from '../UIMenu/UIMenu';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import ProjectView from 'components/ProjectView/ProjectView';

const App = () => {

  //const stores = useContext(Store);

  return (
    <div className="App">

      <HashRouter>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/project/:id" component={ProjectView} exact />
        </Switch>

        <Logo />
        <MenuSocialMedia />
        <Menu />
        <Message />

      </HashRouter>

    </div>
  )
}

export default observer(App);
