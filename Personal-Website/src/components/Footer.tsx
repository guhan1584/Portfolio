import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.800" color="white" textAlign="center">
      <Text>&copy; 2024 Guy Gochansky. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
