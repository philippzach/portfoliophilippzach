import React from 'react';
import { Consumer } from 'store/createContext';
import Modal from 'components/modal';

export default ({ children, text }) => (
  <Consumer>
    {({ visible, toggleModal }) => (
      <Modal visible={visible} toggleModal={toggleModal} children={children} text={text} />
    )}
  </Consumer>
);
