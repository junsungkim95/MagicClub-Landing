import styled from "styled-components";

const StoryStyleWrapper = styled.section`
  padding-bottom: 120px;
  padding-top: 130px;

  .magic_club_story_content {
    max-width: 1100px;
    width: 100%;
    margin: auto;
    position: relative;
  }

  .magic_club_story_questions {
    margin-top: 57px;
    position: relative;

    .story_questions {
      position: relative;
      z-index: 1;

      .accordion__item + .accordion__item {
        margin-top: 10px;
      }
    }
  }
  .accordion__item {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }

  .accordion__header {
    h5 {
      display: flex;
      align-items: center;
      height: 76px;
      margin-bottom: 0px;
      padding: 0 29px;
      color: rgba(255, 255, 255, 0.3);
      font-family: NotoSansJP;
      font-size: 24px;
      line-height: 34px;
      text-transform: none;
    }
  }

  .accordion__body {
    p {
      padding: 0px 48px 24px 29px;
      font-family: NotoSansJP;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 0px;
      max-width: 100%;
    }
  }

  .story_bg_wattermark {
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
  }

  .story_ol_list {
    padding: 0 48px 24px 29px;
    span {
      font-family: NotoSansJP;
      font-weight: 400;
      color: rgba(255,255,255,0.7);
    }
    ol {
      padding-left: 18px;
      list-style-type: decimal;
      li{
        font-family: NotoSansJP;
        font-weight: 400;
        color: rgba(255,255,255,0.7);
      }
    }
  }

  .story_text {
    background: rgba(255,255,255,0.05);
    padding: 0 48px 24px 29px;
    span {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  
  .story_txt_wrap {
    background: rgba(255,255,255,0.05);
  }

  @media only screen and (max-width: 991px) {
    .accordion__header {
      h5 {
        font-size: 18px;
        line-height: 28px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .accordion__header {
      h5 {
        font-size: 20px;
        line-height: 25px;
      }
    }

    .accordion__body {
      background: rgba(255, 255, 255, 0.1)
      p {
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .accordion__header {
      h5 {
        font-size: 18px;
      }
    }
  }
`;

export default StoryStyleWrapper;
