import React, { useState } from "react";
import WorkApi from "../API/workapi";

const HowItWorks = () => {
  const [workApi, setWorkApi] = useState(WorkApi);

  return (
    <>
      <section>
        <div className="container work-container">
          <h1 className="main-heading text-center">How Does it Work</h1>
          <div className="row">
            {workApi.map((e, i) => {
              const { logo, title, info } = e;
              return (
                <div
                  className="col-12 col-lg-4 text-center work-inner-div"
                  key={i}
                >
                  <i class={`icon-style ${logo}`}></i>
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

export default HowItWorks;
