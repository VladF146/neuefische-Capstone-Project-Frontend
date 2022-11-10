import styled from "styled-components";
import { Link } from "react-router-dom";

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

  label,
  input,
  button {
    width: 100%;
  }
`;

Styled.Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

Styled.Input = styled.input`
  border-radius: 10px;
  padding: 0.7rem;
  font-weight: bolder;
  font-size: 1rem;
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

export default Styled;