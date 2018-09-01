import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './background.css';

const Background = ({ children, src }) => {
  return (
    <Container src={src}>
      {children}
    </Container>
  );
};

Background.propTypes = {
  children: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default Background;
