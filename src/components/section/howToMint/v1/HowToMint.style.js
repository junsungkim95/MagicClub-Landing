import styled from "styled-components";

const HowToMintWrapper = styled.section`
  padding-top: 190px;
  .how_to_mint_container {
    position: relative;

    .how_to_mint_shadow {
      position: absolute;
      top: -370px;
      left: -130px;
      max-width: 687px;
      width: 100%;
      height: 547px;
      z-index: 0;
    }

    .how_to_mint_content {
      position: relative;
      z-index: 1;

      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        li {
          width: 25%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          h4 {
            font-family: "NotoSansJP-Bold";
            font-style: normal;
            font-weight: 400;
            font-size: 60px;
            line-height: 140px;
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
            font-family: "NotoSansJP-Bold";
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 40px;
            color: #ffffff;
            max-width: 148px;
            width: 100%;
            margin-left: 35px;
            margin-bottom: 0;
          }
        }
      }
    }
  }

  @media (max-width: 2000px) {
    padding-top: 60px;
  }

  @media (max-width: 1600px) {
    padding-top: 60px;
  }

  @media (max-width: 1350px) {
    padding-top: 110px;
  }

  @media only screen and (max-width: 1199px) {
    padding-top: 40px;
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
              font-size: 45px;
              line-height: 95px;
            }
            p {
              font-size: 16px;
              line-height: 27px;
              margin-left: 15px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding-top: 50px;
    .how_to_mint_container {
      .how_to_mint_content {
        ul {
          flex-wrap: wrap;
          li {
            width: 50%;
            h4 {
              font-size: 30px;
              line-height: 45px;
            }
            p {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding-top: 60px;
    .how_to_mint_container {
      .how_to_mint_content {
        ul {
          flex-wrap: nowrap;
          flex-direction: column;
          li {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default HowToMintWrapper;
