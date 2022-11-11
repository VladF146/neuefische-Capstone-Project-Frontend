import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Styled = {};

Styled.Navbar = styled.nav`
  background-color: #6ee7b7;

  ul {
    display: flex;
  }

  li {
    list-style: none;
    width: 33.333333333%;
    flex-grow: 1;
  }

  svg {
    width: 25px;
    font-weight: bolder;
    margin-bottom: 0.2rem;
  }
`;

Styled.NavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  width: 100%;
  padding: 1rem 0;
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

export default Styled;
