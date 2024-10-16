import {
  Flex,
  IconButton,
  Text,
  Avatar,
  Box,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import me from "../assets/MyPicture.jpeg";

const Hero = () => {
  const avatarSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const textSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const roleTextSize = useBreakpointValue({ base: "md", md: "lg" });
  const iconSize = useBreakpointValue({ base: "md", md: "lg" });
  const iconMargin = useBreakpointValue({ base: "2", md: "4" });

  return (
    <Box
      textAlign="center"
      p={{ base: "6", md: "10" }}
      bgGradient="linear(to-r, teal.500, blue.600)"
      rounded="lg" // Softer rounded edges for a modern look
      shadow="lg"
      maxW="container.md"
      mx="auto"
      mt="8"
    >
      <Avatar
        mx="auto"
        size={avatarSize}
        name="Guy Gochansky"
        src={me}
        bg="gray.200"
        border="2px solid white"
        rounded="full"
      />
      <VStack spacing={3} mt="4">
        <Text fontSize={textSize} fontWeight="bold" color="white">
          Guy Gochansky
        </Text>
        <Text fontSize={roleTextSize} color="gray.200">
          Software Engineer
        </Text>
      </VStack>
      <Flex justifyContent="center" mt="6">
        {/* <IconButton
          as="a"
          href="#"
          icon={<FaFacebook />}
          size={iconSize}
          mx={iconMargin}
          variant="outline"
          aria-label="Facebook"
          colorScheme="teal"
          isRound
          _hover={{ transform: "scale(1.1)", transition: "0.2s ease-in-out" }} // Hover effect for icons
        /> */}
        <IconButton
          as="a"
          href="https://github.com/guhan1584"
          icon={<FaGithub />}
          size={iconSize}
          mx={iconMargin}
          variant="outline"
          aria-label="GitHub"
          colorScheme="teal"
          isRound
          _hover={{ transform: "scale(1.1)", transition: "0.2s ease-in-out" }}
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/guy-gochansky-5aa426222/"
          icon={<FaLinkedin />}
          size={iconSize}
          mx={iconMargin}
          variant="outline"
          aria-label="LinkedIn"
          colorScheme="teal"
          isRound
          _hover={{ transform: "scale(1.1)", transition: "0.2s ease-in-out" }}
        />
        {/* <IconButton
          as="a"
          href="#"
          icon={<FaInstagram />}
          size={iconSize}
          mx={iconMargin}
          variant="outline"
          aria-label="Instagram"
          colorScheme="teal"
          isRound
          _hover={{ transform: "scale(1.1)", transition: "0.2s ease-in-out" }}
        /> */}
      </Flex>
    </Box>
  );
};

export default Hero;
