import React from 'react'
import HowToMint from "../../../components/section/howToMint/v1";
import About from "../../../components/section/about/v2";

import CharsrBG from "./CharsBG.style";


function charsBG() {
  return (
    <CharsrBG>
        <HowToMint />
        <About />
    </CharsrBG>
  )
}

export default charsBG