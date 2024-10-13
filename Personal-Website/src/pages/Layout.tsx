import NavBar from "../components/NavBar";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Flex direction="column" minHeight="100vh">
        <NavBar />
        {/* Flex-grow here ensures the main content takes up remaining space */}
        <Box flex="1">
          <Outlet />
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
