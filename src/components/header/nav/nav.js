import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/contact">Contact Me</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;
