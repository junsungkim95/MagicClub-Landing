import styled from "styled-components";

import treeUpperBG from "../../../assets/images/bg/TreeupperBg.png"

const TreeUpperBG = styled.section`
background: none;
background-size: 100% 100%;
position: relative;
overflow: hidden;

.moonBG {
  z-index: 0;
  min-width: 1000px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 0;
  mask-image: linear-gradient(
    to bottom,
    rgba(8, 7, 9, 1) 10%,
    rgba(8, 7, 9, 0.9) 30%,
    rgba(8, 7, 9, 0.7) 40%,
    rgba(8, 7, 9, 0.4) 70%,
    rgba(8, 7, 9, 0.1) 85%,
    rgba(8, 7, 9, 0.0) 100%
  );
}

.moonL {
  position: absolute;
  width: 72%;
  top: 30px;
  left: -21%;
  opacity: 0.2;
}

.moonR {
  position: absolute;
  width: 72%;
  top: 30px;
  right: -21%;
  opacity: 0.2;
}

.treeBG-logo-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 250px;
  padding-bottom: 550px;
}
.logos{
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.treeBG-frame {
  z-index: 1;
  width: 180px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
.treeBG-logo {
  z-index: 1;
  width: 430px;
}
.treeBG-logos {
  // height: 320px;
  width: 400px;
  padding-bottom: 214px;
  z-index: 1;
}

@media (max-width: 2250px) {
  .treeBG-logo-wrapper {
    padding-top: 130px;
  padding-bottom: 500px;
  }
}

@media (max-width: 1800px) {
  .treeBG-logo-wrapper {
    padding-top: 120px;
    padding-bottom: 300px;
  }
  .treeBG-frame {
    width: 160px;
  }
  .treeBG-logo {
    width: 250px;
  }
  .treeBG-logos {
    // height: 246px;
    width: 350px;
    padding-bottom: 153px;
  }
}

@media (max-width: 1400px) {
  .treeBG-logo-wrapper {
    padding-top: 50px;
    padding-bottom: 240px;
  }
  .treeBG-frame {
    width: 110px;
  }
  .treeBG-logo {
    width: 200px;
  }
  .treeBG-logos {
    // height: 180px;
    width: 300px;
    padding-bottom: 100px;
  }
}

@media (max-width: 1000px) {
  background-size: 100% 60%;
  background-repeat: no-repeat;
  .treeBG-logo-wrapper {
    padding-top: 50px;
    padding-bottom: 120px;
  }
  .treeBG-frame {
    width: 100px;
    margin-bottom: 10px;
  }
  .treeBG-logo {
    width: 170px;
  }
  .treeBG-logos {
    // height: 160px;
    width: 250px;
    padding-bottom: 94px;
  }
}

@media (max-width: 575px) {
  background-size: 100% 40%;
  background-repeat: no-repeat;
  .treeBG-logo-wrapper {
    padding-top: 80px;
    padding-bottom: 110px;
  }
  .treeBG-frame {
    width: 80px;
  }
  .treeBG-logo {
    width: 150px;
  }
  .treeBG-logos {
    // height: 135px;
    width: 200px;
    padding-bottom: 94px;
  }
}
`;

export default TreeUpperBG;
