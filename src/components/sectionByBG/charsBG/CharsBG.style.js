import styled from "styled-components";

const CharsBG = styled.section`
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
    bottom: 0;
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
      transform: translate(-50%, 10px);
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
      transform: translate(-50%, 680px);
    }
    .characters_bg {
      padding-top: 600px;
    }
  }

  @media (max-width: 480px) {
    .htm-absolute {
      transform: translate(-50%, 30px);
    }
    .about-absolute {
      transform: translate(-50%, 650px);
    }
    .characters_bg {
      padding-top: 630px;
    }
  }
`;

export default CharsBG;
