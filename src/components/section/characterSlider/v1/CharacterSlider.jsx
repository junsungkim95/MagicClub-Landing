import data from "../../../../assets/data/characterSlider/characterSlider";

import CharacterSliderWrapper from "./CharacterSlider.style";
import SectionTitle from "../../../../common/sectionTitle";
import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';
import TitleFrame from "../../../../common/titleFrame/TitleFrame";


const CharacterSlider = () => {
  const [lang] = useRecoilState(langState);
  return (
    <CharacterSliderWrapper>
      <SectionTitle
        isCenter={true}
        title="Magic Club NFT"
        className="text-center"
      />
      {/* <TitleFrame /> */}
      <div className="chars-wrapper">
        {data?.map((item, i) => (
          <div className="chars-box">
            <div className="character-thumb">
              <img src={item.thumb} alt="magic club nft character" />
            </div>
            <div className="charsName">
              <span>{item[`${lang}_name`]}</span>
            </div>
            <span className="charsDesc">{item[`${lang}_description`]}</span>
          </div>
        ))}
      </div>
        
    </CharacterSliderWrapper>
  );
};

export default CharacterSlider;
