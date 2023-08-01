import React from 'react';
import { DescriptionContainer, RowContainer, ImageContainer, TextContainer } from './styles';
import img1 from "../../assets/img/imagem1.jpeg"
import img2 from "../../assets/img/imagem2.jpeg"

export const Description = () => {
    return (
        <DescriptionContainer id="description">
            <RowContainer>
                <ImageContainer>
                    <img width={"100%"} height={"100%"} src={img1} alt="Imagem 1" />
                </ImageContainer>
                <TextContainer>
                    <p>Cada artesanato é cuidadosamente planejado e executado com perfeição, resultando em peças únicas e verdadeiras obras-primas.</p>
                </TextContainer>
            </RowContainer>
            <RowContainer>
                <TextContainer>
                    <p>Seja para complementar seu guarda-roupa, decorar sua casa ou presentear alguém querido, os artesanatos são uma escolha de estilo e bom gosto.</p>
                </TextContainer>
                <ImageContainer>
                    <img width={"100%"} height={"100%"} src={img2} alt="Imagem 2" />
                </ImageContainer>
            </RowContainer>
        </DescriptionContainer>
    );
};
