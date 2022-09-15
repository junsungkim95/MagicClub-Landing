import styled from "styled-components";
import aboutBg from "../../../assets/images/nft/v2_about_bg.png"
const AboutUsStyleWrapper = styled.section` 
    // min-height: 1590px;
    padding-top: 132px;
    padding-bottom: 0px;
    background: none;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative; 
    width: 100vw;
    max-width: 1100px;

    .v2_about_us_content {
        position: relative;
    }

    .v2_about_us_text {
        position: relative;
        // max-width: 770px; 
        margin: 46px auto auto auto; 
        z-index: 2;
        p { 
            font-weight: 500;
            font-size: 16px;
            line-height: 28px;
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
            margin: auto;
        }
        p+p {
            margin: 20px 0; 
        }
    }

    @media (max-width: 2000px) {
        // padding-top: 60px;
        // min-height: 1190px;
    }

    @media (max-width: 1600px) {
        // min-height: 1075px;
    }

    @media (max-width: 1350px) {
        padding-top: 132px;
        // min-height: 870px;
        .v2_about_us_text {
            
            margin-top: 15px;
            p {
                font-size: 14px;
                // max-width: 700px;
            }
        }
    }

    @media only screen and (max-width: 1199px) {
        // padding-top: 10px;
        // min-height: 750px;
        .v2_about_us_text {
            margin-top: 15px;
        }
    }

    @media only screen and (max-width: 991px) {
        // min-height: 700px;
        // padding-top: 40px;
        .v2_about_us_text {
            margin-top: 10px;
        }
    }

    @media only screen and (max-width: 767px) {
        // min-height: 700px;
        // padding-top: 100px;
        .v2_about_us_text {
            margin-top: 14px;
            p {
                font-size: 13px;
                line-height: 16px;
            }
        }
    }

    @media only screen and (max-width: 650px) {
        // min-height: 550px;
        // padding-top: 65px;
    }

    @media only screen and (max-width: 480px) {
        // min-height: 470px;
        // padding-top: 45px;
    }

    @media only screen and (max-width: 400px) {
        // min-height: 380px;
        .v2_about_us_text {
            margin-top: 20px;
            p {
                font-size: 11px;
                line-height: 15px;
                margin-bottom: 12px;
            }
        }
    }

`

export default AboutUsStyleWrapper;