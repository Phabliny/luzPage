import styled from "styled-components"

export const FooterContainer = styled.div`
  background-color: #FCECC9;
  padding: 20px;
`;

export const ContactInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const ContactTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #C47538;
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
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
  margin: 20px 0;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #777;
  text-align: center;
  margin-top: 20px;
`;