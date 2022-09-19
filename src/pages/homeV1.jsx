import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner";
import Story from "../components/section/story"
import CTA from "../components/section/cta";
import CharacterSlider from "../components/section/characterSlider/v1";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamask/MetamaskModal";
import ConnectWallet from "../common/modal/metamask/ConnectWallet";
import CharsBG from "../components/sectionByBG/charsBG/charsBG";
import TreeUpperBG from "../components/sectionByBG/treeUpperBG/treeUpperBG";
import BdUpperBG from "../components/sectionByBG/bdUpperBG/bdUpperBG";
import Footer from "../components/section/footer/v3"

const HomeV1 = () => {
  const { visibility, walletModalvisibility, metamaskModalVisibility, connectWalletModal } = useModal();
  return (
    <Layout>
       <GlobalStyles /> 
      {visibility && <MintNowModal />}
      {walletModalvisibility && <WalletModal />}
      {metamaskModalVisibility && <MetamaskModal/> }
      {connectWalletModal && <ConnectWallet/> }
      <Header />
      <Banner />
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
