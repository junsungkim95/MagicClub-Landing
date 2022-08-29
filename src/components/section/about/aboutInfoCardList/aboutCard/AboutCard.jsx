import AboutCardStyleWrapper from "./AboutCard.style";

const AboutCard = ({ title, text, mainTitle, image }) => {
  return (
    <AboutCardStyleWrapper className="about_us_text_card">
      <div className="cardContainer">
        {mainTitle == null? <img src={image} alt="magic club projects" /> : <h3 className="project_card_text">{mainTitle}</h3>}
      </div>
      <h4 className="project_name">{title}</h4>
      <p className="project_text">{text}</p>
    </AboutCardStyleWrapper>
  );
};

export default AboutCard;
