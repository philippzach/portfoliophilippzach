import React from 'react';
import CenterBox from '../centerbox/centerbox';
import { BoxContainer } from '../box/box.css';
import Box from '../box/box';
import Title from '../title/title';
import Resumee from '../../../static/philipp_zach_resumee_curriculum.pdf';
//import BackgroundBall from '../../images/b1.png';
//import Background from '../background/background';
import styled from 'styled-components';

const PaddingBox = styled(BoxContainer)`
  padding: 2rem 2rem;
`;

const Paragraph = styled.div`
  line-height: 1.7;
  text-align: left;
`;

const Right = styled.div`
  text-align: right;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const Button = styled.button`
  text-transform: uppercase;
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
  margin-left: 1em;
  @media (max-width: 682px) {
    margin-left: 0;
    margin-top: 2em;
  }
  @media (max-width: 441px) {
    margin-left: 2em;
    margin-top: 2em;
  }

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Margin = styled.div`
  margin: 10px 0 40px;
`;

const WhoAmI = () => (
  <Margin>
    <Right>
      <CenterBox>
        <Box>
          <Title tag="h2" size="large">
            Hi! I'm Philipp
          </Title>
          <Title tag="span">- I love to surf, code and look at charts</Title>
        </Box>
      </CenterBox>
      <CenterBox>
        <PaddingBox>
          <Paragraph>
            <p>
              I’m a passionate <Bold>Growth Strategist</Bold> and{' '}
              <Bold>JavaScript Engineer</Bold> from Austria, spending my
              precious moment on earth between tropical islands and snowy
              mountains. I help emerging startups and digital companies to
              expand their comfort zone and develop a bulletproof growth
              strategy.
            </p>
            <p>
              <Bold>Researching trends</Bold>, <Bold>developing MVP's</Bold> and{' '}
              <Bold>growing digital companies</Bold> are my most sophisticated
              skills; I love to chat about innovative ideas and projects.
            </p>
            <p>
              My approach is straightforward and my decisions based on data.
            </p>
            <p>
              <Bold> Let's see if I'm the right fit for your team!</Bold>
              {/*  <a href={Resumee}><Button>Take a look at my Resume</Button></a> */}
            </p>
          </Paragraph>
        </PaddingBox>
      </CenterBox>
    </Right>
  </Margin>
);

export default WhoAmI;
