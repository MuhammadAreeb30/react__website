import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero">
          <div className="row d-flex justify-content-center align-items-center">
            {/* header left side */}
            <div className="col-12 col-lg-6 order-lg-first order-last header-left-side">
              <h1>
                Online Payment Made <br /> Easy For You.
              </h1>
              <p className="main-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora recusandae voluptate quam, nisi odio officiis
                tempora recusandae
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-50 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            {/* header right side */}
            <div className="col-12 col-lg-6 order-md-first order-sm-first header-right-side">
              <img
                src="./images/hero1.jpg"
                alt="heroimg"
                className="img-fluid heroimg1"
              />
              <img
                src="./images/hero4.jpg"
                alt="heroimg"
                className="img-fluid heroimg2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
