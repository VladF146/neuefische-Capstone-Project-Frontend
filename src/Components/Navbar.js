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
          <Styled.NavLink to="/notes" title="To Notes page">
            <Square3Stack3DIcon />
            Notes
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink to="/create" title="To Create page">
            <PlusCircleIcon />
            Create
          </Styled.NavLink>
        </li>
        <li>
          <Styled.NavLink to="/settings" title="To Settings page">
            <AdjustmentsHorizontalIcon />
            Settings
          </Styled.NavLink>
        </li>
      </ul>
    </Styled.Navbar>
  );
}

export default Navbar;
