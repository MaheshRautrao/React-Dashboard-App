import SideNavbar from "../../components/SideNavbar";
import TopNav from "../../components/TopNav";
import { Flex, Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Flex>
      <SideNavbar />
      <Box flexGrow="1">
        <TopNav />
      </Box>
    </Flex>
  );
};

export default Dashboard;
