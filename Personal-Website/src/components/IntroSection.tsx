import {
  Box,
  Heading,
  Flex,
  Button,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const IntroSection = () => {
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl" });
  const textSize = useBreakpointValue({ base: "lg", md: "xl" });
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box
      p={{ base: "2", md: "2" }}
      textAlign="center"
      bgGradient="linear(to-r, teal.500, blue.600)"
      color="white"
      rounded="md"
      shadow="md"
      maxW="container.lg"
      mx="auto"
      mt="8"
    >
      <Heading as="h1" size={headingSize} mb="4" fontWeight="bold">
        Hello There!
      </Heading>
      <Text fontSize={textSize} mb="6">
        This is who I am and what I do
      </Text>

      <Flex justifyContent="center" mb="8">
        <Button
          as={Link}
          to="/resume"
          size={buttonSize}
          colorScheme="teal"
          variant="outline"
          mx={2}
          _hover={{ bg: "white", color: "teal.500" }}
        >
          Resume
        </Button>
        <Button
          as={Link}
          to="/projects"
          size={buttonSize}
          colorScheme="teal"
          variant="outline"
          mx={2}
          _hover={{ bg: "white", color: "teal.500" }}
        >
          Projects
        </Button>
      </Flex>

      <Text fontSize={{ base: "md", md: "lg" }} color="gray.200">
        Passionate about software development and continuous learning, I thrive
        on solving analytical problems with creative solutions. As an
        out-of-the-box thinker and dedicated team player, I also have a strong
        interest in innovation, constantly seeking new ideas to improve
        processes and technology. I’m confident that my experience,
        determination, and collaborative approach can bring valuable
        contributions to any team.
      </Text>
    </Box>
  );
};

export default IntroSection;
