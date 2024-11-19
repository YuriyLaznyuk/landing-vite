import Companies from "./components/companies/Companies";
import Subscribe from "./components/subscribe/Subscribe";
import Earnings from "./components/earnings/Earnings";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Status from "./components/status/Status";
import Footer from "./components/footer/Footer";

function App(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Pricing />
      <Earnings />
      <Status />
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
