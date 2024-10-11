import {
  Box,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  VStack,
  Text,
  useColorModeValue,
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
  // Light and dark mode handling
  const cardBg = useColorModeValue("white", "gray.700");
  const hoverBg = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const hoverTextColor = useColorModeValue("gray.800", "gray.300");

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
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        Experience
      </Heading>
      <VStack spacing={8} align="stretch">
        {myExperience.map((exp, index) => (
          <Box
            key={index}
            p={5}
            bg={cardBg}
            shadow="md"
            borderRadius="md"
            transition="0.3s"
            _hover={{
              bg: hoverBg, // Change background color on hover
              boxShadow: "lg", // Apply a shadow for depth on hover
              transform: "scale(1.02)", // Slight zoom effect
            }}
          >
            <Heading as="h3" size="lg" mb={2}>
              {exp.title}
            </Heading>
            <Text fontSize="md" fontWeight="bold" mb={1}>
              {exp.company} | {exp.location}
            </Text>
            <Text
              fontSize="sm"
              color={textColor} // Text color based on theme
              mb={4}
              _hover={{ color: hoverTextColor }} // Hover color change
              transition="0.2s" // Smooth color transition
            >
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
