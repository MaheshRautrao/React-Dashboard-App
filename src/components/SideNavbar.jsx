import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

import { Heading, Box, HStack, Icon, Stack, Text } from "@chakra-ui/react";

const Sidenavbar = () => {
  const navlinks = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },
    { icon: GrTransaction, text: "Transactions", link: "/transactions" },
  ];

  return (
    <Stack
      minWidth="250px"
      height="100vh"
      justify="space-between"
      py="2.5"
      boxShadow="xl"
    >
      <Box marginTop="20px">
        <Box>
          <Heading as="h1" fontSize="xl" textAlign="center">
            @Mahesh Rautrao
          </Heading>
        </Box>
        <Box py="30px" px="10px">
          <Stack>
            {navlinks.map((nav) => {
              return (
                <HStack
                  key={nav.text}
                  borderRadius="5px"
                  p="2"
                  _hover={{
                    bg: "#F3F3F7",
                    color: "#171717",
                  }}
                  color="#797E82"
                  cursor="pointer"
                >
                  <Icon as={nav.icon} />
                  <Text>{nav.text}</Text>
                </HStack>
              );
            })}
          </Stack>
        </Box>
      </Box>
      <Box py="30px" px="10px">
        <HStack
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
          borderRadius="5px"
          cursor="pointer"
          p="2"
        >
          <Icon as={BiSupport} />
          <Text>Support</Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenavbar;
