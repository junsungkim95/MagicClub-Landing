import FooterBottomStyleWrapper from "./FooterBottom.style";
import data from "../../../../../assets/data/socialProfile";
import backToTopIcon from "../../../../../assets/images/icon/back_to_top.svg";
import footerShapesLeft from "../../../../../assets/images/icon/footer_shapes_left.png";
import footerShapesRight from "../../../../../assets/images/icon/footer_shapes_right.png";
import logo from "../../../../../assets/images/white_logo.png";
import frame from "../../../../../assets/images/Frame.svg";
import adamLogo from "../../../../../assets/images/Adam_logo.png";
import pdf from "../../../../../assets/MAGIC_CLUB_Terms_&_Conditions.pdf";


const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper className="footer_bottom">
      <div className="footer_bottom_content">
        {/* <span className="footer_shapes_left">
          <img src={footerShapesLeft} alt="nft footer" />
        </span>
        <span className="footer_shapes_right">
          <img src={footerShapesRight} alt="nft footer" />
        </span> */}
        <div className="container">
          <div className="footer_menu">
            <div className="bottom_footer_left">
              <div className="copyright_text">
                <img className="footerLogo" src={adamLogo} alt="magic clib logo" />
              </div>
              <div className="addr_div">
                <p className="email_address">info@magicclub.io</p>
                <a href={pdf} className="tnc_address">MAGIC CLUB Terms & Conditions</a>
                <div className="addresses addresses_pc">
                  <p>ADAMGALLERY PTE. LTD. (COMPANY NO. 202215311D)</p>
                  <p>111 SOMERSET ROAD #06-01A SOMERSET SINGAPORE 238164</p>
                  <p>Copyright © 2022 Magicclub.io All rights reserved.</p>
                </div>
              </div>
            </div>
            {/* <a href="# " className="bact_to_top_btn">
              <img src={backToTopIcon} alt="magic_club nft back to top" />
            </a> */}
            <div className="bottom_footer_right">
              <ul>
                {data?.map((item, i) => (
                  <li key={i}>
                    <a href={item.url}>
                      {item.thumb ? (
                        <img src={item.thumb} alt="magic_club nft social" />
                      ) : (
                        item.icon
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;
