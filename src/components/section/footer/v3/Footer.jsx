import FooterBottom from "./footerBottom/FooterBottom";

import FooterStyleWrapper from "./Footer.style";
const Footer = () => {
  return (
    <FooterStyleWrapper>
      <div className="top-footer-content">
        <div className="container">
          <div className="row">
          </div>
        </div>
      </div>
      {/* footer bottom  */}
      <FooterBottom />
    </FooterStyleWrapper>
  );
};

export default Footer;
