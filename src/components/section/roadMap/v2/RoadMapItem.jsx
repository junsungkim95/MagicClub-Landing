import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

const RoadMapItem = ({ id, title, text }) => {
  const [lang] = useRecoilState(langState);
  return (
    <div
      className={
        id % 2 === 0
          ? `v2_roadmap_card_item v2_roadmap_card_item_odd`
          : `v2_roadmap_card_item v2_roadmap_card_item_even`
      }
    >
      <div className="v2_roadmap_card_box"></div>
      <div className="v2_roadmap_card_content">
        <h3>
          {title}{" "}
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default RoadMapItem;
