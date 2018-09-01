import React from 'react';
import CenterBox from '../centerbox/centerbox';
import Box from '../box/box';
import Title from '../title/title';
//import BackgroundBall from '../../images/b1.png';
//import Background from '../background/background';
import styled from 'styled-components';

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
        <Title tag="span">
            - I love to surf, code and look at charts
        </Title>
        </Box>
    </CenterBox>
    <CenterBox>
        <Box>
        <Paragraph>
        <p>
        I’m a <Bold>Growth Hacker</Bold> and <Bold>Front End Developer</Bold> from Austria, spending my precious time on earth between Hawaii and Bali.
        Currently, I'm most interested in Blockchain Tech, Growth Marketing and React.
        </p>
        <p>
        Researching trends, growing online businesses and analyzing data are my biggest skills;
        I love to answer any realted questions or just chat about innovative ideas and projects.
        </p>
        <p>
        Are you currently looking for a Growth Hacker or Front End Dev for your project?
        </p>
        <p><Bold> Let's see if I'm the right fit for your team!</Bold>
        <Button>Take a look at my Resume</Button>
        </p>
        </Paragraph>
        </Box>
    </CenterBox>
    </Right>
    </Margin>
    
);

export default WhoAmI;
