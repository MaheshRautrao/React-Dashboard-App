import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";

const Topnav = ({ title }) => {
  return (
    <Flex boxShadow="lg" py="2" justify="space-between" px="50px">
      <Heading fontSize="2xl" cursor="pointer">
        {title}
      </Heading>
      <Box>
        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Topnav;
