import SectionTitle from "../../../common/sectionTitle";
import AboutUsStyleWrapper from "./AboutUs.style";

import { useRecoilState } from "recoil";
import { langState } from "../../../Atoms/langState";

const AboutUs = () => {
  const [lang] = useRecoilState(langState);
  return (
    <AboutUsStyleWrapper className="v2_about_us_section" id="about">
      <div className="container">
        <SectionTitle
          className="text-center"
          isCenter={true}
          title="About Us"
        />
        <div className="v2_about_us_content">
          <div className="v2_about_us_text">
            {lang === "Eng" ? (
              <p>
                The MAGIC CLUB NFT Exchange and the MAGIC SHOES M2E project will
                serve as a medium between community users and the four Dokkaebi
                gods who will bring them wealth and honor.
              </p>
            ) : (
              <p>
                매직클럽 NFT 거래소와 매직슈즈 M2E 프로젝트는 커뮤니티 유저들과
                그들에게 부와 명예를 안겨줄 4명의 도깨비들 사이에서 중요한
                매개체 역할을 수행할 것이다.
              </p>
            )}
          </div>
        </div>
      </div>
    </AboutUsStyleWrapper>
  );
};

export default AboutUs;
