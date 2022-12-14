import styled from 'styled-components';

const Styled = {};

Styled.PasswordWrapper = styled.div`
  display: flex;
  margin-top: 0.25rem;
  border-radius: 10px;
  box-shadow: inset 0px 0px 7px 0 rgba(0, 0, 0, 0.1);
  &:focus-within {
    outline: 2px solid #34d399;
  }
  background-color: #f8fafc;

  input {
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    box-shadow: unset;
    background-color: transparent;
    font-family: monospace;
    margin-top: 0;
    outline: none;
  }
`;

Styled.Label = styled.label`
  font-size: 1rem;
`;

Styled.Input = styled.input`
  border-radius: 10px;
  padding: 1rem;
  font-weight: bolder;
  font-size: 1rem;
  border: none;
  box-shadow: inset 0px 0px 7px 0 rgba(0, 0, 0, 0.1);
  margin-top: 0.25rem;
`;

Styled.ToggleButton = styled.button`
  flex: 1;
  display: flex;
  padding: 0.875rem;
  background-color: transparent;
  font-size: 0.875rem;
  font-family: monospace;
  line-height: 1.25rem;
  font-weight: 600;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: unset;
  color: "black";
  cursor: pointer;

  svg {
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export default Styled;
