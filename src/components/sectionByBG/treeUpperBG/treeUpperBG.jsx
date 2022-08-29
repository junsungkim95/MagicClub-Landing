import React from 'react'
import CharacterSlider from "../../../components/section/characterSlider/v1";
import AboutInfoCardList from "../../../components/section/about/aboutInfoCardList";
import RoadMap from "../../../components/section/roadMap/v2";
import Team from "../../../components/section/team/v1";

import TreeUpperBG from './TreeUpperBG.style';

function treeUpperBG() {
  return (
    <TreeUpperBG>
        


        <CharacterSlider />
        <AboutInfoCardList />
        <RoadMap /> 
        <Team />
    </TreeUpperBG>
  )
}

export default treeUpperBG