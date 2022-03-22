import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main && cards/Main";
import Seans from "./main && cards/seans/Seans";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
