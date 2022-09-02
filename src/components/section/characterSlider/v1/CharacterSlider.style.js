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
    display: grid;
    grid-template-columns: 320px 320px 320px 320px;
    gap: 20px;
    justify-content: space-between;
  }

  .chars-box {
    max-width: 320px;
  }

  .nft-title {
    font-family: 'NotoSansJP-Bold';
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

  @media (max-width: 1400px) {
    .chars-wrapper {
      max-width: 700px;
      grid-template-columns: 320px 320px;
    }
  }

  @media (max-width: 720px) {
    .chars-wrapper {
      max-width: 320px;
      grid-template-columns: 320px;
    }
  }

  @media (max-width: 420px) {
    .chars-wrapper {
      max-width: 200px;
    }
    .chars-box {
      max-width: 200px;
    }
    .character-thumb {
      width: 200px;
      height: 200px;
    }
    .charsName {
      font-size: 14px;
    }
    .charsDesc {
      font-size: 11px;
    }
  }
  
`;

export default CharacterSliderWrapper;
