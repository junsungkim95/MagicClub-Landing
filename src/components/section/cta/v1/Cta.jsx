import SectionTitle from "../../../../common/sectionTitle";
import Button from "../../../../common/button";

import CTAStyleWrapper from "./Cta.style";

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

const CTA = () => {
  const [lang] = useRecoilState(langState);
  return (
    <CTAStyleWrapper>
      <div className="container">
        <SectionTitle
          className="bithu_title_section text-center"
          title="SHOW US WHAT YOU GOT !!"
        ></SectionTitle>
        <p className="subtitle">매직클럽 오픈기념 컨테스트 사전예약 접수</p>
        <div className="bithu_v1_cta_content">
          <div className="join_comunity_btns">
            <Button lg variant="mint" className="wishlist_btn">
              바로가기
            </Button>
          </div>
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
