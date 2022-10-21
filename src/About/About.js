import React from "react";
import Paragraph from "./Components/Paragraph";
import Page from "./Components/Member";
import Contact from "./Components/Contact";
import Earth from "./Components/Earth";
function About() {
  return (
    <div>
      <Earth />
      <Paragraph />
      <Page />
      <Contact />
    </div>
  );
}

export default About;
