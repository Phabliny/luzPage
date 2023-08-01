import styled from "styled-components"

export const HeaderContainer = styled.header`
  padding: 20px;
  color: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(70deg, #c47538, #c47538 60%, white 40%);
  position: relative;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Adicione esta linha para adicionar a sombra */

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-top: 40vw;
    padding-bottom: 20vw;
  }
`;

export const LeftContent = styled.div`
  width: 50vw;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const RightContent = styled.div`
  width: 50vw;
  padding-left: 80px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Titulo = styled.h1`
  font-size: 200px;
  margin:0;
  padding:0;
  line-height: 1;
  font-family: 'Autography', sans-serif;
`;

export const Subtitulo = styled.h1`
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 0.1;
  font-family: 'Trirong', sans-serif;
`;

export const IntroText = styled.div`
  text-align: center;
`;

export const Paragraph1 = styled.p`
  width: 20vw;
  color: black;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 1.5px;
  font-family: 'Swallow Script', sans-serif;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80vw;
    margin-bottom: 20px;
  }
`;

export const Paragraph2 = styled.p`
  width: 20vw;
  color: black;
  font-size: 24px;
  line-height: 1.5;
  font-family: 'Heartfield', sans-serif;
  margin: 10px auto 40px;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const CustomButton = styled.a`
  background-image: linear-gradient(to right, #c47538, white);
  background-size: 200% auto;
  color: black;
  padding: 15px 30px; /* Aumentar o tamanho do botão */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  transition: background-position 0.3s;

  &:hover {
    background-position: left center;
    background-color: #ff7f50; /* Nova cor de hover */
    color: dimgray !important;
  }
`;

export const LogoImage = styled.img`
  max-width: 20vw; /* Defina o tamanho máximo desejado para a imagem */

  @media (max-width: 768px) {
    max-width: 80vw;
  }
`;