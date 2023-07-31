import React from 'react';
import {
  HeaderContainer,
  LeftContent,
  RightContent,
  Titulo,
  Subtitulo,
  IntroText,
  Paragraph1,
  Paragraph2,
  CustomButton,
  LogoImage
} from "./styles";

export const Header = (props) => {
  return (
    <HeaderContainer id="header">
      <LeftContent>
        <Titulo>Luz</Titulo>
        <Subtitulo><span style={{ fontSize: '40px' }}>C</span>riação e <span style={{ fontSize: '40px' }}>P</span>rodução</Subtitulo>
      </LeftContent>
      <RightContent>
        <IntroText>
          <Paragraph1>Brilhe com a Luz!</Paragraph1>
          <Paragraph2>Onde a criatividade é feita à mão e cada peça é uma obra-prima única.</Paragraph2>
          <CustomButton href="#contact">Entre em contato</CustomButton>
        </IntroText>
      </RightContent>
    </HeaderContainer>
  );
};
