import {
  Flex,
  IconButton,
  Text,
  Avatar,
  Box,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
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
      rounded="md"
      shadow="lg"
      maxW="container.md"
      mx="auto"
      mt="8"
    >
      <Avatar
        mx="auto"
        size={avatarSize} // Dynamically adjusting avatar size
        name="Guy Gochansky"
        src={me}
        bg="gray.200"
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
        <IconButton
          as="a"
          href="#"
          icon={<FaFacebook />}
          size={iconSize} // Responsive icon size
          mx={iconMargin}
          variant="outline"
          aria-label="Facebook"
          colorScheme="teal"
          isRound
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaTwitter />}
          size={iconSize}
          mx={iconMargin}
          variant="outline"
          aria-label="Twitter"
          colorScheme="teal"
          isRound
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaLinkedin />}
          size={iconSize}
          mx={iconMargin}
          variant="outline"
          aria-label="LinkedIn"
          colorScheme="teal"
          isRound
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaInstagram />}
          size={iconSize}
          mx={iconMargin}
          variant="outline"
          aria-label="Instagram"
          colorScheme="teal"
          isRound
        />
      </Flex>
    </Box>
  );
};

export default Hero;
