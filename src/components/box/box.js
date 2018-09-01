import React from 'react';
import PropTypes from 'prop-types';
import { BoxContainer } from './box.css';

const Box = ({ children }) => <BoxContainer>{children}</BoxContainer>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
