import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Header from "./Header";

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Navbar />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;`

export default Layout;
