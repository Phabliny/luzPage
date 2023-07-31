// Gallery.js

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { GalleryWrapper, Title, Description, GalleryContainer, GalleryItem } from "./styles"; // Import the styled components from "styles.js"
import { listAllFiles } from "../../service/storageUtils";
import estilo from './flip.module.css'; // Import the flip card styles

const Flip = ({ fileName }) => {
  return (
    <>
      <div className={estilo.flipCard}>
        <div className={estilo.flipCardInner}>
          <div className={estilo.flipCardFront}>
            <img src={`https://firebasestorage.googleapis.com/v0/b/luzapp-858b0.appspot.com/o/images%2F${encodeURIComponent(fileName)}?alt=media`} width="200" height="200" alt={fileName} />
            <div className={estilo.frontside}>{fileName}</div>
          </div>
          <div className={estilo.flipCardBack}>
            <img src={`https://firebasestorage.googleapis.com/v0/b/luzapp-858b0.appspot.com/o/images%2F${encodeURIComponent(fileName)}?alt=media`} width="200" height="200" />
            <div className={estilo.backside}>Descrição do {fileName}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Gallery = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    listFiles();
  }, []);

  const listFiles = async () => {
    try {
      const files = await listAllFiles();
      setFileList(files);
    } catch (error) {
      console.error('Erro ao listar os arquivos:', error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <GalleryWrapper id="products">
      <div className="container">
        <div className="section-title">
          <Title>Galeria de Produtos</Title>
          <Description>Explore a elegância atemporal e a qualidade excepcional dos nossos artesanatos de couro.</Description>
        </div>
        <GalleryContainer>
          {/* Use the flipCardContainer class here to wrap the flip cards */}
          <div className={estilo.flipCardContainer}>
            {/* Render the Flip component for each fileName */}
            {fileList.map((fileName, index) => (
              <GalleryItem key={index}>
                <Flip fileName={fileName} />
              </GalleryItem>
            ))}
          </div>
        </GalleryContainer>
      </div>
    </GalleryWrapper>
  );
};
