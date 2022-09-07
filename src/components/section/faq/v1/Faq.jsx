import { FaMinus, FaPlus } from "react-icons/fa";

import SectionTitle from "../../../../common/sectionTitle";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../../common/accordion/Accordion";
import data from "../../../../assets/data/faq";
import FAQStyleWrapper from "./Faq.style";
import TitleFrame from "../../../../common/titleFrame/TitleFrame";

import { useRecoilState } from "recoil";
import { langState } from "../../../../Atoms/langState";

const FAQ = () => {
  const handleExpand = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const [lang] = useRecoilState(langState);

  return (
    <FAQStyleWrapper className="magic_club_faq_sect" id="faq">
      <div className="container">
        <div className="magic_club_faq_content">
          <SectionTitle
            isCenter={true}
            title="FAQ"
            subtitle="QUESTIONS & ANSWERS"
            className="text-center"
          />
          <TitleFrame />
          <div className="magic_club_faq_questions">
            <Accordion className="faq_questions">
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
                    <p>{item[`${lang}_text`]}</p>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </FAQStyleWrapper>
  );
};

export default FAQ;
