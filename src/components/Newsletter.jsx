import React, { useState } from "react";
import styled from "styled-components";
import DSKLogo from "../Assets/logo.png";
import { laptop, mobile, mobileXL, tablet } from "../utils/responsive";
import useWindowDimensions from "../utils/useWindowDimensions";

const NewsletterContainer = styled.div`
  margin: 4% 5%;
  display: flex;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;

  ${mobile({
    height: "max-content",
  })}

  ${mobileXL({
    height: "max-content",
  })}
`;

const ContentWrapper = styled.div`
  flex: 3;
  padding: 35px 100px;

  ${mobile({
    padding: "50px 25px",
  })}

  ${mobileXL({
    padding: "50px 25px",
  })}

  ${tablet({
    padding: "60px 0px 60px 25px",
  })}

  ${laptop({
    padding: "60px 50px",
  })}
`;

const ContentHeading = styled.p`
  font-size: 54px;

  ${mobile({
    fontSize: "32px",
  })}

  ${mobileXL({
    fontSize: "36px",
  })}

  ${tablet({
    fontSize: "40px",
  })}

  ${laptop({
    fontSize: "48px",
  })}
`;

const ContentText = styled.p`
  font-size: 20px;

  ${mobile({
    fontSize: "16px",
  })}

  ${mobileXL({
    fontSize: "16px",
  })}
 
  ${tablet({
    fontSize: "18px",
  })}

 ${laptop({
    fontSize: "20px",
  })}
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;

  ${mobile({
    gap: "15px",
    alignItems: "flex-end",
    flexDirection: "column",
  })}
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border-radius: 7px;
  border: none;
  border: 1px solid lightgray;
`;

const Button = styled.button`
  padding: 15px 20px;
  width: 150px;
  font-size: 18px;
  background-color: #cfff8d;
  border-radius: 7px;
  border: none;
`;

const LogoWrapper = styled.div`
  flex: 2;
  padding: 0px 100px 0px 0px;

  ${tablet({
    padding: "0px",
  })}

  ${laptop({
    padding: "0px 40px 0px 0px",
  })}
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { width } = useWindowDimensions();

  return (
    <NewsletterContainer>
      <ContentWrapper>
        <ContentHeading>Subscribe to our Newsletter</ContentHeading>
        <ContentText>
          Subscribe to our newsletter to recieve notification about our upcoming
          Events.
        </ContentText>
        <InputWrapper>
          <Input
            placeholder="Email address"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button>Subscribe</Button>
        </InputWrapper>
      </ContentWrapper>

      {width > 660 && (
        <LogoWrapper>
          <Logo src={DSKLogo} />
        </LogoWrapper>
      )}
    </NewsletterContainer>
  );
};

export default Newsletter;