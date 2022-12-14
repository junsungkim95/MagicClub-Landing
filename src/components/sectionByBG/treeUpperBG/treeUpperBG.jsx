import React from 'react'
// import CharacterSlider from "../../../components/section/characterSlider/v1";
import Project from "../../section/project";
import RoadMap from "../../../components/section/roadMap/v2";
import Team from "../../../components/section/team";
import TreeUpperBG from './TreeUpperBG.style';

import MoonBG from '../../../assets/images/bg/TreeupperBg.png';
import logo from '../../../assets/images/logo.png'
import frame from '../../../assets/images/Frame.svg'
import MoonLogo from '../../../assets/images/MoonLogo.png'
import MoonL from '../../../assets/images/bg/Maru_T.png'
import MoonR from '../../../assets/images/bg/Maru_M.png'

import CharacterSlider from "../../section/characterSlider/v1";


function treeUpperBG() {
  return (
    <TreeUpperBG>
      <div>
        <img className='moonBG' src={MoonBG} alt='Moon upper tree Bg' />
      </div>
      <img src={MoonL} className="moonL" alt="" />
      <img src={MoonR} className="moonR" alt="" />
      <div className='treeBG-logo-wrapper'>
        <div className='logos'>
          {/* <img className='treeBG-frame' src={frame} alt='magic club frame' />
          <img className='treeBG-logo' src={logo} alt='magic club logo' /> */}
          {/* <img className='treeBG-logos' src={MoonLogo} alt="magic club logo" /> */}
        </div>
      </div>
      {/* <CharacterSlider /> */}
      <CharacterSlider />
      <Project />
      <RoadMap /> 
      <Team />
    </TreeUpperBG>
  )
}

export default treeUpperBG