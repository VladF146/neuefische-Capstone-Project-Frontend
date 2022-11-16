import styled from 'styled-components';

const Styled = {};

Styled.Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 768px;
  margin: 0 auto;

  h1 {
    margin-bottom: 2rem;
  }
`;

Styled.Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 480px;

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
  font-family: monospace;
  font-size: 1rem;
  border: none;
  box-shadow: inset 0px 0px 7px 0 rgba(0, 0, 0, 0.1);
  margin-top: 0.25rem;
  background-color: #f8fafc;

  &:focus {
    outline: 2px solid #34d399;
  }
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
  font-family: monospace;
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

Styled.ChangeAuthButton = styled.button`
  margin-top: 2rem;
  border: unset;
  background-color: transparent;
  font-weight: bolder;
  font-family: monospace;
  font-size: 1rem;
  color: black;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #34d399;
  }
`;

export default Styled;
