import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};

export const mobileXL = (props) => {
  return css`
    @media only screen and (min-width: 481px) and (max-width: 660px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 661px) and (max-width: 768px) {
      ${props}
    }
  `;
};

export const laptop = (props) => {
  return css`
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
      ${props}
    }
  `;
};