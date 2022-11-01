import { useState, useContext } from 'react';
import { AuthenticationContext } from '../Contexts/AuthenticationContenxt';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AuthenticationContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    const response = await fetch(
      'https://neuefische-capstone-backend.herokuapp.com/api/users/signup',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      },
    );
    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch({ type: 'SIGNIN', payload: data });
      setIsLoading(false);
    }
    await email;
  };

  return (
    <>
      <h1>Signup</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={isLoading} type="submit">
          Signup
        </button>
        {error && <div>{error}</div>}
      </form>
    </>
  );
}

export default Signup;
