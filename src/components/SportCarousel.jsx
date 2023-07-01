import React, { useState } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  margin: 4% 0%;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;
`;

const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffb62f;
  border: 1px solid black;
  transform: translateY(${(props) => `-${props.len}vh`});
  transition: ease-in-out 0.5s;
`;

const DotContainer = styled.div`
  position: absolute;
  top: 30vh;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Dot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 100%;
  background-color: white;
  cursor: pointer;

  :hover {
    background-color: black;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &:nth-child(${(props) => props.index + 1}) {
    background-color: black;
  }
`;

const SportCarousel = () => {
  const [scroll, setScroll] = useState(0);

  return (
    <CarouselWrapper>
      <CarouselContainer len={scroll}>Div 1</CarouselContainer>
      <CarouselContainer len={scroll}>Div 2</CarouselContainer>
      <CarouselContainer len={scroll}>Div 3</CarouselContainer>
      <CarouselContainer len={scroll}>Div 4</CarouselContainer>
      <CarouselContainer len={scroll}>Div 5</CarouselContainer>
      <CarouselContainer len={scroll}>Div 6</CarouselContainer>
      <CarouselContainer len={scroll}>Div 7</CarouselContainer>

      <DotContainer>
        <Dot onClick={() => setScroll(0 * 80)} index={scroll / 80} />
        <Dot onClick={() => setScroll(1 * 80)} index={scroll / 80} />
        <Dot onClick={() => setScroll(2 * 80)} index={scroll / 80} />
        <Dot onClick={() => setScroll(3 * 80)} index={scroll / 80} />
        <Dot onClick={() => setScroll(4 * 80)} index={scroll / 80} />
        <Dot onClick={() => setScroll(5 * 80)} index={scroll / 80} />
        <Dot onClick={() => setScroll(6 * 80)} index={scroll / 80} />
      </DotContainer>
    </CarouselWrapper>
  );
};

export default SportCarousel;
