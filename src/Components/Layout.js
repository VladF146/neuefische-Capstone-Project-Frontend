import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Styled from "./Layout.styles";

function Layout() {
  return (
    <Styled.LayoutContainer>
      <Header />
      <Outlet />
      <Navbar />
    </Styled.LayoutContainer>
  );
}

export default Layout;
