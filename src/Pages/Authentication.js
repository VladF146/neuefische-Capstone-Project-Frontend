import { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import PasswordInput from '../Components/PasswordInput';
import {
  AuthenticationContext,
  authActionTypes,
} from '../Contexts/AuthenticationContext';
import Styled from './Authentication.styles';
import postAuthentication from '../Services/fetchAuth';

function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [authPageChoice, setAuthPageChoice] = useState('signin');
  const { dispatch } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const {
    isLoading, isError, error, refetch,
  } = useQuery(
    authPageChoice,
    () => postAuthentication(email, password, authPageChoice),
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

  const handleAuthentication = async (event) => {
    event.preventDefault();
    refetch();
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Styled.Container>
      <h1>{capitalizeFirstLetter(authPageChoice)}</h1>
      <Styled.Form onSubmit={handleAuthentication}>
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
          {capitalizeFirstLetter(authPageChoice)}
        </Styled.Button>
        {isError && (
          <Styled.ErrorWrapper data-testid="error-wrapper">
            {error.response.data.error}
          </Styled.ErrorWrapper>
        )}
      </Styled.Form>
      <Styled.ChangeAuthButton
        onClick={() => setAuthPageChoice(
          `${authPageChoice === 'signin' ? 'signup' : 'signin'}`,
        )}
      >
        {`${
          authPageChoice === 'signin' ? 'Signup' : 'Signin'
        }`}
      </Styled.ChangeAuthButton>
    </Styled.Container>
  );
}

export default Authentication;
