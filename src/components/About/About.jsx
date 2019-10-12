import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import './About.scss';
import Store from '../../utils/stores/Stores';
import {InfoSVG} from '../../utils/JSHelpers/Helper';

const About = () => {
  const stores = useContext(Store);

  stores.uiStore.actualLink = 1;

    return (
      <div className="About">

        <div className="About-top">
          <div className="About-topLeft">
            <div style={{ backgroundImage: "url('./img/imgPortada.jpg')" }} className="About-img">
              <div className="About-name">
                <h4>Santiago</h4>
                <h6>Ortiz Guevara</h6>
              </div>
            </div>
            <div className="About-title">
              <h4>About me</h4>
              <h6>Bio</h6>
            </div>
          </div>
          <div className="About-topRight">
            <p>I’m Santiago, a 21 years old Colombian <strong>‘Interactive Designer’</strong> from ICESI University. I’ve worked with <strong className="strongColor">user experience</strong> and <strong className="strongColor">development</strong> on multiple platforms.
              <br></br> <br></br> <br></br> My <strong className="strongColor2">creativity</strong> allows me to build experiences and interfaces, based on human feelings and needs. I'm <strong className="strongColor2">always learning</strong> new methodologies, software and strategies to develop these experiences.
            </p>
          </div>
        </div>

        <div className="About-info">
          <div className="About-infoLeft">

            <h4>Experience & Skills</h4>

            <div className="About-contSkills">
              {stores.uiStore.arrayInfo.map((elem) => {
                let classInfo = (elem.id === stores.uiStore.idActualInfo) ? "About-infoItem About-infoItemSelected" : "About-infoItem";
                if (elem.type === stores.uiStore.typeSkill) {
                  return (
                    <div onClick={(e) => {
                      e.preventDefault();
                      stores.uiStore.changeInfoHandler(elem.id);
                    }} key={elem.id} className={classInfo}>

                      <InfoSVG i={elem.id} selected={elem.id === stores.uiStore.idActualInfo}/>

                    </div>
                  )
                } else {
                  return '';
                }
              })}
            </div>

            <h4>Talents</h4>

            <div className="About-contTalents">
              {stores.uiStore.arrayInfo.map((elem) => {
                let classInfo = (elem.id === stores.uiStore.idActualInfo) ? "About-infoItem About-infoItemSelected" : "About-infoItem";
                if (elem.type === stores.uiStore.typeTalent) {
                  return (
                    <div onClick={(e) => {
                      e.preventDefault();
                      stores.uiStore.changeInfoHandler(elem.id);
                    }} key={elem.id} className={classInfo}>
                       <InfoSVG i={elem.id} selected={elem.id === stores.uiStore.idActualInfo}/>
                    </div>
                  )
                } else {
                  return '';
                }
              })}
            </div>

          </div>
          <div className="About-infoRight">
            <div className="About-infoImg"></div>
            <div className="About-infoDetail">
              <h3>{stores.uiStore.actualInfo.name}</h3>
              <h5>[info here]</h5>
            </div>
          </div>
        </div>

        <div className="About-research">
              <div className="About-researchLeft">
                <div className="About-data">
                  <h4>2018 - 2019</h4>
                  <h6>Audio-tactile priming to guide information recall in edutainment</h6>
                  <h4>2019</h4>
                  <h6>Thesis (Cooming Soon!)</h6>
                </div>
              </div>
              <div className="About-researchRight">

                <h3>Research</h3>
                <div style={{backgroundImage: "url('./img/imgPortada.jpg')"}} className="About-researchImg"></div>

              </div>
        </div>

        <footer className="footer">
          <h4>© 2019 Santiago Ortiz Guevara.</h4>
          <h4>All rights reserved.</h4>
        </footer>
      </div>
    )
}

export default observer(About);
