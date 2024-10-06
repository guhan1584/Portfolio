import { Box, Flex } from "@chakra-ui/react";
import Hero from "./Hero";
import IntroSection from "./IntroSection";

const ProfileSection = () => {
  return (
    <Flex
      marginLeft={38}
      marginRight={3}
      direction={{ base: "column", md: "row" }}
      justifyContent="left"
      alignItems="center"
      width="100%"
      height="100%"
      p={6}
      gap={1} // Smaller gap between sections
    >
      <Box
        flex="1"
        textAlign="center"
        maxW="sm"
        height="auto" // Ensures boxes have more consistent height
        p={5} // Reduce padding to make it more compact
        shadow="lg"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500, blue.500)"
      >
        <Hero />
      </Box>

      <Box
        flex="1"
        textAlign="center"
        maxW="xxl"
        height="auto" // Adjust for consistent height
        p={5}
        shadow="lg"
        borderRadius="md"
        bgGradient="linear(to-r, teal.500, blue.500)"
      >
        <IntroSection />
      </Box>
    </Flex>
  );
};

export default ProfileSection;
