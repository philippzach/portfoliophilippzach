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
import Eloopone from '../../../images/eloopone.jpg';
import Bv4 from '../../../images/bv4.jpg';
import Cafe from '../../../images/cafeblack.jpg';
import Fund from '../../../images/fund.jpg';
import Ssut from '../../../images/ssut.jpg';
import Wohlgensinger from '../../../images/wohlgensinger.jpg';
import Kite from '../../../images/kitecover-sm.jpg';
import Mictic from '../../../images/mictic.jpg';
import Acai from '../../../images/acai.jpg';
import Sofia from '../../../images/sofiaportfolio_copy.jpg';
import Videos from '../../../images/videos.jpg';
import Livingwaters from '../../../images/livingwaters.jpg';
import Ssuf from '../../../images/ssuf.jpg';

const Items = () => (
  <div>
    <Single3 src={Wohlgensinger}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>Wohlgensinger AG</Heading>
          </Header>
          <Descripton>
            Portfolio Website for a carpenter and construction company based in Switzerland. Made with Gastby.js
          </Descripton>
          <a href="https://www.wohlgensinger.ch/">
            <Button>Wohlgensinger.ch</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src={Cafe}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>Cafe Bar Black 1966</Heading>
          </Header>
          <Descripton>
         Website for a Cafe in Zurich. Made with Gatsby.js and Prismic for Menu updates.
          </Descripton>
          <a href="https://www.black1966.ch/">
            <Button>Visit Black1966.ch</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src={Bv4}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>BV4 Ltd.</Heading>
          </Header>
          <Descripton>
          Basic Website made with
            Gatsby.js and Prismic as CMS.
          </Descripton>
          <a href="https://zealous-thompson-0682eb.netlify.app/">
            <Button>Visit bv4.ch</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src="https://heuristic-jones-25fe7c.netlify.app/assets/socialmedia-og.jpg">
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>ELOOP E-Carsharing</Heading>
          </Header>
          <Descripton>
            Head of Growth and Front End Engineer for ELOOP, a successfully
            crowdfunded e-mobility startup.
          </Descripton>
          <a href="https://heuristic-jones-25fe7c.netlify.app/">
            <Button>Visit Eloop.to</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src={Eloopone}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>ELOOP One Dashboard</Heading>
          </Header>
          <Descripton>
          I was responsible to redesign/touchup the React Front-End with 0BS Blockchain Integration.
          </Descripton>
          <a href="https://dashboard.eloop.one/">
            <Button>Visit ELOOP One</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src={Fund}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>SSUG Flagship Fund</Heading>
          </Header>
          <Descripton>
          Full web app development for Swiss Startup Fund. Made with
            Gatsby.js and Prismic as CMS.
          </Descripton>
          <a href="https://nervous-knuth-26f3ac.netlify.app/fund/">
            <Button>Visit Website</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src={Ssut}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>Swiss Startup Tech</Heading>
          </Header>
          <Descripton>
            Full web app development for Swiss Startup Tech. Made with
            Gatsby.js and Prismic as CMS.
          </Descripton>
          <a href="https://gallant-thompson-962fb0.netlify.app/">
            <Button>swissstartupfactory.com</Button>
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
            Gatsby.js and Prismic as CMS.
          </Descripton>
          <a href="https://swissstartupfactory.com">
            <Button>swissstartupfactory.com</Button>
          </a>
        </Content>
      </ColorOverlay>
    </Single3>
    <Single3 src={Mictic}>
      <ColorOverlay>
        <Content>
          <Header>
            <Heading>Mictic AG</Heading>
          </Header>
          <Descripton>
            E-Commerce Shop made with WooCommerce and Wordpress
          </Descripton>
          <a href="https://mictic.com">
            <Button>Check out Mictic</Button>
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
             Bootstrapped profitable E-Commerce business within 1 year. 10.000 page views
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
          <a href="https://sofiamoraes.netlify.app/">
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
