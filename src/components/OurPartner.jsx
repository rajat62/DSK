import React from "react";
import styled from "styled-components";

// React-Slick Import:
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Partnerr Logo Import:
import TeachForIndia from "../static/ourPartner/TeachForIndia.png";
import Bajaj from "../static/ourPartner/Bajaj.png";
import UjjwalTrust from "../static/ourPartner/UjjwalTrust.png";
import Decathlon from "../static/ourPartner/Decathlon.png";
import EkalRun from "../static/ourPartner/EkalRun.png";
import NDIM from "../static/ourPartner/NDIM.png";
import MissionGreenIndia from "../static/ourPartner/MissionGreenIndia.png";
import SADS from "../static/ourPartner/SADS.png";

const SliderContainer = styled.div`
  margin: 0% 5%;
`;

const LogoContainer = styled.div``;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const OurPartner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {/* <LogoContainer> */}
        <Img src={TeachForIndia} />
        {/* </LogoContainer> */}
        <LogoContainer>
          <Img src={UjjwalTrust} />
        </LogoContainer>
        <LogoContainer>
          <Img src={Bajaj} />
        </LogoContainer>
        <LogoContainer>
          <Img src={Decathlon} />
        </LogoContainer>
        <LogoContainer>
          <Img src={EkalRun} />
        </LogoContainer>
        <LogoContainer>
          <Img src={MissionGreenIndia} />
        </LogoContainer>
        <LogoContainer>
          <Img src={NDIM} />
        </LogoContainer>
        <LogoContainer>
          <Img src={SADS} />
        </LogoContainer>
      </Slider>
    </SliderContainer>
  );
};

export default OurPartner;
