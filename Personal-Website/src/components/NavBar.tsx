import { Flex, Spacer, Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex as="nav" p="4" alignItems="center">
      <Heading fontSize="xl" fontWeight="bold">
        Guy Gochansky / Software Engineer
      </Heading>
      <Spacer />
      <Box>
        <Link to={"/HomePage"}>
          <Button
            marginLeft={6}
            variant={"link"}
            fontSize={"lg"}
            whiteSpace={"normal"}
          >
            About Me
          </Button>
        </Link>
        <Link to={"/HomePage"}>
          <Button
            marginLeft={6}
            variant={"link"}
            fontSize={"lg"}
            whiteSpace={"normal"}
          >
            Resume
          </Button>
        </Link>
        <Link to={"/HomePage"}>
          <Button
            marginLeft={6}
            variant={"link"}
            fontSize={"lg"}
            whiteSpace={"normal"}
          >
            Projects
          </Button>
        </Link>
        <Link to={"/HomePage"}>
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
