import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AuthenticationContext,
  authActionTypes,
} from '../Contexts/AuthenticationContext';
import Styled from './Settings.styles';

function Settings() {
  const { user, dispatch } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem('user');
    dispatch({ type: authActionTypes.SIGNOUT });
    navigate('/auth');
  };

  return (
    <Styled.Container>
      <h1>{user.email}</h1>
      <Styled.Button type="button" onClick={handleSignout} title="Signout and go o Signin page">
        Signout
      </Styled.Button>
    </Styled.Container>
  );
}

export default Settings;
