import { Box, Flex } from "@chakra-ui/react";
import Hero from "./Hero";
import IntroSection from "./IntroSection";

const ProfileSection = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Column on mobile, row on larger screens
      justifyContent={{ base: "flex-start", md: "center" }} // Align left on mobile, center on large screens
      alignItems="center"
      width="100%"
      height="100%" // Full height of the container
      p={6} // Padding
      gap={5}
      mx={{ base: "0", md: "auto" }} // No margin on mobile, auto margin to center on large screens
    >
      <Box
        flex="1"
        textAlign="center"
        maxW="sm"
        height={{ base: "auto", md: "100%" }} // Height adjusts based on screen size
        width={{ base: "100%", md: "50%" }} // Full width on mobile, 50% on larger screens
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
        height={{ base: "auto", md: "100%" }} // Adjust height based on screen size
        width={{ base: "100%", md: "50%" }} // Full width on mobile, 50% on larger screens
        p={5}
        shadow="lg"
        borderRadius="lg"
        bgGradient="linear(to-r, teal.500, blue.600)"
        ml={{ base: "0", md: "4" }} // No margin-left on mobile, margin on larger screens
      >
        <IntroSection />
      </Box>
    </Flex>
  );
};

export default ProfileSection;
