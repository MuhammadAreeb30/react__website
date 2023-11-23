import React, { useState } from "react";
import ServicesApi from "../API/ServiceApi";

const Services = () => {
  const [serviceData, setServiceData] = useState(ServicesApi);

  return (
    <>
      <section>
        <div className="container service-container">
          <h1 className="main-heading text-center">How to send money</h1>
          <div className="row">
            {serviceData.map((e) => {
              const { id, logo, title, info } = e;
              return (
                <div className="col-11 col-lg-4 col-xxl-4 services-box" key={id}>
                  <i className={`icon-style ${logo}`}></i>
                  <h2 className="sub-heading">{title}</h2>
                  <p className="main-para">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
