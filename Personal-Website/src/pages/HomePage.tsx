import { Grid, GridItem } from "@chakra-ui/react";
import ProfileSection from "../components/ProfileSection";

const HomePage = () => {
  return (
    <Grid templateRows="auto 1fr auto" h="100vh" p="20px" gap={4}>
      <GridItem
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ProfileSection />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
