import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthenticationContext,
  authActionTypes,
} from "../Contexts/AuthenticationContext";
import { postSignup } from "../Services/fetchAuth";
import Styled from "./Auth.styles";

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
    } else {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: authActionTypes.SIGNIN, payload: data });
      setIsLoading(false);
      navigate("/", { replace: true });
    }
  };

  return (
    <Styled.Container>
      <h1>Signup</h1>
      <Styled.Form onSubmit={handleSignup}>
        <div>
          <Styled.Label htmlFor="email">Email:</Styled.Label>
          <Styled.Input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <Styled.Label htmlFor="password">Password:</Styled.Label>
          <Styled.Input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <Styled.Button disabled={isLoading} type="submit">
          Signup
        </Styled.Button>
        {error && <Styled.ErrorWrapper>{error}</Styled.ErrorWrapper>}
      </Styled.Form>
      <Styled.LinkWrapper to="/signin">Signin</Styled.LinkWrapper>
    </Styled.Container>
  );
}

export default Signup;
