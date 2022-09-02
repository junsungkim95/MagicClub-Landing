import styled from "styled-components";

import treeUpperBG from "../../../assets/images/bg/TreeupperBg.png"

const TreeUpperBG = styled.section`
// background: linear-gradient(
//   to bottom,
//   rgba(8, 7, 9, 0.0) 10%,
//   rgba(8, 7, 9, 0.1) 20%,
//   rgba(8, 7, 9, 0.2) 30%,
//   rgba(8, 7, 9, 0.3) 50%,
//   rgba(8, 7, 9, 0.4) 75%,
//   rgba(8, 7, 9, 0.9) 100%
// ), 
// url(${treeUpperBG});
// background: linear-gradient(
//   to bottom,
//   rgba(8, 7, 9, 0.0) 10%,
//   rgba(8, 7, 9, 0.1) 20%,
//   rgba(8, 7, 9, 0.2) 30%,
//   rgba(8, 7, 9, 0.3) 50%,
//   rgba(8, 7, 9, 0.4) 75%,
//   rgba(8, 7, 9, 0.9) 100%
// );
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
    rgba(8, 7, 9, 0.7) 20%,
    rgba(8, 7, 9, 0.5) 30%,
    rgba(8, 7, 9, 0.05) 50%,
    rgba(8, 7, 9, 0.0) 75%,
    rgba(8, 7, 9, 0.0) 100%
  );
}

.treeBG-logo-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 250px;
  padding-bottom: 800px;
}

.treeBG-logo {
  z-index: 1;
  width: 300px;
}

@media (max-width: 2250px) {
  .treeBG-logo-wrapper {
    padding-top: 250px;
  padding-bottom: 600px;
  }
}

@media (max-width: 1800px) {
  .treeBG-logo-wrapper {
    padding-top: 170px;
    padding-bottom: 400px;
  }
}

@media (max-width: 1400px) {
  .treeBG-logo-wrapper {
    padding-top: 140px;
    padding-bottom: 300px;
  }
}

@media (max-width: 1000px) {
  background-size: 100% 60%;
  background-repeat: no-repeat;
  .treeBG-logo-wrapper {
    padding-top: 110px;
    padding-bottom: 300px;
  }
}

@media (max-width: 575px) {
  background-size: 100% 40%;
  background-repeat: no-repeat;
  .treeBG-logo-wrapper {
    padding-top: 80px;
    padding-bottom: 200px;
  }
}
`;

export default TreeUpperBG;
