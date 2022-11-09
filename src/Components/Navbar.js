import {
  Square3Stack3DIcon,
  PlusCircleIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { StyledNavbar, StyleNavLink } from "./Navbar.styles";

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

export default Navbar;
