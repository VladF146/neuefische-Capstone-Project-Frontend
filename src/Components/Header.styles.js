import styled from 'styled-components';

const Styled = {};

Styled.Header = styled.header`
  padding: 1rem;
  background-color: #6ee7b7;
  text-align: center;
  display: flex;
  align-items: center;
`;

Styled.BackButton = styled.button`
  background-color: transparent;
  border: unset;

  svg {
    width: 20px;
    font-weight: bolder;
    margin-bottom: 0.2rem;
    cursor: pointer;
    color: black;

    &:hover {
      color: white;
    }
  }
`;

export default Styled;
