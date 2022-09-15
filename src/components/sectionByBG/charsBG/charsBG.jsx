import React from 'react'
import HowToMint from "../../../components/section/howToMint";
import About from "../../section/about_us";
import characters from "../../../assets/images/bg/MainChars.png";
import CharsrBG from "./CharsBG.style";


function charsBG() {
  return (
    <CharsrBG>
        <div className='htm-absolute'><HowToMint /></div>
        <div className='about-absolute'><About /></div>
        {/* <div className='charsOnBD-wrapper'>
          <img className='charsOnBD' src={characters} alt='characters' />
        </div> */}
        <div>
        <img className='characters_bg' src={characters} alt='charactersBg' />
      </div>
    </CharsrBG>
  )
}

export default charsBG