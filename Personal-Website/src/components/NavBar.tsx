import { Flex, Spacer, Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex bg={"#2C3E50"} as="nav" p="4" alignItems="center">
      <Heading marginLeft={2} fontSize="xl" fontWeight="bold">
        Guy Gochansky / Software Engineer
      </Heading>
      <Spacer />
      <Box marginRight={4}>
        <Link to={"/"}>
          <Button
            marginLeft={6}
            variant={"link"}
            fontSize={"lg"}
            whiteSpace={"normal"}
          >
            About Me
          </Button>
        </Link>
        <Link to={"/resume"}>
          <Button
            marginLeft={6}
            variant={"link"}
            fontSize={"lg"}
            whiteSpace={"normal"}
          >
            Resume
          </Button>
        </Link>
        <Link to={"/projects"}>
          <Button
            marginLeft={6}
            variant={"link"}
            fontSize={"lg"}
            whiteSpace={"normal"}
          >
            Projects
          </Button>
        </Link>
        <Link to={"/contact"}>
          <Button
            marginLeft={6}
            variant={"link"}
            fontSize={"lg"}
            whiteSpace={"normal"}
          >
            Contact
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
