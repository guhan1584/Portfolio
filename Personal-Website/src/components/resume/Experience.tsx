import {
  Box,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  VStack,
  Text,
} from "@chakra-ui/react";
import { MdWork } from "react-icons/md";

interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

const Experience = () => {
  const myExperience: ExperienceEntry[] = [
    {
      title: "Security Analyst",
      company: "Bank Leumi",
      location: "Lod, Israel",
      startDate: "August 2019",
      endDate: "October 2021",
      responsibilities: [
        "Responsible for safeguarding critical assets and ensuring the safety of customers and employees",
        "Led and executed optimization projects for control room efficiency, improving response times and operational workflows",
        "Conducted data analysis to identify security vulnerabilities and provide actionable insights",
        "Collaborated with cross-functional teams to enhance security protocols and risk mitigation",
      ],
    },
  ];
  return (
    // <Card>
    //   <h1>Experience</h1>
    //   <h2>Software Engineer</h2>
    //   <h3>Google</h3>
    //   <h4>August 2020 - Present</h4>
    //   <p>
    //     I'm a paragraph. Click here to add your own text and edit me. It’s easy.
    //     Just click “Edit Text” or double click me to add your own content and
    //     make changes to the font.
    //   </p>
    // </Card>
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        Experience
      </Heading>
      <VStack spacing={8} align="stretch">
        {myExperience.map((exp, index) => (
          <Box key={index}>
            <Heading as="h3" size="lg" mb={2}>
              {exp.title}
            </Heading>
            <Text fontSize="md" fontWeight="bold" mb={1}>
              {exp.company} | {exp.location}
            </Text>
            <Text fontSize="sm" color="gray.600" mb={4}>
              {exp.startDate} - {exp.endDate}
            </Text>
            <List spacing={2}>
              {exp.responsibilities.map((responsibility, idx) => (
                <ListItem key={idx} display="flex" alignItems="flex-start">
                  <ListIcon as={MdWork} color="blue.500" mt={1} />
                  <Text>{responsibility}</Text>
                </ListItem>
              ))}
            </List>
            {index < myExperience.length - 1 && <Divider mt={6} />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
