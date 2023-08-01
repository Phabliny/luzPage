import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #fcecc9;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20px; /* Espaçamento interno */
`;

export const Logo = styled.div`
  margin-right: 70px;
`;

export const Titulo = styled.h1`
  font-size: 120px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-family: "Autography", sans-serif;
  color: black;
`;

export const Subtitulo = styled.h1`
  font-size: 18px;
  margin: 0;
  padding: 0;
  line-height: 0.1;
  font-family: "Autography", sans-serif;
  font-family: "Trirong", sans-serif;
  color: black;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 70px;
`;

export const ContactTitle = styled.h3`
  font-size: 18px;
  padding: 0;
  color: #c47538;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactItemWrapper = styled.div`
  margin: 5px 0; /* Adicione a margem para controlar o espaçamento entre os elementos */
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #777;
`;

export const ContactIcon = styled.i`
  margin-right: 10px;
  color: #C47538;
`;

export const ContactText = styled.span``;

export const SocialContainer = styled.div``;

export const SocialList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SocialItem = styled.li`
  display: inline-block;
  margin-right: 10px;
`;

export const SocialLink = styled.a`
  color: #C47538;
  font-size: 24px;
`;

export const FooterSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: #C47538;
  margin: 0;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #777;
  text-align: center;
  padding: 5px;
`;