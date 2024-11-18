import Companies from "./components/companies/Companies";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";

function App(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Pricing/>
    </>
  );
}

export default App;
