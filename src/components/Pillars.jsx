import React from "react";
import logo from "../Assets/logo.png"

const InnerDiv  = ()=>{

  const image = {
    height: "4rem",
    width:"4rem",
    borderRaduis: "50%",
    paddingTop:"8px"
  }

  return  <div className="bg-secondary rounded d-flex flex-column align-items-center justify-content-center gap-3" >
          <img src={logo} alt="logo" style={image} className="mt-2" />
          <h5>Fund Raising</h5>
          <p className="w-50 text-center pt-2 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut, laborum pariatur est, qui, praesentium at asperiores magnam repellat soluta amet?</p>
  </div>
}

const Pillars = () => {

  return <section  className=" w-100 d-flex flex-column justify-content-center align-items-center gap-3 mt-3 mb-3">

    <div className="d-flex align-items-center mb-3 pt-4">
      <h4>Our Three Pillars</h4>
    </div>
    <div className="d-flex flex-column flex-md-row justify-content-md-around align-items-center gap-5 ps-5 pe-5">
        <InnerDiv />               
        <InnerDiv />               
        <InnerDiv />               
               
    </div>
  </section>
};

export default Pillars;
