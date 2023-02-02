import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ConfirmModalProps {
  show: boolean;
  title: string;
  body: string;
  handleClose: () => void;
  onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  show,
  handleClose,
  title,
  body,
  onConfirm,
}) => {




  return (
    <>
      <Modal id="popup-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default ConfirmModal;