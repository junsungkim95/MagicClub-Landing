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

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

const FAQ = () => {
  const handleExpand = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const [lang] = useRecoilState(langState);

  return (
    <FAQStyleWrapper className="bithu_faq_sect" id="faq">
      <div className="container">
        <div className="bithu_faq_content">
          <SectionTitle
            isCenter={true}
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="QUESTIONS & ANSWERS"
            className="text-center"
          />

          <div className="bithu_faq_questions">
            <Accordion className="faq_questions">
              {data?.map((item, i) => (
                <AccordionItem key={i}>
                  <AccordionTitle handleExpand={handleExpand}>
                    <h5>{item.eng_title}</h5>
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
                    <p>{item.eng_text}</p>
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
