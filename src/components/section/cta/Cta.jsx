import SectionTitle from "../../../common/sectionTitle";
import Button from "../../../common/button";

import CTAStyleWrapper from "./Cta.style";

import { useRecoilState } from "recoil";
import { langState } from "../../../Atoms/langState";

const CTA = () => {
  const [lang] = useRecoilState(langState);
  return (
    <CTAStyleWrapper>
      <div className="container">
        <SectionTitle
          className="magic_club_title_section text-center cta-title"
          title="SHOW US WHAT YOU GOT !!"
        ></SectionTitle>
        {lang === "Eng" ? (
          <p className="subtitle_eng">
            MAGIC CLUB Open Commemorative Contest Pre-Registration
          </p>
        ) : (
          <p className="subtitle">매직클럽 오픈기념 컨테스트 사전예약 접수</p>
        )}
        <div className="magic_club_v1_cta_content">
          <div className="join_comunity_btns">
            <Button disabled lg variant="mint" className="wishlist_btn">
            {lang === "Eng" ? 
              "Starting October 4th"
              :
              "10월 4일 오픈예정"
            }
            </Button>
          </div>
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
