import { useContext } from "react";
import styled from "styled-components";
import { AuthenticationContext } from "../Contexts/AuthenticationContenxt";

function Home() {
  const { user, dispatch } = useContext(AuthenticationContext);

  const onClickHandler = () => {
    localStorage.removeItem("user");
    dispatch({ type: "SIGNOUT" });
  };

  return (
    <HomeContainer>
      <h1>{`Welcome ${user.email}`}</h1>
      <StyledButton type="button" onClick={onClickHandler}>
        Signout
      </StyledButton>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 2rem;
  }
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ee7b7;
  border-radius: 10px;
  padding: 1rem;
  border: unset;
  font-weight: bolder;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #34d399;
  }
`;

export default Home;
