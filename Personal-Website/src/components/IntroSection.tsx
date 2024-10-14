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
      p={{ base: "4", md: "6" }}
      textAlign="center"
      bgGradient="linear(to-r, teal.500, blue.600)"
      color="white"
      rounded="lg"
      shadow="lg"
      maxW="container.lg"
      mx="auto"
      mt="8"
    >
      <Heading as="h1" size={headingSize} mb="4" fontWeight="bold">
        Welcome to my Journey!
      </Heading>
      <Text fontSize={textSize} mb="6" color="gray.100">
        Discover how I blend passion, creativity, and determination to craft
        solutions and build the future. Let’s dive in!
      </Text>

      <Flex justifyContent="center" mb="8">
        <Button
          as={Link}
          to="/resume"
          size={buttonSize}
          colorScheme="teal"
          variant="outline"
          mx={2}
          _hover={{ bg: "white", color: "teal.500", shadow: "md" }} // Hover effect on buttons
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
          _hover={{ bg: "white", color: "teal.500", shadow: "md" }}
        >
          Projects
        </Button>
      </Flex>

      <Text fontSize={{ base: "md", md: "lg" }} color="gray.200">
        I’m an ambitious junior software developer with a passion for solving
        complex problems through innovative, out-of-the-box solutions. My
        analytical thinking, paired with creativity, helps me tackle challenges
        and drive continuous improvement. I thrive in collaborative environments
        where leadership and communication are key, and I'm always seeking ways
        to innovate and grow professionally. Ready to bring my skills and energy
        to create impactful solutions, I’m eager to make a difference.
      </Text>
    </Box>
  );
};

export default IntroSection;
