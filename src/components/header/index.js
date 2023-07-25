import React from 'react';
import Logo from '../../assets/img/logo.png';
import {
  HeaderContainer,
  LeftContent,
  RightContent,
  Titulo,
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
        {props.data ? (
          <LogoImage src={Logo} alt="Imagem" />
        ) : (
          <Titulo>Luz</Titulo>
        )}
      </LeftContent>
      <RightContent>
        <IntroText>
          <Paragraph1>Brilhe com a LUZ:</Paragraph1>
          <Paragraph2>Onde a criatividade é feita à mão e cada peça é uma obra-prima única.</Paragraph2>
          <CustomButton href="#contact">Entre em contato</CustomButton>
        </IntroText>
      </RightContent>
    </HeaderContainer>
  );
};
