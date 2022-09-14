import ProjectCardStyleWrapper from "./ProjectCard.style";

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

const AboutCard = ({ title, text, mainTitle, image, frame }) => {
  const [lang] = useRecoilState(langState);
  return (
    <ProjectCardStyleWrapper className="about_us_text_card">
      <div className="cardContainer">
        <img src={image} alt="magic club projects" />
        {mainTitle == null? <></> : <h3 className="project_card_text">{mainTitle}</h3>}
      </div>
      <h4 className="project_name">{title}</h4>
      <p className="project_text">{text}</p>
    </ProjectCardStyleWrapper>
  );
};

export default AboutCard;
