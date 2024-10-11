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
import gamePlatform from "../assets/VideoGamePlatform screenshot.png";
import portfolioPicture from "../assets/PortfolioProjectPicture.png";

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
    description: `The Video Game Discovery App fetches game data using the RAWG API, allowing users to explore different
                  genres and platforms. The app uses React Query for efficient data fetching, caching, and background
                  synchronization. It supports features such as infinite scrolling and filtering by genre, platform, and
                  search terms. The app also utilizes Zustand for state management, React Router for navigation, and has
                  been deployed on Vercel.`,
    imageUrl: gamePlatform,
    technologies: [
      "React",
      "React Query",
      "Chakra-UI",
      "Axios",
      "TypeScript",
      "Zustand",
      "React Router",
    ],
    projectUrl: "https://github.com/guhan1584/VideoGameDiscoveryApp",
  },
  {
    id: 2,
    title: "Personal Website (this website)",
    description: `This website is a personal portfolio site built with React and Chakra UI. It showcases my
                  projects, skills, and experience. The site is responsive and accessible, with a clean and
                  modern design.`,
    imageUrl: portfolioPicture,
    technologies: ["React", "Chakra-UI", "TypeScript", "React Router"],
    projectUrl: "https://personal-website-lac-five.vercel.app/",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
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
