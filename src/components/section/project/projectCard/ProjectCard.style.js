import styled from "styled-components";

const ProjectCardStyleWrapper = styled.article`
  background: none;
  width: 100%;
  min-height: 160px;
  padding: 10px;

  .projectFrame {
    margin-top: 5%;
    width: 40%;
  }

  .project_card_text {
    font-family: "NotoSansJP-Bold";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;

    img {
      padding-right: 10px;
    }

    span {
      margin-right: 13px;
    }
  }

  .project_name {
    font-size: 20px;
    text-align: center;
    height: 30px;
  }

  .project_text {
    padding-top: 2px;
    font-family: "NotoSansJP";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 28px;
    margin-bottom: 0;
    text-align: center;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    h3 {
      font-size: 20px;
      line-height: 40px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      span {
        max-width: 40px;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 27px;
    h3 {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 767px) {
    p {
      max-width: 100%;
    }
  }

  @media (max-width: 375px) {
    h3 {
      font-size: 20px;
      line-height: 40px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      span {
        max-width: 40px;
      }
    }
  }
`;

export default ProjectCardStyleWrapper;
