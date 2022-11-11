import { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import PasswordInput from '../Components/PasswordInput';
import {
  AuthenticationContext,
  authActionTypes,
} from '../Contexts/AuthenticationContext';
import Styled from './Auth.styles';
import { postSignin } from '../Services/fetchAuth';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const {
    isLoading, isError, error, refetch,
  } = useQuery(
    'signin',
    () => postSignin(email, password),
    {
      enabled: false,
      retry: 0,
      onSuccess: (data) => {
        localStorage.setItem('user', JSON.stringify(data.data));
        dispatch({ type: authActionTypes.SIGNIN, payload: data.data });
        navigate('/', { replace: true });
      },
    },
  );

  const handleSignin = async (event) => {
    event.preventDefault();
    refetch();
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
            placeholder="e.g., anna.conda@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <PasswordInput passworw={password} setPassword={setPassword} />
        </div>

        <Styled.Button disabled={isLoading} type="submit">
          Signin
        </Styled.Button>
        {isError && (
          <Styled.ErrorWrapper>{error.response.data.error}</Styled.ErrorWrapper>
        )}
      </Styled.Form>
      <Styled.LinkWrapper to="/signup">Signup</Styled.LinkWrapper>
    </Styled.Container>
  );
}

export default Signin;
