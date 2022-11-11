import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Styled from './Layout.styles';

function Layout() {
  return (
    <Styled.LayoutContainer>
      <Outlet />
      <Navbar />
    </Styled.LayoutContainer>
  );
}

export default Layout;
