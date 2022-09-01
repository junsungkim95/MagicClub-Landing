import styled from "styled-components";

import charsBG from "../../../assets/images/bg/CharsWithLightBg.png"


const CharsBG = styled.section`
background: linear-gradient(
    to bottom,
    rgba(8, 7, 9, 0.8) 2%,
    rgba(8, 7, 9, 0.6) 5%,
    rgba(8, 7, 9, 0.4) 20%,
    rgba(8, 7, 9, 0.3) 30%,
    rgba(8, 7, 9, 0.2) 50%,
    rgba(8, 7, 9, 0.1) 75%,
    rgba(8, 7, 9, 0.0) 100%
  ), 
url(${charsBG});
background-size: 100% 100%;
padding-top: 200px;
min-height: 1300px;
position: relative;

.charsOnBD {
  position: absolute;
  bottom: 0;
}

@media (max-width: 1850px) {
  padding-top: 100px;
  min-height: 1100px;
}

@media (max-width: 1000px) {
  padding-top: 80px;
  min-height: 1000px;
}

@media (max-width: 600px) {
  padding-top: 0px;
  min-height: 600px;
}

@media (max-width: 400px) {
  min-height: 650px;
}
`;

export default CharsBG;
