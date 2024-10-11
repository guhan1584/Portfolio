import { Box, Text, Flex, IconButton, Link, VStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      as="footer"
      p={{ base: 4, md: 8 }}
      bg="gray.800"
      color="white"
      textAlign="center"
    >
      <VStack spacing={4}>
        {/* Social Media Icons */}
        <Flex justify="center" gap={4}>
          <Link href="https://linkedin.com" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="lg"
              variant="ghost"
              color="white"
              _hover={{ color: "teal.300" }}
            />
          </Link>
          <Link href="https://github.com" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              variant="ghost"
              color="white"
              _hover={{ color: "teal.300" }}
            />
          </Link>
        </Flex>

        {/* Footer Navigation */}
        <Flex justify="center" gap={6} flexWrap="wrap">
          <RouterLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Text _hover={{ color: "teal.300" }}>About Me</Text>
          </RouterLink>
          <RouterLink
            to="/projects"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Text _hover={{ color: "teal.300" }}>Projects</Text>
          </RouterLink>
          <RouterLink
            to="/resume"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Text _hover={{ color: "teal.300" }}>Resume</Text>
          </RouterLink>
          <RouterLink
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Text _hover={{ color: "teal.300" }}>Contact</Text>
          </RouterLink>
        </Flex>

        {/* Copyright */}
        <Text fontSize="sm">
          &copy; 2024 Guy Gochansky. All rights reserved.
        </Text>

        {/* Back to Top Button */}
        <IconButton
          aria-label="Back to top"
          icon={<FaArrowUp />}
          size="lg"
          variant="ghost"
          color="white"
          _hover={{ color: "teal.300" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </VStack>
    </Box>
  );
};

export default Footer;
