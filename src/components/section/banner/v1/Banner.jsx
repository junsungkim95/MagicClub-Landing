import { useModal } from "../../../../utils/ModalContext";
import Counter from "../../../../common/counter";
import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";

import { useEffect, useState } from "react";
import { totalMintCount } from '../../../../utils/web3mint';

import { useRecoilState } from "recoil";
import { langState } from '../../../../Atoms/langState';

import ReactPlayer from 'react-player';
import VideoBG from "../../../../assets/images/bg/Video_BG_comp.mp4"

const Banner = () => {
  const { mintModalHandle, connectWalletModalHanlde, account } = useModal();
  const [remaining, setRemaining] = useState(0);

  const [lang] = useRecoilState(langState);

  useEffect(() =>{
    const calculateRemainingItems = async () => {
      let totaltMintedItems = await totalMintCount();
      console.log(totaltMintedItems);
      setRemaining(totaltMintedItems);
    }

    calculateRemainingItems();
  },[])
  return (
    <BannerV1Wrapper id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="magic_club_v1_baner_left">
              <h2>Magic Club <br />NFT collections</h2>
              <h3>
                <span className="count">
                  <Counter end={remaining} duration={remaining} />
                </span>{" "}
                / 10000 Minted
              </h3>
              <div className="banner_buttons">
                {
                  account ? 
                  <Button lg variant="mint" onClick={() => mintModalHandle()}>
                    {" "}
                    Mint now
                  </Button> :
                  <Button lg variant="mint" onClick={() => connectWalletModalHanlde()}>
                    {" "}
                    Mint now
                  </Button>
                }
              </div>
              <div className="coin-info">
                {lang === "Eng" ? <span>MAX 5 NFTS PER WALLET</span> : <span>지갑당 NFT 5개 구매 가능</span>}
                {lang === "Eng" ? <span>
                  Price and Minting Date: {" "}
                  <span className="highlighted">TBA</span>
                </span> : <span>
                  가격 및 민팅날짜: {" "}
                  <span className="highlighted">추후 공지 예정</span>
                </span>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={VideoBG} // 플레이어 url
          width="100%" // 플레이어 크기 (가로)
          height="100%" // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          muted={true} // 자동 재생 on
          loop={true}
          playsinline={true} // ios 동영상 플레이어로 넘어가는 것 방지
        />
      </div>
    </BannerV1Wrapper>
  );


};

export default Banner;
