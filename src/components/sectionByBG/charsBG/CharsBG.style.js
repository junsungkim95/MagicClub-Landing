import styled from "styled-components";

import charsBG from "../../../assets/images/bg/CharsWithLightBg.png"


const CharsBG = styled.section`
// background: linear-gradient(
//     to bottom,
//     rgba(8, 7, 9, 0.8) 2%,
//     rgba(8, 7, 9, 0.6) 5%,
//     rgba(8, 7, 9, 0.4) 20%,
//     rgba(8, 7, 9, 0.3) 30%,
//     rgba(8, 7, 9, 0.2) 50%,
//     rgba(8, 7, 9, 0.1) 75%,
//     rgba(8, 7, 9, 0.0) 100%
//   ), 
// url(${charsBG});
background-size: 100% 100%;
position: relative;
overflow: hidden;

  .htm-absolute {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 300px);
  }

  .about-absolute {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 770px);
  }

  .characters_bg {
    z-index: 0;
    // min-width: 1000px;
    // left: 50%;
    // transform: translate(-50%, 0%);
    bottom: 0;
    // mask-image: linear-gradient(
    //   to bottom,
    //   rgba(8, 7, 9, 0.05) 10%,
    //   rgba(8, 7, 9, 0.15) 20%,
    //   rgba(8, 7, 9, 0.75) 30%,
    //   rgba(8, 7, 9, 0.85) 50%,
    //   rgba(8, 7, 9, 0.9) 75%,
    //   rgba(8, 7, 9, 1) 100%
    // );
  }

  .charsOnBD {
    position: absolute;
    bottom: 0;
  }
  @media (max-width: 2500px) {
    .htm-absolute {
      transform: translate(-50%, 200px);
    }
    .about-absolute {
      transform: translate(-50%, 640px);
    }
    .characters_bg {
      padding-top: 0px;
    }
  }

  @media (max-width: 2000px) {
    .htm-absolute {
      transform: translate(-50%, 180px);
    }
    .about-absolute {
      transform: translate(-50%, 570px);
    }
    .characters_bg {
      padding-top: 0px;
    }
  }

  @media (max-width: 1600px) {
    .htm-absolute {
      transform: translate(-50%, 120px);
    }
    .about-absolute {
      transform: translate(-50%, 470px);
    }
    .characters_bg {
      padding-top: 0px;
    }
  }

  @media (max-width: 1350px) {
    .htm-absolute {
      transform: translate(-50%, 100px);
    }
    .about-absolute {
      transform: translate(-50%, 380px);
    }
    .characters_bg {
      padding-top: 0px;
    }
  }

  @media (max-width: 1150px) {
    .htm-absolute {
      transform: translate(-50%, 60px);
    }
    .about-absolute {
      transform: translate(-50%, 320px);
    }
    .characters_bg {
      padding-top: 0px;
    }
  }

  @media (max-width: 991px) {
    .htm-absolute {
      transform: translate(-50%, 60px);
    }
    .about-absolute {
      transform: translate(-50%, 260px);
    }
    .characters_bg {
      padding-top: 0px;
    }
  }

  @media (max-width: 900px) {
    .htm-absolute {
      transform: translate(-50%, 30px);
    }
    .about-absolute {
      transform: translate(-50%, 190px);
    }
    .characters_bg {
      padding-top: 0px;
    }
  }

  @media (max-width: 600px) {
    .htm-absolute {
      transform: translate(-50%, 100px);
    }
    .about-absolute {
      transform: translate(-50%, 430px);
    }
    .characters_bg {
      padding-top: 400px;
    }
  }

  @media (max-width: 400px) {
    .htm-absolute {
      transform: translate(-50%, 50px);
    }
    .about-absolute {
      transform: translate(-50%, 410px);
    }
    .characters_bg {
      padding-top: 400px;
    }
  }

  @media (max-width: 360px) {
    .htm-absolute {
      transform: translate(-50%, 0);
    }
    .about-absolute {
      transform: translate(-50%, 300px);
    }
    .characters_bg {
      padding-top: 300px;
    }
  }
`;

export default CharsBG;
