import {
  Box,
  Text,
  Heading,
  Progress,
  SimpleGrid,
  Tooltip,
  VStack,
} from "@chakra-ui/react";

interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

const Skills = () => {
  const mySkills: Skill[] = [
    { name: "Python", level: 90, category: "Programming languages" },
    { name: "Java", level: 80, category: "Programming languages" },
    { name: "JavaScript", level: 80, category: "Programming languages" },
    { name: "TypeScript", level: 80, category: "Programming languages" },
    { name: "C#", level: 80, category: "Programming languages" },
    { name: "React", level: 90, category: "Frameworks" },
    { name: "Node.js", level: 90, category: "Frameworks" },
    { name: "FastAPI", level: 80, category: "Frameworks" },
    { name: "Flask", level: 80, category: "Frameworks" },
    { name: "Docker", level: 80, category: "Tools" },
    { name: "Virtual machines", level: 80, category: "Tools" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "GitHub", level: 80, category: "Tools" },
    { name: "OpenAI API", level: 80, category: "Tools" },
    { name: "GPT4ALL", level: 80, category: "Tools" },
    { name: "Vercel", level: 80, category: "Tools" },
    { name: "Problem-solving", level: 90, category: "Personal Skills" },
    { name: "Critical Thinking", level: 90, category: "Personal Skills" },
    { name: "Communication", level: 90, category: "Personal Skills" },
    { name: "Adaptability", level: 90, category: "Personal Skills" },
    { name: "Time management", level: 90, category: "Personal Skills" },
    { name: "Leadership", level: 90, category: "Personal Skills" },
    { name: "Creativity", level: 90, category: "Personal Skills" },
    { name: "Ambitious", level: 90, category: "Personal Skills" },
  ];

  const categories = Array.from(
    new Set(mySkills.map((skill) => skill.category))
  );

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        Skills
      </Heading>
      <VStack spacing={8} align="stretch">
        {categories.map((category) => (
          <Box key={category}>
            <Heading as="h3" size="lg" mb={4}>
              {category}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {mySkills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <Tooltip
                    key={skill.name}
                    label={`${skill.level}%`}
                    placement="top"
                  >
                    <Box>
                      <Text mb={2}>{skill.name}</Text>
                      <Progress
                        value={skill.level}
                        size="sm"
                        colorScheme="blue"
                        borderRadius="full"
                      />
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
