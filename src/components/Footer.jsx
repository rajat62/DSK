import React from "react";
import Logo from "../Assets/logo.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
const Footer = () => {
  const Team = [
    "Prashant Mishra",
    "Sayak Sarkar",
    "Jaya Pandey",
    "Sofia Malik",
    "Tanya Bansal",
    "Amarnath Rana",
    "Kavita",
    "Preeti Mishra",
    "Saurav Arya",
    "Amritanshu",
    "Nibbritta Niloy Sarker",
    "Shubham Mandal",
  ];

  const footerStyle = {
    backgroundColor: "rgb(1,28,57)",
    display: "flex",
    justifyContent: "space-around",
    color: "white",
    paddingTop: "3rem",
    paddingBottom: "3rem",
  };
  const logo = {
    height: "3.4rem",
    width: "3.4rem",
    borderRaduis: "50%",
  };
  const titleSpan = {
    color: "rgb(201,225,101)",
  };
  const basiccolor = {
    color: "rgb(136,151,171)",
  };
  const ul = {
    color: "rgb(136,151,171)",
    listStyle: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    gap: ".5rem",
  };
  const btn = {
    backgroundColor: "rgb(201,225,101)",
    marginTop: "1rem",
    padding: ".6rem  2rem",
    border: "none",
    color: "rgb(1,28,57)",
  };
  return (
    <footer
      style={footerStyle}
      className="d-flex flex-column ps-5 gap-4 align-items-cneter flex-lg-row align-items-lg-start ps-lg-0 gap-lg-0">
      <div className="d-flex flex-column gap-4 col-4">
        <div className="d-flex align-items-center gap-4">
          <img src={Logo} style={logo} alt="logo" />
          <h5>
            Dil <span style={titleSpan}>Se</span> Khelo
          </h5>
        </div>
        <p style={basiccolor}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae
          impedit vel odit quasi nulla pariatur quod dignissimos accusantium est
          corrupti vitae harum beatae, voluptatum eligendi necessitatibus
          quibusdam itaque officiis? Aut, deserunt.
        </p>
        <div className="d-flex gap-3">
          <Facebook color="lightBlue" size={25} />
          <Twitter color="lightBlue" size={25} />
          <Youtube color="lightBlue" size={25} />
          <Linkedin color="lightBlue" size={25} />
          <Instagram color="lightBlue" size={25} />
        </div>
      </div>
      <div className="col-md-2 d-flex flex-column pt-3 gap-4">
        <h6 className="fs-5">Team</h6>
        <div>
          <ul style={ul}>
            {Team.map((member) => {
              return <li>{member}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="col-md-2 d-flex flex-column pt-3 gap-4">
        <h6 className="fs-5">Useful Links</h6>
        <div>
          <ul style={ul}>
            <li>About Us</li>
            <li>Contact Us</li>
            <li style={titleSpan}>
              <button className="btn" style={btn}>
                Donate
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-2 d-flex flex-column pt-3 gap-4">
        <h6 className="fs-5">Address</h6>
        <div>
          <p style={basiccolor}>New Delhi, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
