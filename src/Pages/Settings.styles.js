import styled from 'styled-components';

const Styled = {};

Styled.Container = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;

  h1 {
    margin-bottom: 2rem;
  }
`;

Styled.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ee7b7;
  border-radius: 10px;
  padding: 1rem 2rem;
  border: unset;
  font-weight: bolder;
  font-family: monospace;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #34d399;
  }

  svg {
    width: 18px;
    margin-left: 0.5rem;
  }
`;

export default Styled;
