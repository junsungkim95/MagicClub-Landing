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

.characters_bg {
  z-index: 0;
  // min-width: 1000px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
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
  padding-top: 0px;

}

@media (max-width: 2000px) {
  padding-top: 100px;
  // min-height: 1600px;
}

@media (max-width: 1600px) {
  padding-top: 0px;
}

@media (max-width: 1350px) {
}

@media (max-width: 991px) {
}

@media (max-width: 600px) {
}

@media (max-width: 400px) {
}
`;

export default CharsBG;
