import {
  Flex,
  Box,
  Button,
  Heading,
  useBreakpointValue,
  IconButton,
  useDisclosure,
  VStack,
  HStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonSize = useBreakpointValue({ base: "sm", md: "lg" });
  const isMobile = useBreakpointValue({ base: true, md: false });

  const NavLinks = () => (
    <>
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
    </>
  );

  return (
    <Flex
      bgGradient="linear(to-r, teal.500, blue.600)"
      as="nav"
      p="4"
      alignItems="center"
      justifyContent="space-between"
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

      {isMobile ? (
        <>
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="outline"
            color="white"
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <VStack spacing={4} mt={4}>
                    <NavLinks />
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      ) : (
        <Box marginRight={4}>
          <HStack spacing={6}>
            <NavLinks />
          </HStack>
        </Box>
      )}
    </Flex>
  );
};

export default NavBar;
