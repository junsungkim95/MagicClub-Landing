import SectionTitle from "../../../../common/sectionTitle";
import AboutStyleWrapper from "./About.style";

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

const About = () => {
  const [lang] = useRecoilState(langState);
  return (
    <AboutStyleWrapper className="v2_about_us_section" id="about">
      <div className="v2_about_overlay"></div>
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="About Us"
          subtitle="THE STORY"
        />
        <div className="v2_about_us_content">
          <div className="v2_about_us_text">
            <p>
              매직클럽 NFT 거래소와 매직슈즈 M2E 프로젝트는 커뮤니티 유저들에게
              부와 명예를 안겨주는 매개체 역할을 해 줄 것이다. 그 부와 명예를
              안겨 줄 4명의 도깨비들과 함께 NFT세상으로 떠날 준비가 된 당신은
              행운의 주인공이 될 것이다.
            </p>
          </div>
        </div>
      </div>
    </AboutStyleWrapper>
  );
};

export default About;
