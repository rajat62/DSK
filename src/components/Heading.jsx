import React from "react";
import styled from "styled-components";
import { mobile, mobileXL, tablet } from "../utils/responsive";

const Header = styled.p`
  text-align: center;
  font-size: 48px;

  ${mobile({
    fontSize: "28px",
  })}

  ${mobileXL({
    fontSize: "32px",
  })}

  ${tablet({
    fontSize: "36px",
  })}
`;

const Heading = ({ title }) => {
  return <Header>{title}</Header>;
};

export default Heading;
