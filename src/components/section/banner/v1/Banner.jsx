import { useModal } from "../../../../utils/ModalContext";
import Counter from "../../../../common/counter";
import Button from "../../../../common/button";
import BannerV1Wrapper from "./Banner.style";

import characterThumb from "../../../../assets/images/nft/Character1.png";
import mintLiveDownArrow from "../../../../assets/images/nft/mint_live_down_arrow.svg";
import mintLiveText from "../../../../assets/images/nft/mint_live_text.png";
import homeImageBG from "../../../../assets/images/nft/home_img_bg.png";
import { useEffect, useState } from "react";
import { totalMintCount } from '../../../../utils/web3mint';

import styled from "styled-components"
import Vimeo from "@u-wave/react-vimeo"

const VideoContainer = styled.div`
bottom: 0;
left: 0;
min-height: 100%;
min-width: 100%;
object-fit: cover;
object-position: center;
position: fixed;
right: 0;
top: 0;
z-index: -1;
`

const Video = styled(props => <Vimeo {...props} />)`
height: 56.25vw; // for a 16:9 aspect ratio, 9/16*100 = 56.25
left: 50%;
min-height: 100vh;
min-width: 177.77vh; // for a 16:9 aspect ratio, 16/9*100 = 177.77
position: absolute;
top: 50%;
transform: translate(-50%, -50%);
width: 100vw;
`

{/*
For a nice vintage and darkening effect
*/}

const Overlay = styled.div`
background-color: rgba(0, 0, 0, 0.66);
bottom: 0;
box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
left: 0;
min-height: 100%;
min-width: 100%;
object-fit: cover;
object-position: center;
position: fixed;
right: 0;
top: 0;
z-index: -1;
`

const Banner = () => {
  const { mintModalHandle, connectWalletModalHanlde, account } = useModal();
  const [remaining, setRemaining] = useState(0);

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
            <div className="bithu_v1_baner_left">
              <h2>Magic Club 🎯 NFT collections</h2>
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
                
                <Button lg variant="outline">
                  Wishlist now
                </Button>
              </div>
              <div className="coin-info">
                <span>Max 2 NFTs per wallet . Price 0.09 ETH + gas</span>
                <span>
                  MINT IS LIVE{" "}
                  <span className="highlighted">UNTIL 25 APR 04:00H</span>
                </span>
                <span>Presale : SOLDOUT</span>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="bithu_v1_baner_right">
              <div className="bithu_v1_baner_right_img_sect">
                <div className="mint_live_circle_sect">
                  <div className="mint_live_circle">
                    <span>
                      <img src={mintLiveDownArrow} alt="" />
                    </span>
                    <span className="mint_live_text rotated-style">
                      <img src={mintLiveText} alt="" />
                    </span>
                  </div>
                </div>
                <div className="bithu_v1_baner_right_img_bg">
                  <img src={homeImageBG} alt="" />
                </div>
                <div className="bithu_v1_baner_right_img">
                  <img src={characterThumb} alt="avater" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <VideoContainer>
        <Video
          background={true}
          height={1080}
          loop={true}
          responsive
          video="../../../../assets/images/bg/Video_bg.mp4"
          width={1920}
        />
      </VideoContainer>
      <Overlay />
    </BannerV1Wrapper>
  );


};

export default Banner;
