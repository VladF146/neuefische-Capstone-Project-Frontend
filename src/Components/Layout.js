import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import LayoutContainer from "./Layout.styles";

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Navbar />
    </LayoutContainer>
  );
}

export default Layout;
