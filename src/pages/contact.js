import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import { BoxContainer } from '../components/box/box.css';
import Head from 'components/head';
import ContactForm from 'components/contact';
import styled from 'styled-components';

const MarginBox = styled(BoxContainer)`
margin: auto;
`;

export default ({ data }) => (
  <Layout>
    <Head pageTitle={data.aboutJson.title} />
    <MarginBox>
      <ContactForm/>
    </MarginBox>
  </Layout>
);

export const query = graphql`
  query AboutQuery {
    aboutJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
