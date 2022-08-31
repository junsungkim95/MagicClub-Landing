import { useModal } from "../utils/ModalContext";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/section/header/v1/Header";
import Layout from "../common/layout";
import Banner from "../components/section/banner/v1";
import HowToMint from "../components/section/howToMint/v1";
import About from "../components/section/about/v2";
import CTA from "../components/section/cta/v1";
import CharacterSlider from "../components/section/characterSlider/v1";
import AboutInfoCardList from "../components/section/about/aboutInfoCardList";
import RoadMap from "../components/section/roadMap/v2";
import Team from "../components/section/team/v1";
import FAQ from "../components/section/faq/v1";
import Footer from "../components/section/footer/v3";
import MintNowModal from "../common/modal/mintNowModal";
import WalletModal from "../common/modal/walletModal/WalletModal";
import MetamaskModal from "../common/modal/metamask/MetamaskModal";
import ConnectWallet from "../common/modal/metamask/ConnectWallet";
import CharsBG from "../components/sectionByBG/charsBG/charsBG";
import TreeUpperBG from "../components/sectionByBG/treeUpperBG/treeUpperBG";
import BdUpperBG from "../components/sectionByBG/bdUpperBG/bdUpperBG";

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
      <HowToMint />
      {/* <About /> */}
      <CharsBG />
      <CharacterSlider />
      <CTA />
      <TreeUpperBG />
      {/* <AboutInfoCardList />
      <RoadMap /> 
      <Team /> */}
      <BdUpperBG />
      {/* <FAQ />
      <Footer /> */}
    </Layout>
  );
};

export default HomeV1;
