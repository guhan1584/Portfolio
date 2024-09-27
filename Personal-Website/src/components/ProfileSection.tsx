import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import Hero from "./Hero";
import IntroSection from "./IntroSection";

const ProfileSection = () => {
  return (
    <Flex direction={"row"} justifyContent={"center"} alignItems={"center"}>
      <Box marginLeft={150}>
        <Hero />
      </Box>

      <IntroSection />
    </Flex>
  );
};

export default ProfileSection;
