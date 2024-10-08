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
      gap={5} // Increased gap for better spacing
    >
      <Box
        flex="1"
        textAlign="center"
        maxW="sm"
        height="auto"
        p={5}
        shadow="lg"
        borderRadius="lg" // Softer border radius for modern look
        bgGradient="linear(to-r, teal.500, blue.600)"
      >
        <Hero />
      </Box>

      <Box
        flex="1"
        textAlign="center"
        maxW="xxl"
        height="auto"
        p={5}
        shadow="lg"
        borderRadius="lg"
        bgGradient="linear(to-r, teal.500, blue.600)"
        ml={{ base: "0", md: "4" }} // Ensure margin on larger screens
      >
        <IntroSection />
      </Box>
    </Flex>
  );
};

export default ProfileSection;
