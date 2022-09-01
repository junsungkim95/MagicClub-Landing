import AboutCard from "./aboutCard/AboutCard";
import data from "../../../../assets/data/about/aboutv1";
import AboutInfoCardListWrapper from "./AboutInfoCardList.style";

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

const AboutInfoCardList = () => {
  const { aboutInfo } = data; 
  const [lang] = useRecoilState(langState);
  return (
    <AboutInfoCardListWrapper className="about_us_text_card_sect">
      <h2 className="project_title">Project</h2>
      <div className="row">
        {aboutInfo?.map((item, i) => (
          <div key={i} className="col-md-4">
            <AboutCard {...item} />
          </div>
        ))}
      </div>
    </AboutInfoCardListWrapper>
  );
};

export default AboutInfoCardList;
