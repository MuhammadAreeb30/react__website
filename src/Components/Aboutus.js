import React, { useState } from "react";
import HowToUse from "../API/HowToUse";

const Aboutus = () => {
  const [howToUseApi, setHowToUseApi] = useState(HowToUse);

  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 text-center about-left-side">
              <img src="./images/hero3.jpg" alt="aboutIMG" />
            </div>
            <div className="col-12 col-lg-7 about-right-side">
              <h3> -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
              <h1 className="main-heading">How to use the App?</h1>
              {howToUseApi.map((e, i) => {
                const { id, title, info } = e;
                return (
                  <div className="row aboutUS" key={i}>
                    <div className="col-1 about-number">{id}</div>
                    <div className="col-10 about-info">
                      <h2 className="sub-heading">{title}</h2>
                      <p className="main-para">{info}</p>
                    </div>
                  </div>
                );
              })}

              <button className="btn nav-btn mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* about us second part start */}

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 aboutus-second-left-side d-flex justify-content-center align-items-start flex-column">
              <h3>-- SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading mb-0"> World class support is <br /> available 24/7</h1>
              {howToUseApi.map((e) => {
                const { id, title, info } = e;
                return (
                  <div className="row aboutUS" key={id}>
                    <div className="col-1 about-number">{id}</div>
                    <div className="col-10 about-info">
                      <h2 className="sub-heading">{title}</h2>
                      <p className="main-para">{info}</p>
                    </div>
                  </div>
                );
              })}

              <button className="btn nav-btn mt-3">Learn More</button>
            </div>
            <div className="col-12 col-lg-5 aboutus-second-right-side">
              <img src="./images/callcenter.jpg" alt="aboutIMG" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
