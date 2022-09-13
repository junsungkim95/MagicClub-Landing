import SectionTitle from "../../../../common/sectionTitle";
// import dividerShape from "../../../../assets/images/nft/roadmap_v2_middle_shape.png";
import dividerShape from "../../../../assets/images/bg/divider_line.png";
import RoadMapItem from "./RoadMapItem";
import data from "../../../../assets/data/roadMap/roadMapV1";
import RoadMapStyleWrapper from "./RoadMap.style";
import TitleFrame from "../../../../common/titleFrame/TitleFrame";

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

const RoadMap = () => {
  const [lang] = useRecoilState(langState);
  return (
    <RoadMapStyleWrapper id="roadmap">
      <div className="container">
        <SectionTitle
          isCenter={true}
          title="Roadmap"
          className="text-center"
        />
        {/* <TitleFrame /> */}
        <div className="v2_roadmap_card_list">
          <div className="v2_roadmap_divider">
            <img src={dividerShape} alt="bith nft road map" />
          </div>
          <div className="row">
            {data?.map((item, i) => (
              <div key={i} className="col-md-6" data-aos="fade-up" data-aos-duration="2000">
                <RoadMapItem id={i} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </RoadMapStyleWrapper>
  );
};

export default RoadMap;
