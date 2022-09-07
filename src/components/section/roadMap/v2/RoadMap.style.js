import styled from "styled-components";

const RoadMapStyleWrapper = styled.section`
  padding-top: 132px;
  padding-bottom: 146px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  .v2_roadmap_card_list {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 52px;

    /* devider */
    .v2_roadmap_divider {
      position: absolute;
      top: 0px;
      height: 100%;
      img {
        height: 100%;
      }
    }

    .v2_roadmap_card_item {
      position: relative;
      width: 95%;

      &.v2_roadmap_card_item_even {
        padding: 30px 0px 0px 30px;
        margin-top: 80px;
        margin-right: auto;
      }
      &.v2_roadmap_card_item_odd {
        padding: 30px 30px 0px 0px;
        margin: 0 0 80px auto;
      }

      // .v2_roadmap_card_content {
      //   background: rgba(255, 255, 255, 0.05);
      //   padding: 30px 40px;
      //   position: relative;

      //   h3 {
      //     width: 100%;
      //     display: flex;
      //     align-items: center;
      //     justify-content: space-between;
      //     font-size: 24px;
      //     line-height: 34px;
      //     color: #00ffa3;
      //     text-transform: uppercase;
      //     margin-bottom: 15px;
      //   }

      //   p {
      //     font-weight: 500;
      //     font-size: 16px;
      //     line-height: 28px;
      //     color: rgba(255, 255, 255, 0.8);
      //     margin: 0;
      //   }

      //   img {
      //     position: absolute;
      //     z-index: -1;
      //   }
      // }
    }

    .v2_roadmap_card_item_odd {
      img {
        right: 0;
        transform: translateX(10%);
      }
    }

    .v2_roadmap_card_item_even {
      img {
        left: 0;
        transform: translateX(-10%);
      }
    }

    .row {
      &:nth-child(2) {
        .col-md-6 {
          .v2_roadmap_card_item_even {
            margin-top: 100px;
          }
        }
      }
    }
  }

  .v2_roadmap_card_content {
    // background: rgba(255, 255, 255, 0.05);
    padding: 30px 40px;
    position: relative;

    h3 {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 24px;
      line-height: 34px;
      color: #06132D;
      text-transform: uppercase;
      margin-bottom: 15px;
      padding-left: 10%;
    }

    p {
      text-align: center;
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
    }

    img {
      position: absolute;
      z-index: -1;
    }
  }

  .v2_roadmap_card_content_odd {
    h3 {
      flex-direction: row-reverse;
      padding-right: 10%;
    }
  }

  @media only screen and (max-width: 767px) {
    .v2_roadmap_card_list {
      .v2_roadmap_divider {
        display: none;
      }
      .v2_roadmap_card_item {
        margin: 0px;
        width: 100%;
        margin-bottom: 80px;
        &.v2_roadmap_card_item_even {
          margin-top: 0px;
        }
      }

      .row {
        &:nth-child(2) {
          .col-md-6 {
            .v2_roadmap_card_item_even {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
`;

export default RoadMapStyleWrapper;
