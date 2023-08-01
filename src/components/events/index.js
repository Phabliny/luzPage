import React, { useEffect, useState } from "react";
import {
  ServicesContainer,
  Title,
  SectionTitle,
  ServiceItem,
  ServiceIcon,
  ServiceDesc,
} from "./styles";
import { listAllFilesEvents } from "../../service/storageUtils";

export const Events = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const files = await listAllFilesEvents();
      console.log("arquivos: ++++++++++++++++++++++++++++++++++++ "+files)
      setEventsData(files);
    } catch (error) {
      console.error('Erro ao listar os arquivos:', error);
    }
  };

  return (
    <ServicesContainer id="services">
      <div className="container">
        <SectionTitle>
          <Title>Próximos eventos</Title>
        </SectionTitle>
        <div className="row">
          {eventsData.length > 0 ? (
            eventsData.map((fileName, index) => (
              <ServiceItem key={index} className="col-md-4">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/luzapp-858b0.appspot.com/o/events%2F${encodeURIComponent(fileName)}?alt=media`}
                  alt="imagem do evento"
                  width="200"
                  height="200"
                />
              </ServiceItem>
            ))
          ) : (
            <div>No events found.</div>
          )}
        </div>
      </div>
    </ServicesContainer>
  );
};
