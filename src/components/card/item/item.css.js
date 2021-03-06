import styled from 'styled-components';
import Img from 'gatsby-image';

export const Heading = styled.h3`
  font-weight: 600;
  margin-top: 3em;
  @media (max-width: 600px) {
    margin-top: 9em;
  }
`;

export const Single3 = styled.div`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 75%;
  max-width: 800px;
  height: 300px;
  display: block;
  margin: 12vh auto;
  border-radius: 8px;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    width: 95%;
    max-width: 95%;
  }
  @media (max-width: 600px) {
    background-position: 50% 0%;
    height: 400px;
  }
`;

export const ColorOverlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    white 60%,
    white 200%
  );
  background-blend-mode: multiply;
  @media (max-width: 600px) {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      white 60%,
      white 200%
    );
  }
`;

export const Content = styled.div`
  width: 35%;
  display: block;
  position: relative;
  float: right;
  padding-right: 1em;
  @media (max-width: 1000px) {
    width: 40%;
    max-width: 95%;
  }
  @media (max-width: 600px) {
    margin-top: 4.2em;
    width: 90%;
  }
`;

export const Header = styled.div`
  margin-bottom: 2em;
  @media (max-width: 600px) {
    margin-bottom: 1em;
  }
`;

export const Descripton = styled.p`
  font-weight: 300;
  opacity: 0.65;
  line-height: 1.4;
  @media (max-width: 375px) {
    margin-bottom: 0.5em;
  }
  @media (max-width: 420px) {
    margin-bottom: 1em;
  }
`;

export const Button = styled.button`
  text-transform: uppercase;
  float: right;
  font-size: 1.3rem;
  -webkit-appearance: none;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  color: #757575;
  border: 1px solid #ddd;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 1rem 2rem;
  text-transform: uppercase;
  -webkit-transition: 0.2s background-color ease;
  transition: 0.2s background-color ease;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh; // or whatever

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'; // needed for IE9+ polyfill
  }
`;
