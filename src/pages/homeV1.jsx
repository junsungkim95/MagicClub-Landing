import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner";
import Story from "../components/section/story";
import CTA from "../components/section/cta";
import CharacterSlider from "../components/section/characterSlider/v1";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamask/MetamaskModal";
import ConnectWallet from "../common/modal/metamask/ConnectWallet";
import CharsBG from "../components/sectionByBG/charsBG/charsBG";
import TreeUpperBG from "../components/sectionByBG/treeUpperBG/treeUpperBG";
import BdUpperBG from "../components/sectionByBG/bdUpperBG/bdUpperBG";
import Footer from "../components/section/footer/v3";
import { useCallback, useEffect, useState } from "react";
import { isMetaMaskInstalled } from "../config";
import Abi from "../common/modal/mintNowModal/abi.json";
const Web3EthContract = require("web3-eth-contract");

const HomeV1 = () => {
  const { visibility, walletModalvisibility, metamaskModalVisibility, connectWalletModal } =
    useModal();
  const [totalSupply, setTotalSupply] = useState(0);

  const getTotalSupply = useCallback(() => {
    window.ethereum
      .request({
        method: "net_version",
      })
      .then(async (networkId) => {
        if (+networkId === 1 || +networkId === 5) {
          Web3EthContract.setProvider(window.ethereum);
          const ABI_CONTRACT_ADDRESS = "0x8e5e575AA13fe81D256a7607a92A479c406E863c";
          const smartContract = new Web3EthContract(Abi, ABI_CONTRACT_ADDRESS);

          setTotalSupply(smartContract.methods.totalSupply().call());
        } else {
          alert("테스트 네트워크로 변경해주세요");
        }
      });
  }, []);

  useEffect(() => {
    if (!isMetaMaskInstalled()) return;
  }, [getTotalSupply]);

  return (
    <Layout>
      <GlobalStyles />
      {visibility && <MintNowModal totalSupply={totalSupply} getTotalSupply={getTotalSupply} />}
      {walletModalvisibility && <WalletModal />}
      {metamaskModalVisibility && <MetamaskModal />}
      {connectWalletModal && <ConnectWallet />}
      <Header />
      <Banner totalSupply={totalSupply} />
      <CharsBG />
      {/* <CharacterSlider /> */}
      <Story />
      <CTA />
      <TreeUpperBG />
      <BdUpperBG />
      <Footer />
    </Layout>
  );
};

export default HomeV1;
