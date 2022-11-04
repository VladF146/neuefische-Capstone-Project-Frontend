import { createContext, useReducer, useEffect } from "react";

export const AuthenticationContext = createContext();

const authenticationReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      return { user: action.payload };
    case "SIGNOUT":
      return { user: null };
    default:
      return state;
  }
};

function AuthenticationContextProvider({ children }) {
  const [state, dispatch] = useReducer(authenticationReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "SIGNIN", payload: user });
    }
  }, [dispatch]);

  return (
    <AuthenticationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthenticationContextProvider;
