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
      text:
        "Nosso atendimento é tão artesanal quanto nossos couros, buscamos proporcionar uma experiência única para cada cliente.",
      icon: "fa fa-comments-o",
    },
    {
      title: "Qualidade dos produtos",
      text:
        "Nossa dedicação ao trabalho manual é refletida em cada produto de couro que entregamos, garantindo a mais alta qualidade em cada detalhe.",
      icon: "fa fa-star",
    },
    {
      title: "Produtos personalizáveis",
      text:
        "Acreditamos que cada pessoa é única, assim como nossos artesanatos em couro. Oferecemos opções de personalização para que você tenha uma peça exclusiva.",
      icon: "fa fa-check-square",
    },
    {
      title: "Inovação e criatividade",
      text:
        "Tradição e inovação se encontram em nossos artesanatos de couro. Nossa equipe criativa trabalha incansavelmente para trazer novidades encantadoras.",
      icon: "fa fa-paint-brush",
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
                <Icon className={d.icon} />
                <FeatureTitle>{d.title}</FeatureTitle>
                <FeatureText>{d.text}</FeatureText>
              </FeatureItem>
            ))
          ) : (
            <div>Carregando...</div>
          )}
        </FeaturesGrid>
      </Container>
    </FeaturesWrapper>
  );
};
