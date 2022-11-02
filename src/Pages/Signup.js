import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { AuthenticationContext } from "../Contexts/AuthenticationContenxt";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null);
    const response = await fetch(
      "https://neuefische-capstone-backend.herokuapp.com/api/users/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "SIGNIN", payload: data });
      setIsLoading(false);
      navigate("/", { replace: true });
    }
  };

  return (
    <SignupContainer>
      <h1>Signup</h1>
      <StyledForm onSubmit={onSubmitHandler}>
        <div>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <StyledLabel htmlFor="password">Password:</StyledLabel>
          <StyledInput
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <StyledButton disabled={isLoading} type="submit">
          Signup
        </StyledButton>
        {error && <ErrorWrapper>{error}</ErrorWrapper>}
      </StyledForm>
      <StyledLink to="/signin">Signin</StyledLink>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  label,
  input,
  button {
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  border-radius: 10px;
  padding: 0.7rem;
  font-weight: bolder;
  font-size: 1rem;
`;

const StyledButton = styled.button`
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

const ErrorWrapper = styled.div`
  border-radius: 10px;
  background-color: #fecaca;
  padding: 1rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
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

export default Signup;
