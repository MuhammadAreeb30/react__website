import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://reactweb-e1be7-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("! Your Data has been submitted.");
      } else {
        alert("Please fill out all fields before submitting.");
      }
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-12 col-lg-5 contact-left-side">
                  <h1 className="main-heading mb-0">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-para mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <img
                    src="./images/hero1.jpg"
                    alt="contactimg"
                    className="img-fluid"
                  />
                </div>
                {/* contact right side  */}
                <div className="col-12 col-lg-7 contact-right-side">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="number"
                          name="phone"
                          id=""
                          placeholder="Phone Number"
                          value={userData.phone}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="email"
                          name="email"
                          id=""
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="form-check check-box-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label className="form-check-label main-para">
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn nav-btn nav-btn-style w-100"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
