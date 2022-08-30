import styled from "styled-components";

import treeUpperBG from "../../../assets/images/bg/TreeupperBg.png"

const TreeUpperBG = styled.section`
background: linear-gradient(
  to bottom,
  rgba(8, 7, 9, 0.0) 10%,
  rgba(8, 7, 9, 0.1) 20%,
  rgba(8, 7, 9, 0.2) 30%,
  rgba(8, 7, 9, 0.3) 50%,
  rgba(8, 7, 9, 0.4) 75%,
  rgba(8, 7, 9, 0.9) 100%
), 
url(${treeUpperBG});
  background-size: 100% 100%;

.treeBG-logo-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 170px;
  padding-bottom: 400px;
}

.treeBG-logo {
  width: 300px;
}
`;

export default TreeUpperBG;
