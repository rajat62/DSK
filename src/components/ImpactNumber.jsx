import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styled from "styled-components";
import { laptop, tablet } from "../utils/responsive";
import { mobileXL } from "../utils/responsive";
import { mobile } from "../utils/responsive";

const ImpactNumberWrapper = styled.div`
  margin: 0% 5% 4% 5%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  ${mobile({
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  })}

  ${mobileXL({
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  })}

  ${tablet({
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  })}

  ${laptop({
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  })}
`;

const ImpactNumberContainer = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 30px 0px;

  ${tablet({
    padding: "40px 0px",
  })};

  ${laptop({
    padding: "30px 0px",
  })};
`;

const OurNumbers = styled.div`
  font-size: 48px;

  ${mobile({
    fontSize: "36px",
  })}

  ${mobileXL({
    fontSize: "42px",
  })}
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
`;

const Text = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 0px 10px;

  ${mobile({
    fontSize: "18px",
  })}
`;

const ImpactNumber = () => {
  const [countOn, setCountOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}>
      <ImpactNumberWrapper>
        <ImpactNumberContainer>
          <OurNumbers>
            {countOn && <CountUp start={0} end={1000} duration={3} delay={0} />}
            +
          </OurNumbers>
          <TextWrapper>
            <Text>Students participated. </Text>
          </TextWrapper>
        </ImpactNumberContainer>
        <ImpactNumberContainer>
          <OurNumbers>
            {countOn && <CountUp start={0} end={1000} duration={3} delay={0} />}
            +
          </OurNumbers>
          <TextWrapper>
            <Text>Students participated.</Text>
          </TextWrapper>
        </ImpactNumberContainer>
        <ImpactNumberContainer>
          <OurNumbers>
            {countOn && <CountUp start={0} end={1000} duration={3} delay={0} />}
            +
          </OurNumbers>
          <TextWrapper>
            <Text>Students participated.</Text>
          </TextWrapper>
        </ImpactNumberContainer>
        <ImpactNumberContainer>
          <OurNumbers>
            {countOn && <CountUp start={0} end={1000} duration={3} delay={0} />}
            +
          </OurNumbers>
          <TextWrapper>
            <Text>Students participated.</Text>
          </TextWrapper>
        </ImpactNumberContainer>
      </ImpactNumberWrapper>
    </ScrollTrigger>
  );
};

export default ImpactNumber;
