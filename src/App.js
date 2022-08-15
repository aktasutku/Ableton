import "./App.css";

import React from "react";
import Header from "./components/Header/Header";
import HeaderSecond from "./components/Header/HeaderSecond";
import Introduce from "./components/Introduce";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeaderSecond />
      <Introduce />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Footer />
      {/* <HeaderOpen /> */}
    </div>
  );
};

export default App;
