import styled from 'styled-components';

export const Container = styled.section`
  background-color: white;
  background-image: url(${props => props.src}); 
  background-position: center center;
  background-repeat: no-repeat no-repeat;
  background-size: cover;
  box-sizing: border-box;
  display: block;
  margin-bottom: 0;
  margin-top: 0;
  position: relative;
  transition-delay: 0s;
  transition-duration: 0s;
  transition-property: none;
  transition-timing-function: ease;
`;
