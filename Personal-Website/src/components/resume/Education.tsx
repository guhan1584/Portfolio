import {
  Box,
  Card,
  Grid,
  GridItem,
  Heading,
  HStack,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface EducationProps {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  computerScienceCourses: string[];
  entrepreneurshipCourses: string[];
  externalStudies: string[];
  extracurriculars: string[];
}

const Education = () => {
  const myEducation: EducationProps[] = [
    {
      school: "Reichman University",
      degree: "B.Sc. Computer Science & B.A Entrepreneurship",
      startDate: "October 2021",
      endDate: "July 2024",
      computerScienceCourses: [
        "Data Structures",
        "Algorithms",
        "System Programming (C)",
        "Operating Systems",
        "AI Software Development",
        "OOP (C#, .NET)",
        "Computer Networks",
      ],
      entrepreneurshipCourses: [
        "Finance",
        "Fintech",
        "Proptech",
        "Complex Problem Solving",
        "Entrepreneurship from 0 to 1",
        "Digital Marketing",
        "Seminar on establishing a venture",
        "Advanced Topics in Entrepreneurship and Venture Capital Investments",
        "Entrepreneurship and innovation in organizations",
      ],
      externalStudies: [
        "Full Stack Web Development (React, Node.js)",
        "Python",
      ],
      extracurriculars: ["Leaders Club member - 1 semester"],
    },
  ];
  return (
    // <VStack spacing={4} align={"stretch"}>
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Education
      </Heading>

      {myEducation.map((edu, index) => (
        <Box key={index} mb={8}>
          <Heading as="h3" size="md" mb={4}>
            {edu.school}
          </Heading>
          <Text fontWeight="bold">{edu.degree}</Text>
          <Text>
            {edu.startDate} - {edu.endDate}
          </Text>
          <Spacer padding={3} />
          {/* Display Computer Science Courses */}
          <Heading paddingBottom={2} as="h4" size="sm" mt={4} mb={2}>
            Computer Science Courses
          </Heading>
          <Grid
            // backgroundColor={"lightblue"}
            templateColumns="repeat(3, 1fr)"
            gap={6}
          >
            {edu.computerScienceCourses.map((course, i) => (
              <GridItem key={i}>
                <HStack spacing={3}>
                  <Box w={2} h={2} bg="blue.500" borderRadius="50%" />
                  <Text>{course}</Text>
                </HStack>
              </GridItem>
            ))}
          </Grid>
          <Spacer padding={3} />
          {/* Display Entrepreneurship Courses */}
          <Heading paddingBottom={2} as="h4" size="sm" mt={4} mb={2}>
            Entrepreneurship Courses
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {edu.entrepreneurshipCourses.map((course, i) => (
              <GridItem key={i}>
                <HStack spacing={3}>
                  <Box w={2} h={2} bg="blue.500" borderRadius="50%" />
                  <Text>{course}</Text>
                </HStack>
              </GridItem>
            ))}
          </Grid>
          <Spacer padding={3} />
          {/* Display External Studies */}
          <Heading paddingBottom={2} as="h4" size="sm" mt={4} mb={2}>
            External Studies
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {edu.externalStudies.map((study, i) => (
              <GridItem key={i}>
                <HStack spacing={3}>
                  <Box w={2} h={2} bg="blue.500" borderRadius="50%" />
                  <Text>{study}</Text>
                </HStack>
              </GridItem>
            ))}
          </Grid>
          <Spacer padding={3} />
          {/* Display Extracurricular Activities */}
          <Heading paddingBottom={2} as="h4" size="sm" mt={4} mb={2}>
            Extracurricular Activities
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {edu.extracurriculars.map((activity, i) => (
              <GridItem key={i}>
                <HStack spacing={3}>
                  <Box w={2} h={2} bg="blue.500" borderRadius="50%" />
                  <Text>{activity}</Text>
                </HStack>
              </GridItem>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
    // </VStack>
  );
};

export default Education;
