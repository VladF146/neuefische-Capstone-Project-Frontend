import { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import PasswordInput from '../Components/PasswordInput';
import {
  AuthenticationContext,
  authActionTypes,
} from '../Contexts/AuthenticationContext';
import { postSignup } from '../Services/fetchAuth';
import Styled from './Auth.styles';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const {
    isLoading, isError, error, refetch,
  } = useQuery(
    'signup',
    () => postSignup(email, password),
    {
      enabled: false,
      retry: 1,
      onSuccess: (data) => {
        localStorage.setItem('user', JSON.stringify(data.data));
        dispatch({ type: authActionTypes.SIGNIN, payload: data.data });
        navigate('/', { replace: true });
      },
    },
  );

  const handleSignup = async (event) => {
    event.preventDefault();
    refetch();
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
            placeholder="e.g., anna.conda@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <PasswordInput passworw={password} setPassword={setPassword} />
        </div>

        <Styled.Button disabled={isLoading} type="submit">
          Signup
        </Styled.Button>
        {isError && (
          <Styled.ErrorWrapper>{error.response.data.error}</Styled.ErrorWrapper>
        )}
      </Styled.Form>
      <Styled.LinkWrapper to="/signin">Signin</Styled.LinkWrapper>
    </Styled.Container>
  );
}

export default Signup;
