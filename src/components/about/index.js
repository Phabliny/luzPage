import React from 'react';
import { AboutContainer, AboutImage, AboutText } from './styles';
import luziano from "../../assets/img/luziano.png"

export const About = () => {
  return (
    <AboutContainer id="about">
      <AboutImage width={"100%"} height={"100%"} src={luziano} alt="Imagem da empresa" />
      <AboutText>
      Com mão habilidosa e olhar apurado, Luziano cria obras únicas que unem o antigo e o moderno. Usando técnicas tradicionais de bordado e trabalhos com couro, ele dá vida a peças cheias de personalidade e beleza.
      </AboutText>
    </AboutContainer>
  );
};
