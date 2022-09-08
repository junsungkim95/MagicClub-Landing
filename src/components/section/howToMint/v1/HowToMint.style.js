import styled from "styled-components";

const HowToMintWrapper = styled.section`
  .how_to_mint_container {
    position: relative;

    .how_to_mint_title_frame {
      width: 100vw;
    }

    .how_to_mint_shadow {
      position: absolute;
      top: -370px;
      left: -130px;
      max-width: 900px;
      width: 100%;
      height: 547px;
      z-index: 0;
    }
    .how_to_mint_content {
      position: relative;
      padding: 0 40px;
      z-index: 1;

      ul {
        margin-left: auto;
          margin-right: auto;
          max-width: 1480px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        position: relative;
        li {
          width: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          h4 {
            font-family: "NotoSansJP-Bold";
            font-style: normal;
            font-weight: 400;
            font-size: 60px;
            line-height: 70px;
            margin-bottom: 100px;
            text-transform: uppercase;
            color: transparent;

            &.green {
              -webkit-text-stroke: 1px rgba(0, 255, 163, 0.7);
            }
            &.blue {
              -webkit-text-stroke: 1px rgba(88, 101, 242, 0.7);
            }
            &.yellow {
              -webkit-text-stroke: 1px rgba(255, 230, 0, 0.7);
            }
            &.red {
              -webkit-text-stroke: 1px rgba(255, 0, 76, 0.7);
            }
          }

          p {
            position: absolute;
            font-family: "NotoSansJP-Bold";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #ffffff;
            max-width: 148px;
            width: 100%;
            margin-left: 30px;
            margin-bottom: 0;
          }

          img {
            position: absolute;
            height: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 2000px) {
    // padding-top: 60px;
  }

  @media (max-width: 1600px) {
    // padding-top: 60px;
  }

  @media (max-width: 1350px) {
    // padding-top: 110px;
  }

  @media only screen and (max-width: 1199px) {
    // padding-top: 40px;
    .how_to_mint_container {
      .how_to_mint_content {
        ul {
          li {
            p {
              margin-left: 20px;
              line-height: 30px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .how_to_mint_container {
      .how_to_mint_content {
        ul {
          li {
            h4 {
              font-size: 25px;
              line-height: 45px;
              margin-bottom: 50px;
            }
            p {
              font-size: 10px;
              line-height: 15px;
              margin-left: 0px;
              padding: 10px 50px 0;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    // padding-top: 50px;
    .how_to_mint_container {
      .how_to_mint_content {
        ul {
          flex-wrap: wrap;
          li {
            width: 50%;
            h4 {
              font-size: 12px;
              line-height: 30px;
              margin-bottom: 30px;
            }
            p {
              font-size: 8px;
              line-height: 10px;
              padding: 10px 50px 0;
            }
            img {
              height: 45%;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    // padding-top: 60px;
    .how_to_mint_container {
      .how_to_mint_content {
        ul {
          flex-wrap: nowrap;
          flex-direction: column;
          li {
            h4 {
              font-size: 12px;
              line-height: 30px;
              margin-bottom: 30px;
            }
            p {
              font-size: 8px;
              line-height: 10px;
              padding: 10px 50px 0;
            }
            width: 100%;
            img {
              height: 20%;
            }
          }
        }
      }
    }
  }
`;

export default HowToMintWrapper;
