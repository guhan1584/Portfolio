import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
