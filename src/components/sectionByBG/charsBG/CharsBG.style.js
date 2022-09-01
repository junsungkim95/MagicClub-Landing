import styled from "styled-components";

import charsBG from "../../../assets/images/bg/BackCityView.png"


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
min-height: 1500px;
position: relative;

.charsOnBD {
  position: absolute;
  bottom: 0;
}

@media (max-width: 1850px) {
  min-height: 1200px;
}

@media (max-width: 1000px) {
  min-height: 900px;
}

@media (max-width: 600px) {
  min-height: 700px;
}

@media (max-width: 400px) {
  min-height: 550px;
}
`;

export default CharsBG;
