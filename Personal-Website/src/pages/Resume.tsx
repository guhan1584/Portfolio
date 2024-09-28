import { Box, Flex } from "@chakra-ui/react";
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
    <Flex direction={"column"} alignItems={"center"} justifyContent={"center"}>
      <Box padding={5}>
        <Education />
      </Box>
      <Box padding={5}>
        <Experience />
      </Box>
      <Box padding={5}>
        <Skills />
      </Box>
      <Box padding={5}>
        <MilitaryService />
      </Box>
    </Flex>
  );
};

export default Resume;
