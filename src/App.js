import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Description } from "./components/description";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Events } from "./components/events";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { Testimonials } from "./components/testimonials";
import { FloatingButton } from "./components/floatingButton";
import { Footer } from "./components/footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import styled from "styled-components";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// Styled-components for lines
const AppContainer = styled.div`
  position: relative;
`;

const LeftLine = styled.div`
  position: absolute;
  top: 0;
  left: 3vw;
  width: 1px; /* Reduce the width of the line */
  height: 24%; /* Reduce the height of the line */
  background-color: black;
  z-index: 1; /* Set the z-index to make the line appear in front */
`;

const RightLine = styled.div`
  position: absolute;
  top: 0;
  left: 4.2vw;
  width: 1px; /* Reduce the width of the line */
  height: 23%; /* Reduce the height of the line */
  background-color: black;
  z-index: 1; /* Set the z-index to make the line appear in front */
`;

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <AppContainer>
      {/* Lines styled-components */}
      <LeftLine />
      <RightLine />
      <Navigation />
      <Header />
      <Description />
      <Features />
      <About />
      <Gallery />
      {/* <Events data={landingPageData.Events} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Contact />
      <Footer />
      <FloatingButton />
    </AppContainer>
  );
};

export default App;
