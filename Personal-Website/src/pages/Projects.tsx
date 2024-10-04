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
    title: "Video Game Discovery Platform",
    description: `Video Game Discovery App is a React-based application designed to help users explore a
                  variety of video games by genre, platform, and search criteria. The app fetches data from
                  the RAWG API and displays it in an easy-to-navigate format, providing game details and filtering options.`,
    imageUrl: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Chakra-UI", "Axios", "Express"],
    projectUrl: "https://github.com/yourusername/ecommerce-platform",
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
