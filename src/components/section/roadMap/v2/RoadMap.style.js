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
      // clip: rect(90px, auto, 1430px, 0 );
      img {
        height: 100%;
      }
    }

    .v2_roadmap_card_item {
      position: relative;
      width: 95%;

      &.v2_roadmap_card_item_even {
        padding: 0px 0px 0px 30px;
        margin-top: 80px;
        margin-right: auto;

        /* corner square shape */
        .v2_roadmap_card_box {
          left: 0px;
          top: 0px;
          transform: translate(-110%, 560%);
        }
      }
      &.v2_roadmap_card_item_odd {
        padding: 0px 30px 0px 0px;
        margin: -50px 0 50px auto;

        /* corner square shape */
        .v2_roadmap_card_box {
          right: 0px;
          top: 0px;
          transform: translate(110%, 540%);
        }
      }
      /* corner square shape */
      .v2_roadmap_card_box {
        height: 20px;
        width: 20px;
        position: absolute;
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
      .odd_left_box {
        left: 50%;
        transform: translate(-50%, 0%);
      }
    }

    .v2_roadmap_card_item_even {
      .even_right_box {
        left: 50%;
        transform: translate(-50%, 0%);
      }
    }

    .mobile_box {
      display: none;
    }

    .row {
      &:nth-child(2) {
        .col-md-6 {
          .v2_roadmap_card_item_even {
            margin-top: 50px;
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
      justify-content: center;
      font-size: 24px;
      line-height: 34px;
      color: #DAB96A;
      text-align: center;
      font-family: NotoSansJP-Bold;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 15px;
      padding-top: 2.5%;
      padding-left: 10%;
      padding-right: 10%;
    }

    p {
      text-align: center;
      font-weight: 500;
      font-size: 32px;
      line-height: 36px;
      color: rgba(255, 255, 255, 0.8);
      font-family: NotoSansJP;
      margin: 0;
    }

    img {
      position: absolute;
      z-index: -1;
    }

    .text_1 {
      padding-top: 10px;
      padding-bottom: 4px;
      font-family: NotoSansJP-Bold;
      font-weight: 700;
    }
    .text_2 {
      font-family: NotoSansJP-Bold;
      font-weight: 700;
    }
  }

  .v2_roadmap_card_content_odd {
    margin-right: 0px;
  }

  .v2_roadmap_card_content_even {
    margin-left: 0px;
  }

  .roadmap_p_wrapper {
    display: flex;
    flex-direction: column;
    margin-top: -16px;
  }

  @media (max-width: 1399px) {
    .v2_roadmap_card_content {
      h3 {
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 0px;
        padding-left: 11%;
        padding-right: 11%;
      }
  
      p {
        font-size: 28px;
        line-height: 24px;
      }

      .text_1 {
        padding-top: 28px;
        padding-bottom: 12px;
      }

      .roadmap_p_wrapper {
        margin-top: -10px;
      }
    }

    .v2_roadmap_card_list {
      .v2_roadmap_divider {
        // clip: rect(90px, auto, 1320px, 0 );
      }
    }

    .v2_roadmap_card_content_odd {
      // margin-right: -5px;
    }

    .v2_roadmap_card_content_even {
      // margin-left: -5px;
    }

    .v2_roadmap_card_list {
      .v2_roadmap_card_item {
        &.v2_roadmap_card_item_even {
          .v2_roadmap_card_box {
            transform: translate(-110%, 520%);
          }
        }
        &.v2_roadmap_card_item_odd {
          .v2_roadmap_card_box {
            transform: translate(110%, 500%);
          }
        }
      }
    }
  }

  @media (max-width: 1199px) {
    .v2_roadmap_card_content {
      h3 {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 0px;
        padding-left: 10%;
        padding-right: 10%;
      }
  
      p {
        font-size: 24px;
        line-height: 24px;
      }

      .text_1 {
        padding-top: 20px;
        padding-bottom: 10px;
      }

      .roadmap_p_wrapper {
        margin-top: -10px;
      }
    }

    .v2_roadmap_card_list {
      .v2_roadmap_divider {
        // clip: rect(90px, auto, 1260px, 0 );
      }
    }

    .v2_roadmap_card_content_odd {
      // margin-right: -11px;
    }

    .v2_roadmap_card_content_even {
      // margin-left: -11px;
    }

    .v2_roadmap_card_list {
      .v2_roadmap_card_item {
        &.v2_roadmap_card_item_even {
          .v2_roadmap_card_box {
            transform: translate(-110%, 420%);
          }
        }
        &.v2_roadmap_card_item_odd {
          .v2_roadmap_card_box {
            transform: translate(110%, 420%);
          }
        }
      }
    }
  }

  @media (max-width: 991px) {
    .v2_roadmap_card_content {
      h3 {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0px;
        padding-left: 6%;
        padding-right: 6%;
      }
  
      p {
        font-size: 14px;
        line-height: 22px;
      }

      .text_1 {
        padding-top: 14px;
        padding-bottom: 2px;
      }

      .roadmap_p_wrapper {
        margin-top: -11px;
      }
    }

    .v2_roadmap_card_list {
      .v2_roadmap_divider {
        // clip: rect(70px, auto, 1190px, 0 );
      }
    }

    .v2_roadmap_card_content_odd {
      // margin-right: -18px;
    }

    .v2_roadmap_card_content_even {
      // margin-left: -18px;
    }

    .v2_roadmap_card_list {
      .v2_roadmap_card_item {
        &.v2_roadmap_card_item_even {
          .v2_roadmap_card_box {
            transform: translate(-110%, 310%);
          }
        }
        &.v2_roadmap_card_item_odd {
          .v2_roadmap_card_box {
            transform: translate(110%, 360%);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .v2_roadmap_card_box {
      display: none;
    }

    .v2_roadmap_card_list {
      .v2_roadmap_divider {
        display: none;
      }
      .v2_roadmap_card_item {
        margin: 0px;
        width: 100%;
        margin-bottom: 50px;
        &.v2_roadmap_card_item_even {
          .even_right_box {
            left: 0;
            transform: translate(0, 0);
            margin-top: 0px;
          }
          padding: 0px;
        }
        &.v2_roadmap_card_item_odd {
          margin-top: 0px;
          .odd_left_box {
            left: 0;
            transform: translate(0, 0);
          }
          left: 0;
          padding: 0px;
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

    .v2_roadmap_card_content {
      h3 {
        font-size: 20px;
        line-height: 34px;
        margin-bottom: 0px;
        padding-left: 12%;
        padding-right: 12%;
      }
  
      p {
        font-size: 25px;
        line-height: 24px;
      }

      .text_1 {
        padding-top: 28px;
      }

      .roadmap_p_wrapper {
        margin-top: -10px;
      }

      .mobile_box {
        display: block;
      }
    }

    .v2_roadmap_card_content_odd {
      margin-right: 0px;
    }

    .v2_roadmap_card_content_even {
      margin-left: 0px;
    }
  }

  @media (max-width: 575px) {
    .v2_roadmap_card_content {
      h3 {
        font-size: 16px;
        line-height: 28px;
        margin-bottom: 0px;
        padding-left: 12%;
        padding-right: 12%;
      }
  
      p {
        font-size: 20px;
        line-height: 24px;
      }

      .text_1 {
        padding-top: 28px;
      }

      .roadmap_p_wrapper {
        margin-top: -8px;
      }
    }

    .v2_roadmap_card_content_odd {
      // margin-right: -18px;
    }

    .v2_roadmap_card_content_even {
      // margin-left: -18px;
    }
  }

  @media (max-width: 440px) {
    .v2_roadmap_card_content {
      h3 {
        font-size: 13px;
        line-height: 24px;
        margin-bottom: 0px;
        padding-left: 8%;
        padding-right: 8%;
      }
  
      p {
        font-size: 16px;
        line-height: 20px;
      }

      .text_1 {
        padding-top: 20px;
      }

      .roadmap_p_wrapper {
        margin-top: -8px;
      }
    }

    .v2_roadmap_card_content_odd {
      // margin-right: -18px;
    }

    .v2_roadmap_card_content_even {
      // margin-left: -18px;
    }
  }

  @media (max-width: 360px) {
    .v2_roadmap_card_content {
      h3 {
        font-size: 10px;
        line-height: 24px;
        margin-bottom: 0px;
        padding-left: 8%;
        padding-right: 8%;
      }
  
      p {
        font-size: 13px;
        line-height: 18px;
      }

      .text_1 {
        padding-top: 10px;
      }

      .roadmap_p_wrapper {
        margin-top: -5px;
      }
    }

    .v2_roadmap_card_content_odd {
      // margin-right: -20px;
    }

    .v2_roadmap_card_content_even {
      // margin-left: -20px;
    }
  }
`;

export default RoadMapStyleWrapper;
