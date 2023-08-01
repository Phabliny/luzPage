import React from "react";
import {
  FooterContainer,
  ContactInfoContainer,
  Logo,
  Titulo,
  Subtitulo,
  Info,
  ContactTitle,
  ContactList,
  ContactItem,
  ContactIcon,
  ContactText,
  SocialContainer,
  SocialList,
  SocialItem,
  SocialLink,
  FooterSeparator,
  FooterText
} from "./styles";

export const Footer = (props) => {
  return (
    <FooterContainer>
      <ContactInfoContainer>
        <Logo>
          <Titulo>Luz</Titulo>
          <Subtitulo><span style={{ fontSize: '22px' }}>C</span>riação e <span style={{ fontSize: '22px' }}>P</span>rodução</Subtitulo>
        </Logo>
        <Info>
          <ContactTitle>Informações de Contato</ContactTitle>
          <ContactList>
            <ContactItem>
              <ContactIcon className="fa fa-map-marker"></ContactIcon>
              <ContactText>Ruas dos bobos N°0</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon className="fa fa-phone"></ContactIcon>
              <ContactText>99999-9999</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon className="fa fa-envelope-o"></ContactIcon>
              <ContactText>luz@gmail.com</ContactText>
            </ContactItem>
          </ContactList>
        </Info>
        <SocialContainer>
        <ContactTitle>Redes Sociais</ContactTitle>
          <SocialList>
            <SocialItem>
              <SocialItem>
                <SocialLink href={"https://instagram.com"} target="_blank">
                  <i className="fa fa-instagram"></i>
                </SocialLink>
              </SocialItem>
              <SocialLink href={"https://fb.com"} target="_blank">
                <i className="fa fa-facebook"></i>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href={"https://twitter.com"} target="_blank">
                <i className="fa fa-twitter"></i>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href={"https://youtube.com"} target="_blank">
                <i className="fa fa-youtube"></i>
              </SocialLink>
            </SocialItem>
          </SocialList>
        </SocialContainer>
      </ContactInfoContainer>
      <FooterSeparator />
      <FooterText>
        &copy; LUZ Criação e Produção, 2023. Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  );
};