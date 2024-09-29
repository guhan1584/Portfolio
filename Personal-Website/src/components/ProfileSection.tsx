import { Box, Flex } from "@chakra-ui/react";
import Hero from "./Hero";
import IntroSection from "./IntroSection";

const ProfileSection = () => {
  return (
    <Flex direction={"row"} justifyContent={"center"} alignItems={"center"}>
      <Box marginLeft={250}>
        <Hero />
      </Box>

      <IntroSection />
    </Flex>
  );
};

export default ProfileSection;
