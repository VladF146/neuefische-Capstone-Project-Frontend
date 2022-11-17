import { XMarkIcon } from '@heroicons/react/24/outline';
import Styled from './Modal.styles';

function Modal({ setIsModalOpen, handleDelete }) {
  return (
    <Styled.Backdrop
      onClick={() => {
        setIsModalOpen(false);
      }}
    >
      <Styled.ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Styled.ModalHeader>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            <XMarkIcon />
          </button>
        </Styled.ModalHeader>
        <Styled.ModalBody>
          Are you sure you want to delete the note?
        </Styled.ModalBody>
        <Styled.ModalFooter>
          <Styled.ApproveButton onClick={handleDelete}>
            Delete
          </Styled.ApproveButton>
          <Styled.AbortButton onClick={() => setIsModalOpen(false)}>
            Cancel
          </Styled.AbortButton>
        </Styled.ModalFooter>
      </Styled.ModalContainer>
    </Styled.Backdrop>
  );
}

export default Modal;
