import styled from "styled-components";
import { Link } from "react-router-dom";

export const SigninContainer = styled.div`
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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  label,
  input,
  button {
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  border-radius: 10px;
  padding: 0.7rem;
  font-weight: bolder;
  font-size: 1rem;
`;

export const StyledButton = styled.button`
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

export const ErrorWrapper = styled.div`
  border-radius: 10px;
  background-color: #fecaca;
  padding: 1rem;
  text-align: center;
`;

export const StyledLink = styled(Link)`
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
