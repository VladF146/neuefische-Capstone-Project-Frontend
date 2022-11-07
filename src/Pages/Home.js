import styled from "styled-components";

function Home() {
  return (
    <HomeContainer>
      <h1>Home page</h1>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  flex-grow: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

`;

export default Home;
