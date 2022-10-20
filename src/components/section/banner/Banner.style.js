import styled, { keyframes } from 'styled-components';
import sectionBgImage from '../../../assets/images/bg/intro_img.png';

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
  width: 100%;
  background-size: 100% 100%;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: -6px;

  .player-wrapper {
    z-index: 0;
    margin-top: 0px;
    width: 100%;
    height: 100%;
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
    position: absolute;
    left: 25%;
    bottom: 10%;

    h2 {
      font-family: 'NotoSansJP-Bold';
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
      font-family: 'NotoSansJP-Bold';
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

    .banner_buttons_deleted {
      height: 60px;
    }

    .coin-info {
      display: flex;
      flex-direction: column;
      margin-top: 17px;
      span {
        font-family: 'NotoSansJP-Bold';
        font-size: 18px;
        line-height: 36px;
        font-weight: bold;
        text-shadow: rgb(0 0 0) 1px 1px;
        text-transform: uppercase;
        color: rgb(255, 255, 255);
        z-index: 1;

        & .highlighted {
          color: #efe705;
        }
      }
    }

    .coin-info_deleted {
      height: 60px;
    }
  }

  @media (max-width: 1580px) {
    .magic_club_v1_baner_left {
      left: 8%;
      bottom: 2%;
      font-weight: bold;
      text-shadow: 1px 1px #000000;
      h2 {
        margin-bottom: 20px;
        font-weight: bold;
        text-shadow: 1px 1px #000000;
      }
      h3 {
        margin-bottom: 20px;
        font-weight: bold;
        text-shadow: 1px 1px #000000;
      }

      .banner_buttons {
        margin-top: 10px;
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    .magic_club_v1_baner_left {
      margin-top: 300px;
      min-height: 330px;
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

      left: 5%;
      bottom: 0%;
    }
  }

  @media only screen and (max-width: 991px) {
    min-height: 900px;
    .magic_club_v1_baner_left {
      max-width: 430px;
      left: 50%;
      transform: translate(-50%, 0%);
      text-align: center;
      min-height: 350px;
      justify-content: flex-start;
      h2 {
        margin-left: auto;
        margin-right: auto;
      }

      h3,
      .banner_buttons,
      .coin-info {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    min-height: 767px;
    .magic_club_v1_baner_left {
      left: 50%;
      transform: translate(-50%, 0%);
      min-height: 330px;
      margin-top: 400px;
      h2 {
        font-size: 34px;
        line-height: 40px;
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

      .banner_buttons {
        margin-top: 25px;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    min-height: 640px;
    .player-wrapper {
      margin-top: 30px;
    }
    .magic_club_v1_baner_left {
      margin-top: 340px;
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
    }
  }

  @media (max-width: 420px) {
    .player-wrapper {
      margin-top: 60px;
    }
    .magic_club_v1_baner_left {
      max-width: 265px;
      // left: 20%;
      // transform: translate(-30%, 0%);
    }
    .banner_buttons {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .magic_club-btn + .magic_club-btn {
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 375px) {
    .player-wrapper {
      margin-top: 30px;
    }
    .magic_club_v1_baner_left {
      max-width: 237px;
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
      margin-top: 90px;
    }

    .magic_club_v1_baner_left {
      max-width: 200px;
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
