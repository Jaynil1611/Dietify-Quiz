import { Box, Flex } from "@chakra-ui/react";
import { getMenuList } from "./Navbar";
import { DesktopProps } from "./Navbar.type";
import { NavLink } from "react-router-dom";

export const DesktopMenu = ({ menuList, token }: DesktopProps) => (
  <Flex align={"center"} gap={4}>
    {getMenuList(menuList, token).map(({ name, path }) => (
      <NavLink to={path} key={name}>
        <Box
          as="span"
          p={2}
          fontSize={"1rem"}
          color="gray.900"
          _hover={{
            textDecoration: "none",
            color: "orange.600",
          }}
        >
          {name}
        </Box>
      </NavLink>
    ))}
  </Flex>
);
