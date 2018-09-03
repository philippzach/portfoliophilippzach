import styled from 'styled-components';
import React from 'react';
import Layout from 'components/layout';
import { BoxContainer } from 'components/box/box.css';
import Title from 'components/title';
import Footer from 'components/footer';
import BackgrounTop from '../images/backgroundtop-min.png';
import Modal from 'containers/modal';
import WhoAmI from 'components/whoami';
import Skills from 'components/skills';
import { graphql } from 'gatsby';
import { Container } from 'components/background/background.css';
import CardSection from 'components/card';
import BackgroundMobile from '../images/backgroundtop-mobile-min.png';
import Kite from '../images/kitecover-sm.jpg';
import { Single3, ColorOverlay, Content, Header, Descripton, Heading } from '../components/card/item/item.css';

const BackgroundTop = styled(Container)`
height: 75rem;
@media (max-width: 800px) {
background-image: url(${BackgroundMobile});
}
`;

const Box = styled(BoxContainer)`
margin-top: 15rem;
`;

const Span = styled.span`
@media (max-width: 1000px) {
background-color: white;
}
`;

export default ({ data }) => (
  <div>
    <BackgroundTop src={BackgrounTop}>
      <Layout>
        <Box>
          <Title tag="h1" size="large">
          <Span>{data.homeJson.content.childMarkdownRemark.rawMarkdownBody}</Span>
          </Title>
          <Title tag="span">
          <Span>and in free love between all living species, like pandas.</Span>
          </Title>
          <Modal text="Show Me!">
            <video
              src="https://i.imgur.com/QzSPpgx.mp4"
              playsInline
              loop
              autoPlay
              muted
            />
          </Modal>
        </Box>
        </Layout>
    </BackgroundTop>
      <WhoAmI />
      <Skills />
      <CardSection />
      <Single3 src={Kite}>
        <ColorOverlay>
        <Content>
        <Header>
          <Heading>Professional Athlete</Heading>
        </Header>
        <Descripton>Established and ongoing kitesufing career for 6 years. Projects done with Core Kiteboarding, GoPro and Volkswagen, among others.</Descripton>
        </Content>
        </ColorOverlay>
      </Single3>
      <Footer />
  </div>
);

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;

