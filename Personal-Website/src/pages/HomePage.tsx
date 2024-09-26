import { Grid, GridItem } from "@chakra-ui/react";
import IntroSection from "../components/IntroSection";
import NavBar from "../components/NavBar";
import ProfileSection from "../components/ProfileSection";

const HomePage = () => {
  return (
    <Grid templateColumns="1fr 1fr" templateRows="auto" h="100vh" p="20px">
      <GridItem colSpan={2}>
        <NavBar />
      </GridItem>
      <GridItem>
        <ProfileSection />
      </GridItem>
      <GridItem>
        <IntroSection />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
