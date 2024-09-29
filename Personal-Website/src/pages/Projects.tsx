import {
  Container,
  Heading,
  SimpleGrid,
  LinkBox,
  VStack,
  LinkOverlay,
  Box,
  Badge,
  Image,
  Text,
} from "@chakra-ui/react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React frontend and Node.js backend.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    projectUrl: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A responsive weather application using OpenWeatherMap API.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "API Integration", "Styled Components"],
    projectUrl: "https://github.com/yourusername/weather-app",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A Kanban-style task management app with drag-and-drop functionality.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "TypeScript", "Redux", "Firebase"],
    projectUrl: "https://github.com/yourusername/task-management",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {projects.map((project) => (
          <LinkBox
            key={project.id}
            as="article"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={project.imageUrl} alt={project.title} />
            <VStack align="start" p={5} spacing={3}>
              <LinkOverlay href={project.projectUrl} isExternal>
                <Heading as="h3" size="md">
                  {project.title}
                </Heading>
              </LinkOverlay>
              <Text fontSize="sm">{project.description}</Text>
              <Box>
                {project.technologies.map((tech, index) => (
                  <Badge key={index} mr={2} mb={2} colorScheme="blue">
                    {tech}
                  </Badge>
                ))}
              </Box>
            </VStack>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
