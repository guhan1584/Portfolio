import NavBar from "../components/NavBar";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Flex direction="column" minHeight="100vh">
        {/* NavBar should always be at the top */}
        <NavBar />

        {/* Main content area with Outlet for child components */}
        <Box flex="1" p={4} mt="60px">
          {" "}
          {/* Added flex="1" to ensure it takes the remaining space */}
          <Outlet />{" "}
          {/* Renders the child components (HomePage, Resume, etc.) */}
        </Box>

        {/* Footer should always be at the bottom */}
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
