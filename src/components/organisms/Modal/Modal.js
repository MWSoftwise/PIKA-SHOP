import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.remove(modalNode);
    };
  }, [modalNode]);

  return ReactDom.createPortal(
    <ModalWrapper>
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;
