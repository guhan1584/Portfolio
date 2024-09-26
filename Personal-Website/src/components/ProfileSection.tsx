import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import me from "../assets/MyPicture.jpeg";

const ProfileSection = () => {
  return (
    <Box textAlign="center" p="10" bg="gray.100" rounded="md" shadow="md">
      <Image
        // borderRadius="full"
        // boxSize="150px"
        // src="me"
        // alt="Profile"
        // mb="4"
        src={me}
      />
      <Text fontSize="2xl" fontWeight="bold">
        Guy Gochansky
      </Text>
      <Text color="gray.500">Project Manager</Text>
      <Flex justifyContent="center" mt="4">
        <IconButton
          as="a"
          href="#"
          icon={<FaFacebook />}
          mx="1"
          aria-label="Facebook"
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaTwitter />}
          mx="1"
          aria-label="Twitter"
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaLinkedin />}
          mx="1"
          aria-label="LinkedIn"
        />
        <IconButton
          as="a"
          href="#"
          icon={<FaInstagram />}
          mx="1"
          aria-label="Instagram"
        />
      </Flex>
    </Box>
  );
};

export default ProfileSection;
