import styled from 'styled-components';

export const OutsideCard = styled.div`
width: 200px;
height: 200px;
border-width: 0;
  box-sizing: border-box;
  display: flex;
  font-size: 100%;
  margin: 0;
  min-height: 1px;
  outline: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
  @media (max-width: 500px) {
      margin-bottom: 40px;
  } 
`;

export const Wrapper = styled.div`
  border-width: 0;
  box-sizing: border-box;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  position: relative;
  vertical-align: baseline;
  width: 100%;
  `;

export const ImageWrapper = styled.div`
  border-width: 0;
  box-sizing: border-box;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
`;

export const Paragraph = styled.p`
  border-width: 0;
  box-sizing: border-box;
  color: #03162e;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  `;

export const Card = styled.div`
  -webkit-box-align: start;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 42px;
  border-width: 0;
  box-shadow: rgba(7,51,130,.1) 0 4px 8px 0;
  box-sizing: border-box;
  display: flex;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 22px 0 0;
  position: relative;
  transform: translateY(-1px);
  transition-delay: 0s,0s,0s,0s;
  transition-duration: .3s,.3s,.3s,.3s;
  transition-property: background,border,border-radius,box-shadow;
  transition-timing-function: ease,ease,ease,ease;
  vertical-align: baseline;
  width: 100%;
  text-align: center;
  &:hover {
    transform: translateY(-0.5px);
    -webkit-box-shadow: 0px 4px 12px 0px rgba(72,77,122,0.15);
    -moz-box-shadow: 0px 4px 12px 0px rgba(72,77,122,0.15);
    box-shadow: 0px 4px 12px 0px rgba(72,77,122,0.15);
  }
`;

export const Row = styled.div`
  border-width: 0;
  box-sizing: border-box;
  display: flex;
  font-size: 100%;
  justify-content: space-evenly;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  border-width: 0;
  box-sizing: border-box;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
  width: 134px;
`;