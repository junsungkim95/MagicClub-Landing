import React from 'react'
import FAQ from "../../../components/section/faq/v1/";
import Footer from "../../../components/section/footer/v3";
import bdUpperBg from "../../../assets/images/bg/NightViewBg.png"

import BdUpperBG from "./BdUpperBG.style";

function bdUpperBG() {
  return (
    <BdUpperBG>
        <FAQ />
        <Footer />
        {/* <img className='bdUpper_BG' src={bdUpperBg} alt='BuildingUpperBG' /> */}
    </BdUpperBG>
  )
}

export default bdUpperBG