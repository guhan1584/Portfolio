import { Grid, GridItem } from "@chakra-ui/react";
import ProfileSection from "../components/ProfileSection";

const HomePage = () => {
  return (
    <Grid
      templateRows="1fr" // Only one row here as the footer is already outside in Layout
      h="100%" // Take up the available height in the middle section
      p="20px"
      gap={4}
    >
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
