import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styled = {};

Styled.Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
  }
`;

Styled.Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  label,
  input,
  button {
    width: 100%;
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

Styled.Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ee7b7;
  border-radius: 10px;
  padding: 1rem;
  border: unset;
  font-weight: bolder;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #34d399;
  }
`;

Styled.ErrorWrapper = styled.div`
  border-radius: 10px;
  background-color: #fecaca;
  padding: 1rem;
  text-align: center;
`;

Styled.LinkWrapper = styled(Link)`
  margin-top: 2rem;
  text-decoration: none;
  font-weight: bolder;
  font-size: 1rem;
  color: black;

  &:hover {
    text-decoration: underline;
    color: #34d399;
  }
`;

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
  color: 'black';
  cursor: pointer;

  svg {
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export default Styled;
