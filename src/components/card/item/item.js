import React from 'react';
import { Button, Single3, ColorOverlay, Content, Header, Descripton, Heading } from './item.css';
//import Kite from '../../../images/kitecover-sm.jpg';
import Acai from '../../../images/acai.jpg';
import Sofia from '../../../images/sofiaportfolio.jpg'
import Videos from '../../../images/videos.jpg';

const Items = () => (
    <div>
    <Single3 src={Acai}>
        <ColorOverlay>
        <Content>
        <Header>
          <Heading>El Acai Europe®</Heading>
        </Header>
        <Descripton>Profitable E-Commerce business within 1 year. 10.000 page views generated with an average conversion rate of 2.5%</Descripton>
        <a href="https://elacai.de">
        <Button>Go to elacai.de</Button>
        </a>
        </Content>
        </ColorOverlay>
      </Single3>
      <Single3 src={Sofia}>
        <ColorOverlay>
        <Content>
        <Header>
          <Heading>Portfolio for Sofia Moræs</Heading>
        </Header>
        <Descripton>JAM-Stack (serverless) portfolio website build with Gatsby. Technologies used for this project: React, GraphQL, Stripe API</Descripton>
        <a href="https://sofiamoraes.com">
        <Button>Look at Portfolio</Button>
        </a>
        </Content>
        </ColorOverlay>
      </Single3>
      <Single3 src={Videos}>
        <ColorOverlay>
        <Content>
        <Header>
          <Heading>Video Production's</Heading>
        </Header>
        <Descripton>Lifestyle video production of promotional videos for niche markets and customers around the world.</Descripton>
        <a href="https://www.youtube.com/watch?v=EcCaNxBwkws">
        <Button>Watch on Youtube</Button>
        </a>
        </Content>
        </ColorOverlay>
      </Single3>
      { /* }<Single3 src={Kite}>
        <ColorOverlay>
        <Content>
        <Header>
          <Heading>Professional Athlete</Heading>
        </Header>
        <Descripton>Established and ongoing kitesufing career for 8 years. Projects done with Core Kiteboarding, GoPro and Volkswagen, among others.</Descripton>
        <Button>Show Me!</Button>
        </Content>
        </ColorOverlay>
      </Single3>{ */ }
      </div>
)

export default Items;