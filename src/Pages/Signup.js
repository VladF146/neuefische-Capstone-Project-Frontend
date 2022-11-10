import { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <Styled.Label htmlFor="password">Password:</Styled.Label>
          <Styled.PasswordWrapper>
            <Styled.Input
              id="password"
              type={isPasswordVisible ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Styled.ToggleButton type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>{isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon /> }</Styled.ToggleButton>
          </Styled.PasswordWrapper>
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
