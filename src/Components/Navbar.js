import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <StyleNavLink to="/notes" end>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
              />
            </svg>
            Notes
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/create">
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
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Create
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/settings">
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            Settings
          </StyleNavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  background-color: #6ee7b7;

  ul {
    display: flex;
  }

  li {
    list-style: none;
    flex-grow: 1;
  }

  svg {
    width: 25px;
    font-weight: bolder;
    margin-bottom: 0.2rem;
  }
`;

const StyleNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: 100%;
  padding: 1rem;
  text-align: center;
  color: black;
  font-size: 0.8rem;

  &:hover {
    color: white;
    background-color: #34d399;
  }

  &.active {
    color: white;
    background-color: #34d399;
  }
`;

export default Navbar;
