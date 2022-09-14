import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import metamaskIcon from "../../../../assets/images/icon/MetaMask.svg";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../../assets/images/logo.png";
import frame from "../../../../assets/images/Frame.svg";
import gitbook_logo from "../../../../assets/images/icon/gitbook-icon.svg";
import { isMetaMaskInstalled } from '../../../../config';
import Dropdown from 'react-bootstrap/Dropdown';

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

const Header = () => {
  const { walletModalHandle, connectWalletHandle, metamaskModalHandle, account, isWalletAlreadyConnected, disconnectWalletFromApp } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  const [lang, setLang] = useRecoilState(langState);


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
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  useEffect(() => {
    isWalletAlreadyConnected();
  },[isWalletAlreadyConnected]);

  return (
    <NavWrapper className="magic_club_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="magic_club_menu_sect">
          <div className="magic_club_menu_left_sect">
            <div className="logo">
              <a href="/">
                <img className="header_frame_img" src={frame} alt="magic_club nft frame" />
                <img className="header_logo_img" src={logo} alt="magic_club nft logo" />
              </a>
            </div>
          </div>
          <div className="magic_club_menu_right_sect">
            <div className="magic_club_menu_list">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#roadmap">Roadmap</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="magic_club_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>
              <a href="https://discord.gg/8BWsjJCTTX">
                <Button sm variant="outline" className="join_btn">
                <FaDiscord /> <span>Join</span>
              </Button>
              </a>
              { account ?
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic" className="connect_btn">
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
                <img className="metamask_logo" src={metamaskIcon} alt="magic_club nft logo" />
                <span>Connect</span>
              </Button>

              }
              <a href="https://adam-gallery-2.gitbook.io/magic-club/">
                <img className="gitbook_logo" src={gitbook_logo} alt="magic_club nft logo" />
              </a>
              {/* 리코일 테스트 공간 */}

              {/* 언어변경 버튼 */}
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-lang" className="lang_btn">
                  {lang}
                </Dropdown.Toggle>
          
                <Dropdown.Menu>
                  <Dropdown.Item href="# " onClick={() => setLang("Eng") }>English</Dropdown.Item>
                  <Dropdown.Item href="# " onClick={() => setLang("Kor") }>Korean</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* 언어변경 버튼 끝 */}
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
