import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import Skills from "../components/resume/Skills";
import MilitaryService from "../components/resume/MilitaryService";

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Skills {
  name: string;
}

interface ResumeProps {
  workExperience: WorkExperience[];
  // education: Education[];
  skills: Skills[];
}

const Resume = () => {
  return (
    <Container maxW={"container.lg"} py={10}>
      <VStack spacing={8} align={"stretch"}>
        <Box>
          <Heading as={"h1"} size={"2xl"} mb={2}>
            Guy Gochansky
          </Heading>
          <Text fontSize={"xl"} color={"gray.600"}>
            Profuct Manager
          </Text>
        </Box>

        <Divider />

        <Education />

        <Box padding={5}>
          <Experience />
        </Box>
        <Box padding={5}>
          <Skills />
        </Box>
        <Box padding={5}>
          <MilitaryService />
        </Box>
      </VStack>
    </Container>
  );
};

export default Resume;
