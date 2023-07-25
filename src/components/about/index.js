import React from "react";
import Img from "../../assets/img/luziano.png";
import {
  AboutWrapper,
  Container,
  Row,
  Column,
  Image,
  AboutText,
  Title,
  Paragraph,
  Subtitle,
  ListStyle,
  ListItem,
} from "./styles";

export const About = (props) => {
  return (
    <AboutWrapper id="about">
      <Container>
        <Row>
          <Column>
            <Image src={Img} alt="" />
          </Column>
          <Column>
            <AboutText>
              <Title>Sobre a empresa</Title>
              <Paragraph>Com mão habilidosa e olhar apurado, Luziano cria obras únicas que unem o antigo e o moderno. Usando técnicas tradicionais de bordado e trabalhos com couro, ele dá vida a peças cheias de personalidade e beleza.</Paragraph>
            </AboutText>
          </Column>
        </Row>
      </Container>
    </AboutWrapper>
  );
};
