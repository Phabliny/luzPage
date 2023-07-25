import React from "react";
import {
  FeaturesWrapper,
  Container,
  SectionTitle,
  Title,
  FeaturesGrid,
  FeatureItem,
  Icon,
  FeatureTitle,
  FeatureText,
} from "./styles";

export const Features = (props) => {
  const data = [
    {
      title: "Atendimento excepcional",
      text: "Nosso atendimento é tão artesanal quanto nossos couros, buscamos proporcionar uma experiência única para cada cliente.",
      icon: "fa fa-comments-o",
      iconColor: "#FF5733", // Defina a cor do ícone aqui para o primeiro item
    },
    {
      title: "Qualidade dos produtos",
      text: "Nossa dedicação ao trabalho manual é refletida em cada produto de couro que entregamos, garantindo a mais alta qualidade em cada detalhe.",
      icon: "fa fa-star",
      iconColor: "#E4C8B8", // Defina a cor do ícone aqui para o segundo item
    },
    {
      title: "Produtos personalizáveis",
      text: "Acreditamos que cada pessoa é única, assim como nossos artesanatos em couro. Oferecemos opções de personalização para que você tenha uma peça exclusiva.",
      icon: "fa fa-check-square",
      iconColor: "#FFC0CB", // Defina a cor do ícone aqui para o terceiro item
    },
    {
      title: "Inovação e criatividade",
      text: "Tradição e inovação se encontram em nossos artesanatos de couro. Nossa equipe criativa trabalha incansavelmente para trazer novidades encantadoras.",
      icon: "fa fa-paint-brush",
      iconColor: "#FFA500", // Defina a cor do ícone aqui para o quarto item
    },
  ];

  return (
    <FeaturesWrapper id="features">
      <Container>
        <SectionTitle>
          <Title>Por que nos escolher?</Title>
        </SectionTitle>
        <FeaturesGrid>
          {data.length > 0 ? (
            data.map((d, i) => (
              <FeatureItem key={`${d.title}-${i}`} isOdd={i % 2 !== 0}>
                <Icon className={d.icon} color={d.iconColor} />
                <FeatureTitle>{d.title}</FeatureTitle>
                <FeatureText>{d.text}</FeatureText>
              </FeatureItem>
            ))
          ) : (
            <div>No features available.</div>
          )}
        </FeaturesGrid>
      </Container>
    </FeaturesWrapper>
  );
};
