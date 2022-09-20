import { FaMinus, FaPlus } from "react-icons/fa";

import SectionTitle from "../../../common/sectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../common/storyAccordion/Accordion";
import data from "../../../assets/data/story";
import StoryStyleWrapper from "./Story.style";
import TitleFrame from "../../../common/titleFrame/TitleFrame";

import { useRecoilState } from "recoil";
import { langState } from "../../../Atoms/langState";

const Story = () => {
  const handleExpand = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const [lang] = useRecoilState(langState);

  return (
    <StoryStyleWrapper className="magic_club_story_sect" id="story">
      <div className="container">
        <div className="magic_club_story_content">
          <SectionTitle
            isCenter={true}
            title="Story"
            className="text-center"
          />
          {/* <TitleFrame /> */}
          <div className="magic_club_story_questions">
            <Accordion className="story_questions" allowZeroExpanded="true" >
              {data?.map((item, i) => (
                <AccordionItem key={i}>
                  <AccordionTitle handleExpand={handleExpand}>
                    <h5>{item[`${lang}_title`]}</h5>
                    <IconWrapper>
                      <OpenIcon>
                        <FaMinus />
                      </OpenIcon>
                      <CloseIcon>
                        <FaPlus />
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle>
                  <AccordionBody>
                    {/* json 배열 쓰는 내용 키값 에러 해결 */}
                    {typeof(item[`${lang}_text`]) === "object" ? 
                    item[`${lang}_text`].map((itm, idx) => (
                      <span style={{display: 'none'}} key={idx}>{itm}</span>
                    ))
                    : 
                    <></>}
                    {typeof(item[`${lang}_text`]) === "object" ? 
                    item[`${lang}_text`].map((itm, idx) => (
                      <span className="story_txt_wrap" key={idx}>{itm}</span>
                    ))
                    : 
                    <p className="story_txt_wrap">{item[`${lang}_text`]}</p>}
                    {/* <p style={{whiteSpace: "pre-wrap"}}>{item[`${lang}_text`]}</p> */}
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </StoryStyleWrapper>
  );
};

export default Story;
