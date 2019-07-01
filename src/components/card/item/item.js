import React from 'react';
import {
  Button,
  Single3,
  ColorOverlay,
  Content,
  Header,
  Descripton,
  Heading,
} from './item.css';
import Eloop from '../../../images/eloop-2.jpg';
import Kite from '../../../images/kitecover-sm.jpg';
import Acai from '../../../images/acai.jpg';
import Sofia from '../../../images/sofiaportfolio_copy.jpg';
import Videos from '../../../images/videos.jpg';
import Livingwaters from '../../../images/livingwaters.jpg';
import Ssuf from '../../../images/ssuf.jpg';

const Items = () => (
  <div>
    <Single3 src="https://eloop.to/assets/socialmedia-og.jpg">
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>Eloop E-Carsharing</Heading>
          </Header>
          <Descripton>
            Head of Growth and Front End Engineer for ELOOP, a successfully
            crowdfunded e-mobility startup.
          </Descripton>
          <a href="https://eloop.to">
            <Button>Visit Eloop.to</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src={Ssuf}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>Swiss Startup Factory</Heading>
          </Header>
          <Descripton>
            Full web app development for Swiss Startup Factory. Made with
            React.js and Prismic as CMS.
          </Descripton>
          <a href="https://swissstartupfactory.com">
            <Button>swissstartupfactory.com</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src={Acai}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>El Acai Europe®</Heading>
          </Header>
          <Descripton>
            Profitable E-Commerce business within 1 year. 10.000 page views
            generated with an average conversion rate of 2.5%
          </Descripton>
          <a href="https://sofiamoraes.com/elacaieurope">
            <Button>Go to elacai.de</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src={Livingwaters}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>Living Waters Roatan</Heading>
          </Header>
          <Descripton>
            Gatsby.js Website made for Living Waters Roatan a beachfront
            vacation rental on Roatan, Honduras.
          </Descripton>
          <a href="https://livingwatersroatan.com">
            <Button>Visit Roatan</Button>
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
          <Descripton>
            JAM-Stack (serverless) portfolio website build with Gatsby.
            Technologies used for this project: React, GraphQL, Stripe API
          </Descripton>
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
          <Descripton>
            Lifestyle video production of promotional videos for niche markets
            and customers around the world.
          </Descripton>
          <a href="https://www.youtube.com/watch?v=EcCaNxBwkws">
            <Button>Watch on Youtube</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src={Kite}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>Professional Athlete</Heading>
          </Header>
          <Descripton>
            Established and ongoing kitesufing career for 8 years. Projects done
            with Core Kiteboarding, GoPro and Volkswagen, among others.
          </Descripton>
          <a href="https://instagram.com/philipp.zach">
            <Button>Instagram Profile</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
  </div>
);

export default Items;
