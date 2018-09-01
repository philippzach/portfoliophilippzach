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
          <Modal>
            <video
              src="https://i.imgur.com/G959Mn6.mp4"
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

