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
      height="100%" // Make Flex take full height of the container
      p={6}
      gap={5}
    >
      <Box
        flex="1"
        textAlign="center"
        maxW="sm"
        height={{ base: "auto", md: "100%" }} // Ensure the height matches
        p={5}
        shadow="lg"
        borderRadius="lg"
        bgGradient="linear(to-r, teal.500, blue.600)"
      >
        <Hero />
      </Box>

      <Box
        flex="1"
        textAlign="center"
        maxW="xxl"
        height={{ base: "auto", md: "100%" }} // Ensure the height matches
        p={5}
        shadow="lg"
        borderRadius="lg"
        bgGradient="linear(to-r, teal.500, blue.600)"
        ml={{ base: "0", md: "4" }}
      >
        <IntroSection />
      </Box>
    </Flex>
  );
};

export default ProfileSection;
