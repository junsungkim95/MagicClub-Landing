import styled from "styled-components";

const CharacterSliderWrapper = styled.section`
  padding: 80px 40px;
  position: relative;
  z-index: 1;

  .chars-wrapper {
    max-width: 1800px;
    margin-top: 80px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
  }

  .chars-box {
    max-width: 320px;
  }

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
    width: 320px;
    height: 320px;
    margin-left: auto;
    margin-right: auto;
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
