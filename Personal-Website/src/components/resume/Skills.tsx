import {
  Box,
  Text,
  Heading,
  Progress,
  SimpleGrid,
  Tooltip,
  VStack,
  Icon,
  HStack,
  Flex,
} from "@chakra-ui/react";
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLightbulb,
  FaRocket,
  FaClock,
  FaUsers,
  FaComments,
  FaPuzzlePiece,
  FaSyncAlt,
  FaBrain,
  FaRobot,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCsharp,
  SiFastapi,
  SiFlask,
  SiVercel,
  SiOpenai,
  SiVirtualbox,
} from "react-icons/si";

// Define the Skill interface
interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
  icon: any; // Icon component type
}

const Skills = () => {
  // Define your skills with icons
  const mySkills: Skill[] = [
    {
      name: "Python",
      level: 90,
      category: "Programming languages",
      icon: FaPython,
    },
    {
      name: "Java",
      level: 80,
      category: "Programming languages",
      icon: FaJava,
    },
    {
      name: "JavaScript",
      level: 80,
      category: "Programming languages",
      icon: FaJs,
    },
    {
      name: "TypeScript",
      level: 80,
      category: "Programming languages",
      icon: SiTypescript,
    },
    {
      name: "C#",
      level: 80,
      category: "Programming languages",
      icon: SiCsharp,
    },
    { name: "React", level: 90, category: "Frameworks", icon: FaReact },
    { name: "Node.js", level: 90, category: "Frameworks", icon: FaNodeJs },
    { name: "FastAPI", level: 80, category: "Frameworks", icon: SiFastapi },
    { name: "Flask", level: 80, category: "Frameworks", icon: SiFlask },
    { name: "Docker", level: 80, category: "Tools", icon: FaDocker },
    {
      name: "Virtual machines",
      level: 80,
      category: "Tools",
      icon: SiVirtualbox,
    },
    { name: "Git", level: 80, category: "Tools", icon: FaGitAlt },
    { name: "GitHub", level: 80, category: "Tools", icon: FaGithub },
    { name: "OpenAI API", level: 80, category: "Tools", icon: SiOpenai },
    { name: "GPT4ALL", level: 80, category: "Tools", icon: FaRobot }, // No specific icon, using a robot for AI
    { name: "Vercel", level: 80, category: "Tools", icon: SiVercel },
    {
      name: "Problem-solving",
      level: 90,
      category: "Personal Skills",
      icon: FaPuzzlePiece,
    },
    {
      name: "Critical Thinking",
      level: 90,
      category: "Personal Skills",
      icon: FaBrain,
    },
    {
      name: "Communication",
      level: 90,
      category: "Personal Skills",
      icon: FaComments,
    },
    {
      name: "Adaptability",
      level: 90,
      category: "Personal Skills",
      icon: FaSyncAlt,
    },
    {
      name: "Time management",
      level: 90,
      category: "Personal Skills",
      icon: FaClock,
    },
    {
      name: "Leadership",
      level: 90,
      category: "Personal Skills",
      icon: FaUsers,
    },
    {
      name: "Creativity",
      level: 90,
      category: "Personal Skills",
      icon: FaLightbulb,
    },
    {
      name: "Ambitious",
      level: 90,
      category: "Personal Skills",
      icon: FaRocket,
    },
  ];

  const categories = Array.from(
    new Set(mySkills.map((skill) => skill.category))
  );

  return (
    <Box p={0}>
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Skills
      </Heading>
      <VStack spacing={8} align="stretch">
        {categories.map((category) => (
          <Box key={category} p={4}>
            <Heading as="h3" size="lg" mb={6} color="blue.300">
              {category}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {mySkills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <Tooltip
                    key={skill.name}
                    label={`${skill.level}%`}
                    placement="top"
                  >
                    <Box
                      p={4}
                      bg="gray.800"
                      borderRadius="md"
                      boxShadow="md"
                      _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
                    >
                      <HStack>
                        <Flex
                          justifyContent="center"
                          alignItems="center"
                          borderRadius="full"
                          bg="gray.700"
                          p={3}
                          boxSize="50px"
                        >
                          <Icon as={skill.icon} w={8} h={8} color="white" />
                        </Flex>
                        <Box flex="1">
                          <Text fontSize="lg" fontWeight="bold" mb={2}>
                            {skill.name}
                          </Text>
                          <Progress
                            value={skill.level}
                            size="sm"
                            colorScheme="blue"
                            borderRadius="full"
                          />
                        </Box>
                      </HStack>
                    </Box>
                  </Tooltip>
                ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Skills;
