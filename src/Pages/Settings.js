import { useContext } from "react";
import { AuthenticationContext } from "../Contexts/AuthenticationContext";
import { SettingsContainer, StyledButton } from "./Settings.styles";

function Settings() {
  const { user, dispatch } = useContext(AuthenticationContext);

  const handleSignout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "SIGNOUT" });
  };

  return (
    <SettingsContainer>
      <h1>{user.email}</h1>
      <StyledButton type="button" onClick={handleSignout}>
        Signout
      </StyledButton>
    </SettingsContainer>
  );
}

export default Settings;
