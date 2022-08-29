import styled from "styled-components";

const CharacterSliderWrapper = styled.section`
  padding: 20px 40px;
  position: relative;
  z-index: 1;

  p {
    font-family: 'Noto Sans JP';
    font-size: 48px;
    font-weight: 700;
    line-height: 64px;
    text-align: center;
  }

  .slick-slider {
    .slick-list {
      margin: 0 -15px;
    }

    .slick-slide {
      height: auto; // ← that must not be ignored
    }
    .slick-track {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: stretch;
    }
  }
  .slick__slider__item {
    padding: 0 15px;
  }

  .character-thumb {
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border-radius: 15px;
    overflow: hidden;
  }

  .charsName {
    color: white;
    font-size: 20px;
  }

  .charsDesc {
    color: white;
  }
`;

export default CharacterSliderWrapper;
