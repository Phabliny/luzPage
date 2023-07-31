import React from "react";
import {
  ServicesContainer,
  ServicesTitle,
  ServiceItem,
  ServiceIcon,
  ServiceDesc,
} from "./styles";

export const Events = (props) => {
  return (
    <ServicesContainer id="services">
      <div className="container">
        <ServicesTitle>
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </ServicesTitle>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <ServiceItem key={`${d.name}-${i}`} className="col-md-4">
                  <ServiceIcon className={d.icon} />
                  <ServiceDesc>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </ServiceDesc>
                </ServiceItem>
              ))
            : "loading"}
        </div>
      </div>
    </ServicesContainer>
  );
};
