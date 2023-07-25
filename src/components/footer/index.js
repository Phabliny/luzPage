import React from "react";
import {
  FooterContainer,
  ContactInfoContainer,
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
        <div>
          <ContactTitle>Informações de contato</ContactTitle>
          <ContactList>
            <ContactItem>
              <ContactIcon className="fa fa-map-marker"></ContactIcon>
              <ContactText></ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon className="fa fa-phone"></ContactIcon>
              <ContactText>{props.data ? props.data.phone : "loading"}</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon className="fa fa-envelope-o"></ContactIcon>
              <ContactText>{props.data ? props.data.email : "loading"}</ContactText>
            </ContactItem>
          </ContactList>
        </div>
        <SocialContainer>
          <SocialList>
            <SocialItem>
              <SocialLink href={props.data ? props.data.facebook : "/"}>
                <i className="fa fa-facebook"></i>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href={props.data ? props.data.twitter : "/"}>
                <i className="fa fa-twitter"></i>
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href={props.data ? props.data.youtube : "/"}>
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
