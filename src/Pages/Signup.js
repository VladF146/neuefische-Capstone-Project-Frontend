import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";
import { postSignup } from "../Services/fetchAuth";
import {
  SignupContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  ErrorWrapper,
  StyledLink,
} from "./Signup.styles";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null);
    const { response, data } = await postSignup(email, password);

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
      <StyledForm onSubmit={handleSignup}>
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

export default Signup;
