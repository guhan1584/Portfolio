import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import Skills from "../components/resume/Skills";
import MilitaryService from "../components/resume/MilitaryService";

const Resume = () => {
  return (
    <Container maxW={"container.lg"} py={10}>
      <VStack spacing={8} align={"stretch"}>
        <Box>
          <Heading as={"h1"} size={"2xl"} mb={2}>
            Guy Gochansky
          </Heading>
          <Text fontSize={"xl"} color={"gray.600"}>
            Product Manager
          </Text>
        </Box>
        <Divider />
        <Education />
        <Experience />
        <Skills />
        <MilitaryService />
      </VStack>
    </Container>
  );
};

export default Resume;
