import AboutCard from "./projectCard/ProjectCard";
import data from "../../../assets/data/about/aboutv1";
import ProjectWrapper from "./Project.style";
import TitleFrame from "../../../common/titleFrame/TitleFrame";
import SectionTitle from "../../../common/sectionTitle";

import { useRecoilState } from "recoil";
import { langState } from '../../../Atoms/langState';

const Project = () => {
  const { aboutInfo } = data; 
  const [lang] = useRecoilState(langState);
  return (
    <ProjectWrapper className="about_us_text_card_sect" id="project">
      <SectionTitle
            isCenter={true}
            title="Project"
            className="text-center"
          />
      {/* <TitleFrame /> */}
      <div className="row">
        {aboutInfo?.map((item, i) => (
          <div key={i} className="col-md-4">
            <AboutCard {...item} />
          </div>
        ))}
      </div>
    </ProjectWrapper>
  );
};

export default Project;
