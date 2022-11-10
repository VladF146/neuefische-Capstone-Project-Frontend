import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthenticationContext,
  authActionTypes,
} from "../Contexts/AuthenticationContext";
import Styled from "./Auth.styles";
import { postSignin } from "../Services/fetchAuth";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleSignin = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null);

    const { response, data } = await postSignin(email, password);

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
      <h1>Signin</h1>
      <Styled.Form onSubmit={handleSignin}>
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
          Signin
        </Styled.Button>
        {error && <Styled.ErrorWrapper>{error}</Styled.ErrorWrapper>}
      </Styled.Form>
      <Styled.LinkWrapper to="/signup">Signup</Styled.LinkWrapper>
    </Styled.Container>
  );
}

export default Signin;
