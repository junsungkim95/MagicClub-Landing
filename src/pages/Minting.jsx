import GlobalStyles from '../assets/styles/GlobalStyles';
import Layout from '../common/layout';
import Footer from '../components/section/footer/v3';
import Header from '../components/section/header/Header';
import Mint from '../components/section/Mint/Mint';

export default function Minting() {
  return (
    <Layout>
      <GlobalStyles />
      <Header />
      <Mint />
      <Footer />
    </Layout>
  );
}
