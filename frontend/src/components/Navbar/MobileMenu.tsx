import { Box, Flex } from "@chakra-ui/react";
import { getMenuList } from "./Navbar";
import { MobileProps } from "./Navbar.type";
import { NavLink } from "react-router-dom";
import {
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";

export const MobileMenu = ({ menuList, token, closeDrawer }: MobileProps) => (
  <div onClick={closeDrawer}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerBody>
        <Flex direction={"column"} bg="white" mt={10} display={{ md: "none" }}>
          {getMenuList(menuList, token).map(({ name, path }) => (
            <NavLink to={path} key={name}>
              <Flex
                key={name}
                py={4}
                mb={4}
                justify={"center"}
                alignItems={"center"}
                _hover={{
                  backgroundColor: "teal.100",
                }}
                boxShadow="md"
              >
                <Box as="span" fontSize={"1rem"} color="gray.900">
                  {name}
                </Box>
              </Flex>
            </NavLink>
          ))}
        </Flex>
      </DrawerBody>
    </DrawerContent>
  </div>
);
