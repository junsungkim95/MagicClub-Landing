import data from "../../../../assets/data/characterSlider/characterSlider";

import CharacterSliderWrapper from "./CharacterSlider.style";

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';
import TitleFrame from "../../../../common/titleFrame/TitleFrame";


const CharacterSlider = () => {
  const [lang] = useRecoilState(langState);
  return (
    <CharacterSliderWrapper>
      <p className="nft-title">Magic Club NFT</p>
      <TitleFrame />
      <div className="chars-wrapper">
        {data?.map((item, i) => (
          <div className="chars-box">
            <div className="character-thumb">
              <img src={item.thumb} alt="magic club nft character" />
            </div>
            <span className="charsName">{item[`${lang}_name`]}</span><br />
            <span className="charsDesc">{item[`${lang}_description`]}</span>
          </div>
        ))}
      </div>
        
    </CharacterSliderWrapper>
  );
};

export default CharacterSlider;
