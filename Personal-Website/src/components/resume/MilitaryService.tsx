import {
  Box,
  Text,
  Heading,
  VStack,
  List,
  ListItem,
  ListIcon,
  Divider,
} from "@chakra-ui/react";
import { MdWork } from "react-icons/md";

interface ExperienceEntry {
  title: string;
  rank: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

const MilitaryService = () => {
  const myMiltaryService: ExperienceEntry[] = [
    {
      title: "Combat Intelligence Corps",
      rank: "Captain",
      startDate: "March 2014",
      endDate: "March 2019",
      responsibilities: [
        "As a commander, I Led Intelligence operations and combat teams (over 100 soldiers), Evaluated cadets and combatants, providing tailored development experiences.",
        "As an intelligence officer, I am a dynamic data analyst proficient in collecting and analyzing diverse data sets to extract real-time, actionable insights and drive strategic decision-making.",
      ],
    },
  ];

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        Military Service
      </Heading>
      <VStack spacing={8} align="stretch">
        {myMiltaryService.map((exp, index) => (
          <Box key={index}>
            <Heading as="h3" size="lg" mb={2}>
              {exp.title}
            </Heading>
            <Text fontSize="md" fontWeight="bold" mb={1}>
              {exp.rank}
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
            {index < myMiltaryService.length - 1 && <Divider mt={6} />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default MilitaryService;
