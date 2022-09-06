import React from 'react'
// import CharacterSlider from "../../../components/section/characterSlider/v1";
import Project from "../../section/project";
import RoadMap from "../../../components/section/roadMap/v2";
import Team from "../../../components/section/team/v1";
import TreeUpperBG from './TreeUpperBG.style';

import MoonBG from '../../../assets/images/bg/TreeupperBg.png';
import logo from '../../../assets/images/logo.png'
import frame from '../../../assets/images/Frame.svg'

function treeUpperBG() {
  return (
    <TreeUpperBG>
      <div>
        <img className='moonBG' src={MoonBG} alt='Moon upper tree Bg' />
      </div>
      <div className='treeBG-logo-wrapper'>
        <div className='logos'>
          <img className='treeBG-frame' src={frame} alt='magic club frame' />
          <img className='treeBG-logo' src={logo} alt='magic club logo' />
        </div>
      </div>
      {/* <CharacterSlider /> */}
      <Project />
      <RoadMap /> 
      <Team />
    </TreeUpperBG>
  )
}

export default treeUpperBG