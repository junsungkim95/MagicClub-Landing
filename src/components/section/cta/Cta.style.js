import styled, { keyframes } from "styled-components";

const star1 = keyframes`
        0%,
        100% {
            top: 0%;
        }

        50% {
            top: 3%;
    }
`;
const star2 = keyframes`
        0%,
    100% {
        top: 20%;
    }

    50% {
        top: 23%;
    }
`;
const star6 = keyframes`
      0%,
    100% {
        bottom: 15%;
    }

    50% {
        bottom: 18%;
    }
`;
const star7 = keyframes`
      0%,
    100% {
        bottom: 0%;
    }

    50% {
        bottom: 3%;
    }
`;

const CTAStyleWrapper = styled.section`
  padding-top: 40px;

  .subtitle{
    font-family: NotoSansJP;
    font-size: 40px;
    font-weight: 400;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: center;
  }

  .subtitle_eng{
    font-family: NotoSansJP;
    font-size: 40px;
    font-weight: 400;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: center;
  }

  .cta-title {
    font-family: NotoSansJP-Bold;
    font-size: 40px;
    line-height: 67px;
    margin: 0;
  }

  .magic_club_title_section {
    width: 85%;
    margin: 0 auto;
    img {
      display: none;
    }

    h2,
    h3 {
      margin: 0;
      // font-size: 28px;
    }
  }
  .title-emo {
    text-align: center;
    font-size: 50px;
  }

  .nft_rarity {
    width: 100%;
  }

  .magic_club_v1_cta_content {
    position: relative;
    z-index: 1;

    /* particles */
    /* particles */
    .footer_stras_sect {
      height: 356px;
      width: 100%;
      position: absolute;
      top: -150px;
      z-index: 0;
      .footer_stars {
        position: relative;
        height: 100%;
        /* width: 100%; */
        span {
          position: absolute;
        }
        .star_1 {
          top: 0%;
          right: 5%;
          animation: ${star1} 4s infinite;
        }
        .star_2 {
          top: 20%;
          left: 0%;
          animation: ${star2} 5s infinite;
        }
        .star_3 {
          top: 34%;
          left: 20%;
          /* animation: star3 4s infinite; */
        }
        .star_4 {
          top: 50%;
          left: 44%;
          /* animation: star4 4s infinite; */
        }
        .star_5 {
          bottom: 26%;
          right: 27%;
          /* animation: star5 4s infinite; */
        }
        .star_6 {
          bottom: 15%;
          right: 10%;
          animation: ${star6} 3.5s infinite;
        }
        .star_7 {
          bottom: 0px;
          left: 10%;
          animation: ${star7} 3.5s infinite;
        }
      }
    }
  }

  .join_comunity_btns {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 430px;
    margin: auto;
    margin-top: 47px;
    padding-bottom: 60px;
    position: relative;
    z-index: 1;
  }

  .cta_social_links {
    max-width: 540px;
    margin: auto;
    margin-bottom: 70px;
    position: relative;
    z-index: 1;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      li {
        width: 11%;
        height: 60px;
        background: none;
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          color: #ffffff;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            font-size: 20px;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
        .social_hover_shape {
          position: absolute;
          top: 7px;
          left: 7px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s;
        }

        &:hover {
          .social_hover_shape {
            opacity: 1;
            visibility: visible;
          }
        }
      }
      li + li {
        margin-left: 15px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .magic_club_title_section {
      width: 75%;
    }
    .title-emo {
      font-size: 40px;
    }
    
    .subtitle, .subtitle_eng {
      padding-top: 20px;
      font-size: 18px;
      line-height: 24px;
    }
  }
  @media only screen and (max-width: 575px) {
    .join_comunity_btns {
      max-width: 400px;
      .wishlist_btn {
        width: 46%;
        font-size: 14px;
      }
      .join_discord_btn {
        width: 46%;
        font-size: 14px;
      }
    }

    .subtitle, .subtitle_eng {
      padding-top: 20px;
      font-size: 16px;
      line-height: 24px;
    }

    .cta_social_links {
      max-width: 425px;

      ul {
        li {
          height: 48px;
          width: 12%;
          a {
            img {
              height: 14px;
            }
            svg {
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 425px) {
    .magic_club_title_section {
      width: 95%;
    }
    .title-emo {
      font-size: 30px;
    }
    .join_comunity_btns {
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      row-gap: 25px;

      .wishlist_btn {
        width: 180px;
        font-size: 14px;
      }
      .join_discord_btn {
        width: 180px;
        font-size: 14px;
      }
    }

    .subtitle, .subtitle_eng {
      padding-top: 20px;
      font-size: 13px;
      line-height: 24px;
    }

    .footer_social_links {
      ul {
        li {
          height: 40px;
          width: 12%;
          a {
            svg {
              font-size: 12px;
            }
            img {
              height: 12px;
            }
          }
        }
      }
    }
  }
`;

export default CTAStyleWrapper;
