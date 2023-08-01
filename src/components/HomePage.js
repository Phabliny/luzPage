import React, { useState, useEffect } from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Description } from "./description";
import { Features } from "./features";
import { About } from "./about";
import { Events } from "./events";
import { Gallery } from "./gallery";
import { Contact } from "./contact";
import { Testimonials } from "./testimonials";
import { FloatingButton } from "./floatingButton";
import VLibras from '@djpfs/react-vlibras'
import { Footer } from "./footer";
import SmoothScroll from "smooth-scroll";
import styled from "styled-components";

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

  export const BackgroundAbout = styled.div`
    /* Adicione o background aqui */
    background-image: linear-gradient(-45deg, rgba(166, 81, 62, 0.1) 10%, transparent 10%),
                      linear-gradient(45deg, rgba(228, 200, 184, 0.1) 10%, transparent 10%),
                      linear-gradient(-45deg, transparent 90%, rgba(228, 200, 184, 0.1) 90%),
                      linear-gradient(45deg, transparent 90%, rgba(166, 81, 62, 0.1) 90%);
    background-size: 40px 40px; /* Define o tamanho da faixa */
    background-color: rgba(245, 245, 220, 0.2);
  `;


function HomePage() {
    return (
        <AppContainer>
        <VLibras />
        {/* Lines styled-components */}
        <LeftLine />
        <RightLine />
        <Navigation />
        <Header />
        <Description />
        <Features />
        <BackgroundAbout><About /></BackgroundAbout>
        <Gallery />
        <Events />
        {/* <Testimonials data={landingPageData.Testimonials} /> */}
        <Contact />
        <Footer />
        <FloatingButton />
      </AppContainer>
    );
}

export default HomePage;