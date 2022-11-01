import { useContext } from 'react';
import { AuthenticationContext } from '../Contexts/AuthenticationContenxt';

function Home() {
  const { user, dispatch } = useContext(AuthenticationContext);

  const onClickHandler = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'SIGNOUT' });
  };

  return (
    <>
      <h1>Home</h1>
      <p>
        Welcome
        {user.email}
      </p>
      <button type="button" onClick={onClickHandler}>
        Signout
      </button>
    </>
  );
}

export default Home;
