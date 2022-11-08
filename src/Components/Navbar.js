import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  Square3Stack3DIcon,
  PlusCircleIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <StyleNavLink to="/notes" end>
            <Square3Stack3DIcon />
            Notes
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/create">
            <PlusCircleIcon />
            Create
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/settings">
            <AdjustmentsHorizontalIcon />
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
