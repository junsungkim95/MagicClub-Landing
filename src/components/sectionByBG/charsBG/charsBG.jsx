import React from 'react'
import HowToMint from "../../../components/section/howToMint/v1";
import About from "../../../components/section/about/v2";
import characters from "../../../assets/images/bg/CharsWithLightBg.png";
import CharsrBG from "./CharsBG.style";


function charsBG() {
  return (
    <CharsrBG>
        {/* <HowToMint /> */}
        <About />
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