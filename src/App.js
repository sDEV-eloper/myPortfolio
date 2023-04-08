import React from "react";
import Intro from "./components/intro/Intro";
import "./app.scss";
import Skill from "./components/Skills/Skill";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Intro />
    <Skill/>
    <Portfolio/>
     <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
