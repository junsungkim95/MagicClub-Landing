import React from 'react';
import TitleFrameWrapper from './TitleFrame.style';
import titleFrameLink from '../../assets/images/icon/titleFrame.png';

const TitleFrame = () => {
  return (
    <TitleFrameWrapper>
        <img src={titleFrameLink} alt='titleFrame' />
    </TitleFrameWrapper>
  )
}

export default TitleFrame