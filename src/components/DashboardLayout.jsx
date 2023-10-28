import { Flex, Box } from "@chakra-ui/react";
import SideNavbar from "./SideNavbar";
import TopNav from "./TopNav";

const Dashboardlayout = ({ title, children }) => {
  return (
    <Flex>
      <SideNavbar />
      <Box flexGrow="1">
        <TopNav title={title} />
        <Box px="4">{children}</Box>
      </Box>
    </Flex>
  );
};

export default Dashboardlayout;
