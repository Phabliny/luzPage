import React from 'react';
import { FloatingButtonContainer } from './styles';
import whatsapp from "../../assets/img/whatsapp.png"

export const FloatingButton = () => {
  const phoneNumber = '553499990813'; // Formato: Código do país + DDD + número de telefone
  const mensagemPersonalizada = encodeURIComponent('Olá! Essa é uma mensagem personalizada enviada pelo meu aplicativo.');

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${mensagemPersonalizada}`;

  return (
    <FloatingButtonContainer href={url}>
      <img width={"100%"} height={"100%"} src={whatsapp} alt="WhatsApp" />
    </FloatingButtonContainer>
  );
};
