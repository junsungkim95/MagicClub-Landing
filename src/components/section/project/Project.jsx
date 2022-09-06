import AboutCard from "./projectCard/ProjectCard";
import data from "../../../assets/data/about/aboutv1";
import ProjectWrapper from "../roadMap/Project.style";

import { useRecoilState } from "recoil";
import { langState } from '../../../Atoms/langState';

const Project = () => {
  const { aboutInfo } = data; 
  const [lang] = useRecoilState(langState);
  return (
    <ProjectWrapper className="about_us_text_card_sect" id="project">
      <h2 className="project_title">Project</h2>
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
