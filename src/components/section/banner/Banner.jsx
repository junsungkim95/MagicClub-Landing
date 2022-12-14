import { useModal } from '../../../utils/ModalContext';
import Counter from '../../../common/counter';
import Button from '../../../common/button';
import BannerV1Wrapper from './Banner.style';

import { useCallback, useEffect, useMemo, useState } from "react";
import { totalMintCount } from "../../../utils/web3mint";

import { useRecoilState } from "recoil";
import { langState } from "../../../Atoms/langState";

import ReactPlayer from "react-player";
import VideoBG from "../../../assets/images/bg/Video_BG_comp.mp4";

import { isMetaMaskInstalled } from "../../../config";

const Banner = ({ totalSupply }) => {
  const { mintModalHandle, metamaskModalHandle, walletModalHandle, account } = useModal();
  const [lang] = useRecoilState(langState);
  const [vdView, setVdView] = useState("hidden");

  const handleWalletConnect = async () => {
    if (!isMetaMaskInstalled()) {
      return metamaskModalHandle();
    }

    walletModalHandle();
  };

  // useEffect(() =>{
  //   const calculateRemainingItems = async () => {
  //     let totaltMintedItems = await totalMintCount();
  //     console.log(totaltMintedItems);
  //     setRemaining(totaltMintedItems);
  //   }

  //   calculateRemainingItems();
  // },[])

  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="magic_club_v1_baner_left">
              {/* <h2>
                Magic Club <br />
                NFT collections
              </h2>
              <h3>
                <span className="count">
                  <Counter end={totalSupply} duration={0.5} />
                </span>{" "}
                / 9000 Minted
              </h3> */}
              <div className="banner_buttons">
                {/* <Button lg variant="mint" onClick={account ? mintModalHandle : handleWalletConnect}>
                  Mint now
                </Button> */}
                <div className='banner_buttons_deleted'></div>
              </div>
              <div className="coin-info">
                {/* {lang === "Eng" ? (
                  <span>5 NFTS PER TRANSACTION NO LIMIT PER WALLET</span>
                ) : (
                  <span>??????????????? NFT 5??? ?????? ??????, ????????? ????????????</span>
                )}
                {lang === "Eng" ? (
                  <span>
                    PRICE AND MINTING DATE: <span className="highlighted">0.08 ETH, OCT 19TH 14:30 UTC</span>
                  </span>
                ) : (
                  <span>
                    ?????? ??? ????????????: <span className="highlighted">0.08 ETH, 10??? 19??? 14:30 UTC</span>
                  </span>
                )} */}
                <div className='coin-info_deleted'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={VideoBG} // ???????????? url
          width="100%" // ???????????? ?????? (??????)
          height="100%" // ???????????? ?????? (??????)
          playing={true} // ?????? ?????? on
          muted={true} // ?????? ?????? on
          loop={true}
          playsinline={true} // ios ????????? ??????????????? ???????????? ??? ??????
          style={{ visibility: vdView }}
          onReady={() => setVdView("visible")}
        />
      </div>
    </BannerV1Wrapper>
  );
};

export default Banner;
