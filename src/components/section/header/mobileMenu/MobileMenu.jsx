import { useState } from "react";
import { useModal } from "../../../../utils/ModalContext";
import { FaDiscord, FaTwitter, FaWallet } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import Button from "../../../../common/button";
import logo from "../../../../assets/images/logo.png";
import gitbook_logo from "../../../../assets/images/icon/gitbook-icon.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import { isMetaMaskInstalled } from '../../../../config';
import MobileMenuStyleWrapper from "./MobileMenu.style";

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

const MobileMenu = ({ mobileMenuhandle }) => {
  const { walletModalHandle, connectWalletHandle, metamaskModalHandle, account, disconnectWalletFromApp } = useModal();
  const [isSubmenu, setSubmenu] = useState(false);
  const [lang, setLang] = useRecoilState(langState);

  const handleSubmenu = () => {
    setSubmenu(!isSubmenu);
  };

  const substr = (str, n) =>{
    return str.length > n ? str.substr(0, n -1) : str;
  }

  const handleWalletConnect = async () =>{
    if(!isMetaMaskInstalled()){
      metamaskModalHandle();
    }else{
      // walletModalHandle();
      connectWalletHandle();
    }
  }
  return (
    <MobileMenuStyleWrapper className="magic_club_mobile_menu">
      <div className="magic_club_mobile_menu_content">
        <div className="mobile_menu_logo">
          <img className="magic_club_logo" src={logo} alt="magic club logo" />
          <button
            className="mobile_menu_close_btn"
            onClick={() => mobileMenuhandle()}
          >
            {" "}
            <BsXLg />{" "}
          </button>
        </div>
        <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-lang-mobile" className="lang_btn_mobile">
              {lang}
            </Dropdown.Toggle>
      
            <Dropdown.Menu>
              <Dropdown.Item href="# " onClick={() => setLang("Eng") }>English</Dropdown.Item>
              <Dropdown.Item href="# " onClick={() => setLang("Kor") }>Korean</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        <div className="magic_club_mobile_menu_list">
          <ul>
            <li className="mobile_menu_hide">
              <a href="#home">Home</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#about">About</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#team">Team</a>
            </li>
            <li className="mobile_menu_hide">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="mobile_menu_social_links">
          <a href="# ">
            <FaTwitter />
          </a>
          <a href="# ">
            <FaDiscord />
          </a>
          <a href="https://adam-gallery-2.gitbook.io/magic-club/">
            <img className="gitbook_logo_mobile" src={gitbook_logo} alt="magic_club nft logo" />
          </a>
        </div>
        { account ?
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="connect_btn">
              { substr(account.toString(), 15) }
            </Dropdown.Toggle>
      
            <Dropdown.Menu>
              <Dropdown.Item href="# " onClick={() => disconnectWalletFromApp() }>Disconnect</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          :
          <Button
            sm
            variant="hovered"
            className="connect_btn"
            onClick={() => handleWalletConnect()}
          >
            <FaWallet />
            Connect
          </Button>

          }
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
