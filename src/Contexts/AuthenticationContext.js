import {
  createContext, useReducer, useEffect, useMemo,
} from 'react';

export const AuthenticationContext = createContext();

export const authActionTypes = {
  SIGNIN: 'SIGNIN',
  SIGNOUT: 'SIGNOUT',
};

const authenticationReducer = (state, action) => {
  switch (action.type) {
    case authActionTypes.SIGNIN:
      return { user: action.payload };
    case authActionTypes.SIGNOUT:
      return { user: null };
    default:
      return state;
  }
};

function AuthenticationContextProvider({ children }) {
  const [state, dispatch] = useReducer(authenticationReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch({ type: authActionTypes.SIGNIN, payload: user });
    }
  }, [dispatch]);

  const memoizedValue = useMemo(() => ({ ...state, dispatch }), []);

  return (
    <AuthenticationContext.Provider value={memoizedValue}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContextProvider;
