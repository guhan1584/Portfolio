import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import ProfileSection from "../components/ProfileSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Grid templateRows="auto 1fr auto" h="100vh" p="20px" gap={4}>
      <GridItem>
        <NavBar />
      </GridItem>
      <GridItem
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ProfileSection />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
