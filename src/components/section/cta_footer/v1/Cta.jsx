import { FaDiscord } from "react-icons/fa";
import SectionTitle from "../../../../common/sectionTitle";
import Button from "../../../../common/button";
import data from "../../../../assets/data/socialProfile";

import hoverShape from "../../../../assets/images/icon/hov_shape_s.svg";

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

import CTAStyleWrapper from "./Cta.style";

const CTA_footer = () => {
  const [lang] = useRecoilState(langState);
  return (
    <CTAStyleWrapper>
      <div className="container">
        <SectionTitle
          className="magic_club_title_section text-center"
          title="Join Our community &amp; get Early access"
        ></SectionTitle>
        <div className="magic_club_v1_cta_content">
          <div className="join_comunity_btns">
            <Button lg variant="blue" className="join_discord_btn">
              {" "}
              <FaDiscord /> Join Discord
            </Button>
          </div>
          <div className="cta_social_links">
            <ul>
              {data?.map((item, i) => (
                <li key={i}>
                  <a href={item.url}>
                    {item.thumb ? (
                      <img src={item.thumb} alt="magic_club nft profiles" />
                    ) : (
                      item.icon
                    )}
                  </a>
                  <img
                    className="social_hover_shape"
                    src={hoverShape}
                    alt="magic_club nft hover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA_footer;
