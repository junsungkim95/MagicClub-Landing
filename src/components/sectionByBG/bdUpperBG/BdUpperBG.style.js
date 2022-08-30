import styled from "styled-components";

import bdUpperBg from "../../../assets/images/bg/NightViewBg.png"

const BdUpperBG = styled.section`
background: linear-gradient(
  to bottom,
  rgba(8, 7, 9, 0.9) 10%,
  rgba(8, 7, 9, 0.4) 20%,
  rgba(8, 7, 9, 0.3) 30%,
  rgba(8, 7, 9, 0.2) 50%,
  rgba(8, 7, 9, 0.1) 75%,
  rgba(8, 7, 9, 0.0) 100%
), url(${bdUpperBg});
  background-size: 100% 100%;
`;

export default BdUpperBG;
