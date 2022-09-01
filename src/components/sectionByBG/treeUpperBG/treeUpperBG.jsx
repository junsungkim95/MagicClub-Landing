import React from 'react'
// import CharacterSlider from "../../../components/section/characterSlider/v1";
import AboutInfoCardList from "../../../components/section/about/aboutInfoCardList";
import RoadMap from "../../../components/section/roadMap/v2";
import Team from "../../../components/section/team/v1";

import TreeUpperBG from './TreeUpperBG.style';

import MoonBG from '../../../assets/images/bg/TreeupperBg.png';
import logo from '../../../assets/images/logo.png'

function treeUpperBG() {
  return (
    <TreeUpperBG>
      <div>
        <img className='moonBG' src={MoonBG} alt='Moon upper tree Bg' />
      </div>
      <div className='treeBG-logo-wrapper'>
        <img className='treeBG-logo' src={logo} alt='magic club logo' />
      </div>
      {/* <CharacterSlider /> */}
      <AboutInfoCardList />
      <RoadMap /> 
      <Team />
    </TreeUpperBG>
  )
}

export default treeUpperBG