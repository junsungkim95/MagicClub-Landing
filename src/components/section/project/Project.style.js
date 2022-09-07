import styled from "styled-components"


const ProjectWrapper = styled.div` 
    position: relative;
    padding-top: 140px; 
    padding-bottom: 200px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;  

    .project_title {
        font-family: NotoSansJP-Bold;
        font-size: 50px;
        font-weight: 700;
        line-height: 42px;
        letter-spacing: -0.025em;
        text-align: center;
        color: white;
        margin-bottom: 20px;
    }

    .project_name {
        font-family: NotoSansJP-Bold;
        font-size: 32px;
        font-weight: 700;
        line-height: 64px;
        letter-spacing: 0em;
        text-align: center;
        color: white;
    }

    .project_text {
        font-family: NotoSansJP-Bold;
        font-size: 16px;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: center;
    }

    .about_us_text_card {
        background-color: none;
    }

    .cardContainer {
        margin-left: auto;
        margin-right: auto;
        width: 280px;
        height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        border-radius: 15px;
        overflow: hidden;
    }

    @media only screen and (max-width: 991px) {
        .about_us_text_card_sect {
        margin-top: 60px;

            &.md-mt-0 {
                margin-top: 0;
            }
        }
        .cardContainer {
            width: 240px;
            height: 240px;
        }
    }

    .row {
        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;
        max-width: 960px;
    }

    @media only screen and (max-width: 767px) {
        .row{
            .col-md-4 + .col-md-4{ 
                margin-top: 30px; 
            }
        }
    }
`

export default ProjectWrapper;