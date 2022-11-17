import styled from 'styled-components';

const Styled = {};

Styled.Backdrop = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
  backdrop-filter: blur(0.2rem);
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10000;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Styled.ModalContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
`;

Styled.ModalHeader = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 600px;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: end;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  svg {
    width: 25px;
  }
`;

Styled.ModalBody = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  max-width: 600px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 1.2rem;
  text-align: center;
`;

Styled.ModalFooter = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: end;
  gap: 1rem;
`;

Styled.ApproveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ee7b7;
  border-radius: 10px;
  padding: 0.7rem 1.4rem;
  border: unset;
  font-family: monospace;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #34d399;
    color: white;
  }
`;

Styled.AbortButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #6b7280;
  color: #6b7280;
  background-color: white;
  border-radius: 10px;
  padding: 0.7rem 1.4rem;
  font-family: monospace;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    border: 2px solid #111827;
    color: #111827;
  }
`;

export default Styled;
