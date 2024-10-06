import {
  Flex,
  Spacer,
  Box,
  Button,
  Heading,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const buttonSize = useBreakpointValue({ base: "sm", md: "lg" });

  return (
    <Flex
      // bg={"#2C3E50"}
      bgGradient="linear(to-r, teal.500, blue.600)"
      as="nav"
      p="4"
      alignItems="center"
    >
      <Box display="flex" alignItems="center">
        <Heading
          marginLeft={2}
          paddingRight={2}
          fontSize={"x-large"}
          fontWeight="bold"
        >
          Guy Gochansky
        </Heading>
        <Heading fontSize={"x-large"}> / </Heading>
        <Heading paddingLeft={2} fontSize={"x-large"}>
          Software Engineer
        </Heading>
      </Box>
      <Spacer />
      <Box marginRight={4}>
        <Grid templateColumns="repeat(4, auto)" gap={6}>
          <Link to={"/"}>
            <Button
              variant={"ghost"}
              fontSize={buttonSize}
              color={location.pathname === "/" ? "teal.300" : "white"}
            >
              About Me
            </Button>
          </Link>
          <Link to={"/resume"}>
            <Button
              variant={"ghost"}
              fontSize={buttonSize}
              color={location.pathname === "/resume" ? "teal.300" : "white"}
            >
              Resume
            </Button>
          </Link>
          <Link to={"/projects"}>
            <Button
              variant={"ghost"}
              fontSize={buttonSize}
              color={location.pathname === "/projects" ? "teal.300" : "white"}
            >
              Projects
            </Button>
          </Link>
          <Link to={"/contact"}>
            <Button
              variant={"ghost"}
              fontSize={buttonSize}
              color={location.pathname === "/contact" ? "teal.300" : "white"}
            >
              Contact
            </Button>
          </Link>
        </Grid>
      </Box>
    </Flex>
  );
};

export default NavBar;
