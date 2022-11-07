import styled from "styled-components";
import { Link } from "react-router-dom";

function Home() {
  return (
    <HomeContainer>
      <StyledList>
        {Array(20)
          .fill()
          .map((element, index) => (
            <li>
              <StyledLink to="/">
                <h2>Note title #{index + 1}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </StyledLink>
            </li>
          ))}
      </StyledList>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

const StyledList = styled.ul`
  height: 100%;
  width: 100%;

  li {
    list-style: none;
    border-bottom: 1px solid #f1f5f9;

    &:hover {
      background-color: #f8fafc;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #1e293b;
  text-decoration: none;

  svg {
    width: 25px;
    font-weight: bolder;
    margin-bottom: 0.2rem;
  }
`;

export default Home;
