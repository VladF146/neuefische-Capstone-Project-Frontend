import {
  Square3Stack3DIcon,
  PlusCircleIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import Styled from './Navbar.styles';

function Navbar() {
  return (
    <Styled.Navbar>
      <ul>
        <li>
          <Styled.NavLink to="/notes">
            <Square3Stack3DIcon />
            Notes
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink to="/create">
            <PlusCircleIcon />
            Create
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink to="/settings">
            <AdjustmentsHorizontalIcon />
            Settings
          </Styled.NavLink>
        </li>
      </ul>
    </Styled.Navbar>
  );
}

export default Navbar;
