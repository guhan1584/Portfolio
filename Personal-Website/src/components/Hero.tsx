import { Flex, IconButton, Text, Avatar, Card } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import me from "../assets/MyPicture.jpeg";

const Hero = () => {
  return (
    <Card textAlign="center" p="10" bg="lightblue" rounded="md" shadow="md">
      <Avatar
        marginLeft={"8"}
        size={"2xl"}
        name="Guy Gochansky"
        src={me}
        bg="gray.200"
      />
      <Text fontSize="2xl" fontWeight="bold">
        Guy Gochansky
      </Text>
      <Text color="gray.500">Product Manager</Text>
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
    </Card>
  );
};

export default Hero;
