import React from 'react';
import Modal from './Modal';


const ModalConductor = props => {
  switch (props.currentModal) {
    case 'Signup/Login':
      return <Modal {...props}/>;

    default:
      return null;
  }
};

export default ModalConductor;