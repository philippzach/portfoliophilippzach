import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './centerbox.css';

const CenterBox = ({ children }) => <Container>{children}</Container>;

CenterBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenterBox;
