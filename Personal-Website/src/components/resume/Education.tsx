import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

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
  const cardBg = useColorModeValue("white", "gray.700");
  const hoverBg = useColorModeValue("gray.100", "gray.600");
  // const textColor = useColorModeValue("gray.600", "gray.400");  // I need to see how to use this
  // const hoverTextColor = useColorModeValue("gray.800", "gray.300");

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

          {/* Computer Science Courses */}
          <Box
            p={4}
            bg={cardBg}
            shadow="md"
            borderRadius="md"
            mb={6}
            transition="0.3s"
            _hover={{
              bg: hoverBg, // Change background color on hover
              boxShadow: "lg", // Apply a shadow for depth on hover
              transform: "scale(1.02)", // Slight zoom effect
            }}
          >
            <Heading as="h4" size="sm" mb={2}>
              Computer Science Courses
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
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
          </Box>

          {/* Entrepreneurship Courses */}
          <Box
            p={4}
            bg={cardBg}
            shadow="md"
            borderRadius="md"
            mb={6}
            transition="0.3s"
            _hover={{
              bg: hoverBg,
              boxShadow: "lg",
              transform: "scale(1.02)",
            }}
          >
            <Heading as="h4" size="sm" mb={2}>
              Entrepreneurship Courses
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
              gap={6}
            >
              {edu.entrepreneurshipCourses.map((course, i) => (
                <GridItem key={i}>
                  <HStack spacing={3}>
                    <Box w={2} h={2} bg="blue.500" borderRadius="50%" />
                    <Text>{course}</Text>
                  </HStack>
                </GridItem>
              ))}
            </Grid>
          </Box>

          {/* External Studies */}
          <Box
            p={4}
            bg={cardBg}
            shadow="md"
            borderRadius="md"
            mb={6}
            transition="0.3s"
            _hover={{
              bg: hoverBg,
              boxShadow: "lg",
              transform: "scale(1.02)",
            }}
          >
            <Heading as="h4" size="sm" mb={2}>
              External Studies
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
              gap={6}
            >
              {edu.externalStudies.map((study, i) => (
                <GridItem key={i}>
                  <HStack spacing={3}>
                    <Box w={2} h={2} bg="blue.500" borderRadius="50%" />
                    <Text>{study}</Text>
                  </HStack>
                </GridItem>
              ))}
            </Grid>
          </Box>

          {/* Extracurriculars */}
          <Box
            p={4}
            bg={cardBg}
            shadow="md"
            borderRadius="md"
            mb={6}
            transition="0.3s"
            _hover={{
              bg: hoverBg,
              boxShadow: "lg",
              transform: "scale(1.02)",
            }}
          >
            <Heading as="h4" size="sm" mb={2}>
              Extracurricular Activities
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
              gap={6}
            >
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
        </Box>
      ))}
    </Box>
  );
};

export default Education;
