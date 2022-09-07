import { useRecoilState } from "recoil";
import { langState } from "../../../../Atoms/langState";
import left_box from "../../../../assets/images/bg/roadmap_box_left.png";
import right_box from "../../../../assets/images/bg/roadmap_box_right.png";

const RoadMapItem = ({ id, title, text }) => {
  const [lang] = useRecoilState(langState);
  return (
    <div
      className={
        id % 2 === 0
          ? `v2_roadmap_card_item v2_roadmap_card_item_odd`
          : `v2_roadmap_card_item v2_roadmap_card_item_even`
      }
      data-aos={id % 2 === 0 ? `fade-left` : `fade-right`}
      data-aos-duration="1000"
    >
      <div
        className={
          id % 2 === 0
            ? `v2_roadmap_card_content v2_roadmap_card_content_odd`
            : `v2_roadmap_card_content v2_roadmap_card_content_even`
        }
      >
        {id % 2 === 0 ? (
          <img src={left_box} alt="left-box" />
        ) : (
          <img src={right_box} alt="right-box" />
        )}
        <h3>{title} </h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default RoadMapItem;
