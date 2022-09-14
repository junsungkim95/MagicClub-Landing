import { useRecoilState } from "recoil";
import { langState } from "../../../../Atoms/langState";
import box from "../../../../assets/images/bg/roadmap-box.png";
import dot from "../../../../assets/images/bg/divdr-Ellipse.png";

const RoadMapItem = ({ id, title, text, text2, Eng_text }) => {
  const [lang] = useRecoilState(langState);
  return (
    <div
      className={
        id % 2 === 0
          ? `v2_roadmap_card_item v2_roadmap_card_item_odd`
          : `v2_roadmap_card_item v2_roadmap_card_item_even`
      }
      // data-aos={id % 2 === 0 ? `fade-left` : `fade-right`}
      // data-aos-duration="1000"
    >
      <img src={dot} className="v2_roadmap_card_box" />
      <div
        className={ 
          id % 2 === 0
            ? `v2_roadmap_card_content v2_roadmap_card_content_odd`
            : `v2_roadmap_card_content v2_roadmap_card_content_even`
        }
      >
        {id % 2 === 0 ? (
          <img src={box} className="odd_left_box" alt="left-box" />
        ) : (
          <img src={box} className="even_right_box" alt="right-box" />
        )}
        {/* <img src={right_box} className="mobile_box" alt="mobile-box" /> */}
        <h3>{title}</h3>
        <div className={text2 != null ? `roadmap_p_wrapper` : ``}>
          {
            lang == "Eng" ? 
            <p className="text_1">{Eng_text}</p>
            :
            <p className="text_1">{text}</p>
          }
          {
            lang !== "Eng" && text2 != null ? <p className="text_2">{text2}</p> : ""
          }
        </div>
      </div>
    </div>
  );
};

export default RoadMapItem;
