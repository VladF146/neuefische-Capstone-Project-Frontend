import { useContext } from "react";
import {
  AuthenticationContext,
  authActionTypes,
} from "../Contexts/AuthenticationContext";
import Styled from "./Settings.styles";

function Settings() {
  const { user, dispatch } = useContext(AuthenticationContext);

  const handleSignout = () => {
    localStorage.removeItem("user");
    dispatch({ type: authActionTypes.SIGNOUT });
  };

  return (
    <Styled.Container>
      <h1>{user.email}</h1>
      <Styled.Button type="button" onClick={handleSignout}>
        Signout
      </Styled.Button>
    </Styled.Container>
  );
}

export default Settings;
