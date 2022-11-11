import styled from 'styled-components';

const Styled = {};

Styled.PasswordWrapper = styled.div`
  display: flex;
  margin-top: 0.25rem;
  border-radius: 0.375rem;
  box-shadow: inset 0px 0px 7px 0 rgba(0, 0, 0, 0.1);

  input {
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    box-shadow: unset;
    background-color: transparent;
    margin-top: 0;
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
  line-height: 1.25rem;
  font-weight: 600;
  align-items: center;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
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
