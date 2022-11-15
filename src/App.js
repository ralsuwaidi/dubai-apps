import "./App.css";
import CallToAction from "./landing/Cta";
import Hero from "./landing/Header";
import Iframe from 'react-iframe'
import Features from "./landing/Features";



function App() {
  return (
    <>
      <Hero />
      <Features/>
      {/* <CallToAction /> */}
    </>
  );
}

export default App;
