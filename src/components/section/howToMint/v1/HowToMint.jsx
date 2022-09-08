import SectionTitle from "../../../../common/sectionTitle";
import data from "../../../../assets/data/howToMint";
import TitleFrame from "../../../../common/titleFrame/TitleFrame";
import htm_box from "../../../../assets/images/bg/htm_box.png"

import HowToMintWrapper from "./HowToMint.style";

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

const HowToMint = () => {
  const [lang] = useRecoilState(langState);
  return (
    <HowToMintWrapper>
      <div className="how_to_mint_container">
        <SectionTitle
          classNameName="md-pb-20"
          title="HOW TO MINT"
        />
        <div className="how_to_mint_title_frame">
          <TitleFrame />
        </div>
        <div className="how_to_mint_content">
          <ul>
            {data?.map((item, i) => (
              <li key={i}>
                <h4 className={item.mintColor}>{item.num}</h4>
                {/* <p>{item.text}</p> */}
                <img src={htm_box} alt="htm box" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HowToMintWrapper>
  );
};

export default HowToMint;
