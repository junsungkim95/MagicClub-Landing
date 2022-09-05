import styled, { keyframes } from "styled-components";
import sectionBgImage from "../../../../assets/images/bg/intro_img.png";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const BannerV1Wrapper = styled.section`
  // background: url(${sectionBgImage});
  background: none;
  min-height: 950px;
  width: 100%;
  background-size: 100% 100%;
  background-position: top center;
  background-repeat: no-repeat;
  padding-top: 192px;
  position: relative;

  .player-wrapper {
    z-index: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    video {
      object-fit: cover;
    }    
  }
  
  

  .magic_club_v1_baner_left {
    margin-top: 240px;
    max-width: 600px;
    width: 100%;
    min-height: 450px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h2 {
      font-family: "NotoSansJP-Bold";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 55px;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 32px;
      z-index: 1;
    }

    h3 {
      font-family: "NotoSansJP-Bold";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 60px;
      text-transform: uppercase;
      color: #ffffff;
      z-index: 1;
    }

    .banner_buttons {
      display: flex;
      column-gap: 30px;
      margin-top: 38px;
    }

    .coin-info {
      display: flex;
      flex-direction: column;
      margin-top: 17px;
      span {
        font-family: "NotoSansJP-Bold";
        font-size: 18px;
        line-height: 36px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.8);
        z-index: 1;

        & .highlighted {
          color: #ffe600;
        }
      }
    }
  }

  .magic_club_v1_baner_right {
    max-width: 500px;
    width: 100%;
    margin-left: auto;
    margin-top: 66px;

    .mint_live_circle_sect {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 140px;
      width: 140px;
      border-radius: 50%;
      border: none;
      background: #ffe600;
      position: absolute;
      top: -65px;
      left: -65px;
      z-index: 1;

      .mint_live_circle {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        .mint_live_text {
          animation: ${rotate} 20s linear infinite;
          position: absolute;
        }
      }
    }

    .magic_club_v1_baner_right_img_sect {
      position: relative;
      width: 100%;
      height: 550px;
      display: flex;
      align-items: center;
      justify-content: center;

      .magic_club_v1_baner_right_img_bg {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 0;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .magic_club_v1_baner_right_img {
        position: relative;
        z-index: 1;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .magic_club_v1_baner_left {
      margin-top: 300px;
      min-height: 400px;
      h2 {
        font-size: 40px;
        line-height: 50px;
      }

      h3 {
        font-size: 30px;
        line-height: 34px;
      }

      .coin-info {
        span {
          font-size: 20px;
          line-height: 28px;
        }
      }

      .banner_buttons {
        margin-top: 20px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .magic_club_v1_baner_left {
      justify-content: flex-start;
    }

    .magic_club_v1_baner_right {
      margin: 70px auto;
      padding: 0px 68px;
      max-width: 568px;
      width: 100%;

      .magic_club_v1_baner_right_img {
        width: 55%;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .magic_club_v1_baner_left {
      margin-top: 400px;
      min-height: 330px;
      h2 {
        font-size: 34px;
        line-height: 40px;
        margin-bottom: 20px;
      }

      h3 {
        font-size: 25px;
        line-height: 34px;
        
      }

      .coin-info {
        span {
          font-size: 16px;
          line-height: 24px;
        }
      }

      .banner_buttons{
        margin-top: 25px;
      }
    }

    .magic_club_v1_baner_right {
      padding-right: 0px;

      .magic_club_v1_baner_right_img_sect {
        height: 480px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .magic_club_v1_baner_left {
      margin-top: 340px;
      min-height: 400px;
      h2 {
        font-size: 28px;
      }

      h3 {
        font-size: 22px;
      }

      .coin-info {
        span {
          font-size: 12px;
          line-height: 20px;
        }
      }

      .banner_buttons{
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        
            .magic_club-btn + .magic_club-btn {
                margin-top: 20px;
            }
        }
    }

    .magic_club_v1_baner_right {
      padding-left: 34px;

      .mint_live_circle_sect{
        height: 90px;
        width: 90px;
        top: -36px;
        left: -40px;
      }
      
    }
  }

  @media (max-width: 375px) {
    .magic_club_v1_baner_left {
      margin-top: 340px;
      min-height: 400px;
      h2 {
        font-size: 25px;
      }
      h3 {
        font-size: 20px;
      }
      .coin-info {
        span {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }

  @media (max-width: 360px) {
    min-height: 640px;
    .player-wrapper {
      height: 640px;
    }
    .magic_club_v1_baner_left {
      margin-top: 100px;
      min-height: 340px;
      h2 {
        font-size: 20px;
        line-height: 25px;
      }
      h3 {
        font-size: 15px;
      }
      .coin-info {
        span {
          font-size: 10px;
          line-height: 16px;
        }
      }
    }
  }
`;

export default BannerV1Wrapper;
