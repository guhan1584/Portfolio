import { Box, Heading, Flex, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <Box p="10">
      <Heading as="h1" size="2xl" mb="4">
        Hello
      </Heading>
      <Text fontSize="lg" mb="4">
        Here's who I am & what I do
      </Text>
      <Flex>
        <Button bg={"#2C3E50"} mr="4" variant="outline">
          <Link to="/Resume">Resume</Link>
        </Button>
        <Button bg="#2C3E50" variant="outline">
          <Link to="/projects">Projects</Link>
        </Button>
      </Flex>
      <Text mt="6" fontSize="md" color="gray.600">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font.
      </Text>
    </Box>
  );
};

export default IntroSection;
